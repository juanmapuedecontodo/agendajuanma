/* El Grimorio — módulo independiente para Mi Agenda / La Mansión de Juanma.
   Requiere el cliente Supabase ya autenticado. No utiliza service_role ni la API Edge. */
export function initGrimoire({ supabase, getUserId, toast = () => {} }) {
  const root = document.getElementById('grimoireApp');
  if (!root) return { onOpen() {} };

  const state = {
    ready: false,
    diary: [], rituals: [], potions: [],
    section: 'home', diaryMode: 'calendar',
    diaryMonth: monthKey(diariesToday()), graphMonth: monthKey(diariesToday()),
    ritualFilter: 'all', ritualSort: 'newest',
    editing: null, searchTerm: '', selectedDiaryDate: diariesToday()
  };

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const pad = n => String(n).padStart(2, '0');
  const isoDate = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const monthKey = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}`;
  const parseDate = s => { const [y,m,d] = String(s).split('-').map(Number); return new Date(y,m-1,d,12); };
  const fmtDate = s => s ? parseDate(s).toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'}) : '';
  const fmtTime = s => s ? new Date(s).toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Madrid'}) : '';
  const diariesToday = () => {
    const now = new Date();
    const localParts = new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'}).formatToParts(now);
    const p = Object.fromEntries(localParts.map(x=>[x.type,x.value]));
    const base = new Date(Number(p.year),Number(p.month)-1,Number(p.day),12);
    if (Number(p.hour) < 4) base.setDate(base.getDate()-1);
    return isoDate(base);
  };
  const currentMadridDateTime = () => new Date().toISOString();
  const monthBounds = key => { const [y,m]=key.split('-').map(Number); return {start:`${key}-01`,end:isoDate(new Date(y,m,0,12)),year:y,month:m}; };
  const monthLabel = key => { const {year,month}=monthBounds(key); return new Date(year,month-1,1).toLocaleDateString('es-ES',{month:'long',year:'numeric'}); };
  const notify = msg => { toast(msg); };
  const userId = () => getUserId?.();
  const safeUrl = raw => { try { const u=new URL(String(raw||'').trim()); return ['http:','https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };

  async function loadAll() {
    if (!userId()) return;
    root.innerHTML = `<div class="grimoire-loading"><span>✧</span><p>Abriendo las páginas del Grimorio…</p></div>`;
    try {
      const [d,r,p] = await Promise.all([
        supabase.from('grimoire_diary').select('*').order('diary_date',{ascending:false}),
        supabase.from('grimoire_rituals').select('*').order('created_at',{ascending:false}),
        supabase.from('grimoire_potions').select('*').order('created_at',{ascending:false})
      ]);
      const err = d.error || r.error || p.error;
      if (err) throw err;
      state.diary=d.data||[]; state.rituals=r.data||[]; state.potions=p.data||[];
      state.ready=true;
      render();
    } catch (error) {
      console.error('Grimorio: error al cargar',error);
      root.innerHTML = `<div class="grimoire-paper"><h2>No hemos podido abrir el Grimorio</h2><p>${esc(error.message||'Error desconocido')}</p><button class="grimoire-btn primary" data-action="reload">Volver a intentar</button></div>`;
    }
  }

  function shell(content) {
    return `<div class="grimoire-shell">
      <header class="grimoire-header"><div><div class="grimoire-eyebrow">TORRE DEL CONOCIMIENTO</div><h1>El Grimorio</h1><p>Un lugar para guardar tus días, rituales y conocimientos.</p></div><div class="grimoire-sigil">✧</div></header>
      <nav class="grimoire-tabs" aria-label="Secciones del Grimorio">
        <button data-section="home" class="${state.section==='home'?'active':''}">⌂ <span>Inicio</span></button>
        <button data-section="diary" class="${state.section==='diary'?'active':''}">☾ <span>Diario</span></button>
        <button data-section="rituals" class="${state.section==='rituals'?'active':''}">✧ <span>Rituales</span></button>
        <button data-section="potions" class="${state.section==='potions'?'active':''}">⚗ <span>Pócimas</span></button>
      </nav>${content}</div>`;
  }

  function render() {
    if (!state.ready) return;
    let content='';
    if(state.section==='home') content=renderHome();
    if(state.section==='diary') content=renderDiary();
    if(state.section==='rituals') content=renderRituals();
    if(state.section==='potions') content=renderPotions();
    root.innerHTML=shell(content);
  }

  function renderHome() {
    const todayEntry=state.diary.find(x=>x.diary_date===diariesToday());
    const recent=state.diary.slice(0,3);
    return `<section class="grimoire-intro"><div><span class="grimoire-kicker">BIENVENIDO A TU LIBRO PERSONAL</span><h2>Todo lo que merece permanecer, tiene aquí su página.</h2><p>Escribe cómo ha sido tu día, conserva tus rituales y reúne tus pócimas.</p></div></section>
      <section class="grimoire-search"><label for="grimoireGlobalSearch">Buscar en todo el Grimorio</label><div class="grimoire-searchline"><input id="grimoireGlobalSearch" type="search" placeholder="Una palabra, un recuerdo, un ingrediente…" value="${esc(state.searchTerm)}"><button class="grimoire-btn primary" data-action="global-search">Buscar</button></div></section>
      <div class="grimoire-home-grid">
        <article class="grimoire-home-card diary"><div class="grimoire-card-icon">☾</div><h3>Diario personal</h3><p>Tu día, tus emociones y tu energía.</p><div class="grimoire-card-actions"><button class="grimoire-btn primary" data-action="open-diary">${todayEntry?'Ver el diario de hoy':'Escribir el diario de hoy'}</button><button class="grimoire-btn" data-section="diary">Consultar</button></div></article>
        <article class="grimoire-home-card rituals"><div class="grimoire-card-icon">✧</div><h3>Libro de rituales</h3><p>Tus prácticas, materiales y recursos.</p><div class="grimoire-card-actions"><button class="grimoire-btn primary" data-section="rituals">Abrir rituales</button><button class="grimoire-btn" data-action="new-ritual">Añadir ritual</button></div></article>
        <article class="grimoire-home-card potions"><div class="grimoire-card-icon">⚗</div><h3>Recetario de pócimas</h3><p>Ingredientes, efectos y preparaciones.</p><div class="grimoire-card-actions"><button class="grimoire-btn primary" data-section="potions">Abrir pócimas</button><button class="grimoire-btn" data-action="new-potion">Añadir pócima</button></div></article>
      </div>
      <div class="grimoire-home-lower"><article class="grimoire-paper"><div class="grimoire-section-title"><div><span class="grimoire-kicker">ÚLTIMAS PÁGINAS</span><h3>Diario reciente</h3></div><button class="grimoire-text-btn" data-section="diary">Ver todo →</button></div>${recent.length?recent.map(x=>`<button class="grimoire-recent" data-action="view-diary" data-id="${x.id}"><span class="grimoire-recent-date">${esc(fmtDate(x.diary_date))}</span><span>${esc((x.description||'Sin descripción').slice(0,100))}</span></button>`).join(''):'<p class="grimoire-empty">Todavía no has escrito ninguna entrada.</p>'}</article>
      <article class="grimoire-paper"><div class="grimoire-section-title"><div><span class="grimoire-kicker">TU COLECCIÓN</span><h3>El archivo</h3></div></div><div class="grimoire-counts"><div><strong>${state.diary.length}</strong><span>Entradas</span></div><div><strong>${state.rituals.length}</strong><span>Rituales</span></div><div><strong>${state.potions.length}</strong><span>Pócimas</span></div></div><p class="grimoire-note">Cada página es tuya. Puedes volver, corregirla o ampliarla cuando quieras.</p></article></div>
      ${state.searchTerm?renderSearchResults(state.searchTerm):''}`;
  }

  function scoreField(name,label,value) {
    return `<div class="grimoire-score-field"><div class="grimoire-score-label"><label>${label}</label><output data-score-output="${name}">${value||'—'}/10</output></div><input type="range" min="1" max="10" step="1" name="${name}" value="${value||5}" data-score="${name}"><div class="grimoire-range-labels"><span>1 · Muy bajo</span><span>10 · Muy alto</span></div></div>`;
  }
  const DEFAULT_TAGS=['Feliz','Tranquilo','Ilusionado','Motivado','Agradecido','Nostálgico','Triste','Ansioso','Frustrado','Cansado','Saturado','Desconectado','Orgulloso','Acompañado','Solitario','En paz','Creativo','Aburrido'];
  function renderDiary() {
    const {start,end}=monthBounds(state.diaryMonth);
    const monthEntries=state.diary.filter(x=>x.diary_date>=start&&x.diary_date<=end);
    const selected=state.diary.find(x=>x.diary_date===state.selectedDiaryDate);
    return `<div class="grimoire-section-head"><div><span class="grimoire-kicker">TUS RECUERDOS</span><h2>Diario personal</h2><p>Un espacio para registrar el día sin exigencias.</p></div><button class="grimoire-btn primary" data-action="new-diary">＋ Escribir entrada</button></div>
      <div class="grimoire-subnav"><button data-diary-mode="calendar" class="${state.diaryMode==='calendar'?'active':''}">Calendario</button><button data-diary-mode="list" class="${state.diaryMode==='list'?'active':''}">Listado</button><button data-action="show-graph">Gráfico del mes</button></div>
      ${state.diaryMode==='calendar'?renderDiaryCalendar(monthEntries):renderDiaryList(monthEntries)}
      ${selected?renderDiaryDetail(selected):''}`;
  }
  function renderDiaryCalendar(entries) {
    const {year,month}=monthBounds(state.diaryMonth); const first=new Date(year,month-1,1,12); const offset=(first.getDay()+6)%7; const days=new Date(year,month,0).getDate();
    const cells=[]; for(let i=0;i<offset;i++)cells.push('<div class="grimoire-cal-blank"></div>');
    for(let d=1;d<=days;d++) { const date=`${year}-${pad(month)}-${pad(d)}`; const entry=entries.find(x=>x.diary_date===date); const avg=entry?Math.round((Number(entry.productivity)+Number(entry.emotional_state)+Number(entry.energy))/3):null; cells.push(`<button class="grimoire-cal-day ${entry?'has-entry':''} ${state.selectedDiaryDate===date?'selected':''}" data-action="select-diary-date" data-date="${date}"><strong>${d}</strong>${entry?`<span class="grimoire-cal-score">${avg}/10</span><i></i>`:''}</button>`); }
    return `<div class="grimoire-paper"><div class="grimoire-month-nav"><button data-action="diary-month-prev" aria-label="Mes anterior">‹</button><h3>${esc(monthLabel(state.diaryMonth))}</h3><button data-action="diary-month-next" aria-label="Mes siguiente">›</button></div><div class="grimoire-calendar"><div class="grimoire-weekdays"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div><div class="grimoire-calendar-grid">${cells.join('')}</div></div><p class="grimoire-calendar-legend">Los días con una pequeña marca tienen una entrada. La cifra muestra la media de tus tres puntuaciones.</p></div>`;
  }
  function renderDiaryList(entries) {
    return `<div class="grimoire-paper"><div class="grimoire-month-nav"><button data-action="diary-month-prev" aria-label="Mes anterior">‹</button><h3>${esc(monthLabel(state.diaryMonth))}</h3><button data-action="diary-month-next" aria-label="Mes siguiente">›</button></div>${entries.length?`<div class="grimoire-entry-list">${entries.map(x=>`<article class="grimoire-entry-row"><div class="grimoire-entry-date"><strong>${parseDate(x.diary_date).getDate()}</strong><span>${parseDate(x.diary_date).toLocaleDateString('es-ES',{month:'short',year:'numeric'})}</span></div><div class="grimoire-entry-preview"><h3>${esc(fmtDate(x.diary_date))}</h3><p>${esc((x.description||'Sin descripción').slice(0,160))}</p><div class="grimoire-tags">${(x.tags||[]).slice(0,5).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div><button class="grimoire-btn" data-action="view-diary" data-id="${x.id}">Abrir</button></article>`).join('')}</div>`:'<p class="grimoire-empty">No hay entradas en este mes.</p>'}</div>`;
  }
  function renderDiaryDetail(entry) {
    return `<article class="grimoire-paper grimoire-diary-detail"><div class="grimoire-section-title"><div><span class="grimoire-kicker">PÁGINA DEL DIARIO</span><h3>${esc(fmtDate(entry.diary_date))}</h3><p>Escrito a las ${esc(fmtTime(entry.written_at))}</p></div><div class="grimoire-inline-actions"><button class="grimoire-btn" data-action="edit-diary" data-id="${entry.id}">Editar</button><button class="grimoire-btn danger" data-action="delete-diary" data-id="${entry.id}">Eliminar</button></div></div><div class="grimoire-score-chips"><span>Productividad <b>${entry.productivity}/10</b></span><span>Estado emocional <b>${entry.emotional_state}/10</b></span><span>Energía <b>${entry.energy}/10</b></span></div>${(entry.tags||[]).length?`<div class="grimoire-tags large">${entry.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:''}<div class="grimoire-diary-text">${esc(entry.description||'').replace(/\n/g,'<br>')||'<em>Esta página está en blanco.</em>'}</div></article>`;
  }
  function renderGraph() {
    const {start,end,year,month}=monthBounds(state.graphMonth); const entries=state.diary.filter(x=>x.diary_date>=start&&x.diary_date<=end); const days=new Date(year,month,0).getDate();
    const w=760,h=290,left=42,right=18,top=18,bottom=38,plotW=w-left-right,plotH=h-top-bottom;
    const xFor=day=>left+(day-1)*(plotW/Math.max(days-1,1)); const yFor=value=>top+(10-Number(value))*plotH/9;
    const colors={productivity:'#80608d',emotional_state:'#b87976',energy:'#789276'};
    const series=[['productivity','Productividad'],['emotional_state','Estado emocional'],['energy','Energía']];
    const grid=Array.from({length:10},(_,i)=>{const val=10-i,y=yFor(val);return `<line x1="${left}" y1="${y}" x2="${w-right}" y2="${y}" class="grimoire-chart-gridline"/><text x="${left-12}" y="${y+4}" text-anchor="end" class="grimoire-chart-axis">${val}</text>`}).join('');
    const xTicks=Array.from({length:days},(_,i)=>i+1).filter(d=>d===1||d%5===0||d===days).map(d=>`<text x="${xFor(d)}" y="${h-10}" text-anchor="middle" class="grimoire-chart-axis">${d}</text>`).join('');
    const lines=series.map(([key,label])=>{const points=entries.filter(e=>e[key]!=null).map(e=>`${xFor(Number(e.diary_date.slice(8,10)))},${yFor(e[key])}`).join(' ');const circles=entries.filter(e=>e[key]!=null).map(e=>`<circle cx="${xFor(Number(e.diary_date.slice(8,10)))}" cy="${yFor(e[key])}" r="4" fill="${colors[key]}"/>`).join('');return `<polyline points="${points}" fill="none" stroke="${colors[key]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${circles}`}).join('');
    const averages=series.map(([key,label])=>{const vals=entries.map(e=>Number(e[key])).filter(Number.isFinite);const avg=vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1):'—';return `<span><i style="background:${colors[key]}"></i>${label}: <b>${avg}</b></span>`}).join('');
    return `<div class="grimoire-modal-backdrop" data-action="close-graph"><section class="grimoire-modal grimoire-graph-modal" role="dialog" aria-modal="true" aria-label="Gráfico del mes" data-stop><div class="grimoire-section-title"><div><span class="grimoire-kicker">EVOLUCIÓN PERSONAL</span><h2>Gráfico del mes</h2></div><button class="grimoire-close" data-action="close-graph">×</button></div><div class="grimoire-month-nav"><button data-action="graph-prev">‹</button><h3>${esc(monthLabel(state.graphMonth))}</h3><button data-action="graph-next">›</button></div>${entries.length?`<div class="grimoire-chart-wrap"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Evolución de productividad, estado emocional y energía">${grid}${lines}${xTicks}</svg></div><div class="grimoire-chart-legend">${averages}</div><p class="grimoire-calendar-legend">Se muestran únicamente los días que tienen entrada. Los días sin registro no cuentan como cero.</p>`:'<p class="grimoire-empty">Todavía no hay entradas en este mes para dibujar el gráfico.</p>'}</section></div>`;
  }

  function renderRituals() {
    const purposes=[...new Set(state.rituals.map(x=>x.purpose).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'es'));
    let items=[...state.rituals]; if(state.ritualFilter==='favorites')items=items.filter(x=>x.is_favorite); else if(state.ritualFilter!=='all')items=items.filter(x=>x.purpose===state.ritualFilter);
    items.sort((a,b)=>state.ritualSort==='az'?a.name.localeCompare(b.name,'es'):new Date(b.created_at)-new Date(a.created_at));
    return `<div class="grimoire-section-head"><div><span class="grimoire-kicker">TU LIBRO DE PRÁCTICAS</span><h2>Rituales</h2><p>Conserva tus rituales, materiales, procedimientos y recursos.</p></div><button class="grimoire-btn primary" data-action="new-ritual">＋ Nuevo ritual</button></div><div class="grimoire-controls"><select id="ritualFilter"><option value="all">Todos los propósitos</option><option value="favorites" ${state.ritualFilter==='favorites'?'selected':''}>★ Favoritos</option>${purposes.map(p=>`<option value="${esc(p)}" ${state.ritualFilter===p?'selected':''}>${esc(p)}</option>`).join('')}</select><select id="ritualSort"><option value="newest" ${state.ritualSort==='newest'?'selected':''}>Más recientes</option><option value="az" ${state.ritualSort==='az'?'selected':''}>Orden alfabético</option></select></div>${items.length?`<div class="grimoire-ritual-grid">${items.map(x=>`<article class="grimoire-ritual-card"><button class="grimoire-fav ${x.is_favorite?'on':''}" data-action="toggle-favorite" data-id="${x.id}" aria-label="${x.is_favorite?'Quitar de':'Añadir a'} favoritos">${x.is_favorite?'★':'☆'}</button>${safeUrl(x.image_url)?`<img src="${esc(safeUrl(x.image_url))}" alt="Ilustración de ${esc(x.name)}" loading="lazy" onerror="this.style.display='none'">`:`<div class="grimoire-ritual-placeholder">✧</div>`}<div class="grimoire-ritual-card-body"><span class="grimoire-kicker">${esc(x.purpose||'SIN PROPÓSITO')}</span><h3>${esc(x.name)}</h3><p>${esc((x.procedure||x.materials||'Sin descripción').slice(0,110))}</p><button class="grimoire-btn" data-action="view-ritual" data-id="${x.id}">Abrir página</button></div></article>`).join('')}</div>`:'<div class="grimoire-paper"><p class="grimoire-empty">${state.rituals.length?'No hay rituales en este filtro.':'Tu libro de rituales está esperando su primera página.'}</p></div>'}`;
  }
  function renderRitualDetail(x) {
    const resources=Array.isArray(x.extra_resources)?x.extra_resources:[];
    return `<div class="grimoire-modal-backdrop" data-action="close-detail"><article class="grimoire-modal grimoire-book-page" role="dialog" aria-modal="true" data-stop><div class="grimoire-book-top"><span class="grimoire-kicker">LIBRO DE RITUALES · ${esc(x.purpose||'SIN PROPÓSITO')}</span><div class="grimoire-inline-actions"><button class="grimoire-btn" data-action="edit-ritual" data-id="${x.id}">Editar</button><button class="grimoire-btn danger" data-action="delete-ritual" data-id="${x.id}">Eliminar</button><button class="grimoire-close" data-action="close-detail">×</button></div></div><h2>${esc(x.name)}</h2><div class="grimoire-book-layout"><div class="grimoire-book-copy"><section><h3>Materiales</h3><div>${esc(x.materials||'No se han indicado materiales.').replace(/\n/g,'<br>')}</div></section><section><h3>Procedimiento</h3><div>${esc(x.procedure||'No se ha indicado un procedimiento.').replace(/\n/g,'<br>')}</div></section></div><aside class="grimoire-book-art">${safeUrl(x.image_url)?`<img src="${esc(safeUrl(x.image_url))}" alt="Ilustración de ${esc(x.name)}" onerror="this.style.display='none'">`:'<div class="grimoire-art-fallback">✧<small>Sin ilustración</small></div>'}</aside></div>${resources.length?`<section class="grimoire-book-resources"><h3>Recursos extra</h3><ul>${resources.filter(r=>safeUrl(r.url)).map((r,i)=>`<li><a href="${esc(safeUrl(r.url))}" target="_blank" rel="noopener noreferrer">${esc(r.label||`Recurso ${i+1}`)} ↗</a></li>`).join('')}</ul></section>`:''}</article></div>`;
  }
  function renderPotions() {
    return `<div class="grimoire-section-head"><div><span class="grimoire-kicker">RECETARIO ALQUÍMICO</span><h2>Pócimas</h2><p>Ingredientes, efectos y preparaciones reunidos en un solo lugar.</p></div><button class="grimoire-btn primary" data-action="new-potion">＋ Nueva pócima</button></div><div class="grimoire-potion-list">${state.potions.length?state.potions.map(x=>`<article class="grimoire-potion-row"><div class="grimoire-potion-symbol">⚗</div><div class="grimoire-potion-info"><h3>${esc(x.name)}</h3><p>${esc((x.effects||'Sin efectos descritos').slice(0,150))}</p><span>${esc((x.ingredients||'').replace(/\n/g,' · ').slice(0,120))}</span></div><div class="grimoire-inline-actions"><button class="grimoire-btn" data-action="view-potion" data-id="${x.id}">Consultar</button><button class="grimoire-btn" data-action="edit-potion" data-id="${x.id}">Editar</button></div></article>`).join(''):'<div class="grimoire-paper"><p class="grimoire-empty">Todavía no has escrito ninguna pócima.</p></div>'}</div>`;
  }
  function renderPotionDetail(x) {
    return `<div class="grimoire-modal-backdrop" data-action="close-detail"><article class="grimoire-modal grimoire-potion-detail" role="dialog" aria-modal="true" data-stop><div class="grimoire-section-title"><div><span class="grimoire-kicker">RECETARIO ALQUÍMICO</span><h2>${esc(x.name)}</h2></div><div class="grimoire-inline-actions"><button class="grimoire-btn" data-action="edit-potion" data-id="${x.id}">Editar</button><button class="grimoire-btn danger" data-action="delete-potion" data-id="${x.id}">Eliminar</button><button class="grimoire-close" data-action="close-detail">×</button></div></div><section><h3>Efectos</h3><p>${esc(x.effects||'Sin efectos descritos.').replace(/\n/g,'<br>')}</p></section><section><h3>Ingredientes</h3><p>${esc(x.ingredients||'Sin ingredientes descritos.').replace(/\n/g,'<br>')}</p></section><section><h3>Preparación</h3><p>${esc(x.preparation||'Sin preparación descrita.').replace(/\n/g,'<br>')}</p></section></article></div>`;
  }

  function renderSearchResults(q) {
    const term=q.toLocaleLowerCase('es');
    const matches=[];
    state.diary.filter(x=>[x.description,...(x.tags||[])].join(' ').toLocaleLowerCase('es').includes(term)).forEach(x=>matches.push({type:'Diario',title:fmtDate(x.diary_date),snippet:x.description||'',action:'view-diary',id:x.id}));
    state.rituals.filter(x=>[x.name,x.purpose,x.materials,x.procedure].join(' ').toLocaleLowerCase('es').includes(term)).forEach(x=>matches.push({type:'Ritual',title:x.name,snippet:x.purpose||'',action:'view-ritual',id:x.id}));
    state.potions.filter(x=>[x.name,x.effects,x.ingredients,x.preparation].join(' ').toLocaleLowerCase('es').includes(term)).forEach(x=>matches.push({type:'Pócima',title:x.name,snippet:x.effects||'',action:'view-potion',id:x.id}));
    return `<section class="grimoire-paper grimoire-search-results"><div class="grimoire-section-title"><div><span class="grimoire-kicker">RESULTADOS</span><h3>Coincidencias para «${esc(q)}»</h3></div><button class="grimoire-text-btn" data-action="clear-search">Cerrar</button></div>${matches.length?matches.map(x=>`<button class="grimoire-search-result" data-action="${x.action}" data-id="${x.id}"><span class="grimoire-result-type">${x.type}</span><strong>${esc(x.title)}</strong><small>${esc(x.snippet.slice(0,130))}</small></button>`).join(''):'<p class="grimoire-empty">No he encontrado coincidencias.</p>'}</section>`;
  }

  function formOverlay(title,body,submitLabel='Guardar') {
    return `<div class="grimoire-modal-backdrop" data-action="close-form"><form class="grimoire-modal grimoire-form-modal" id="grimoireForm" data-stop><div class="grimoire-section-title"><div><span class="grimoire-kicker">EL GRIMORIO</span><h2>${esc(title)}</h2></div><button type="button" class="grimoire-close" data-action="close-form">×</button></div>${body}<div class="grimoire-form-foot"><button type="button" class="grimoire-btn" data-action="close-form">Cancelar</button><button type="submit" class="grimoire-btn primary">${submitLabel}</button></div></form></div>`;
  }
  function renderDiaryForm(entry=null, dateOverride=null) {
    const date=entry?.diary_date||dateOverride||diariesToday(); const tags=entry?.tags||[]; const time=entry?.written_at?fmtTime(entry.written_at):new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Madrid'});
    const body=`<div class="grimoire-form-note">La fecha se asigna automáticamente. Entre las 00:00 y las 03:59, la entrada pertenece al día anterior. Puedes cambiarla si lo necesitas.</div><div class="grimoire-form-grid"><div class="grimoire-field"><label>Fecha del diario</label><input type="date" name="diary_date" value="${esc(date)}" required></div><div class="grimoire-field"><label>Hora de escritura</label><input type="text" value="${esc(time)}" disabled><small>Se conserva la hora real de creación.</small></div></div><div class="grimoire-score-grid">${scoreField('productivity','Productividad',entry?.productivity||5)}${scoreField('emotional_state','Estado emocional',entry?.emotional_state||5)}${scoreField('energy','Energía',entry?.energy||5)}</div><div class="grimoire-field"><label>¿Cómo me he sentido?</label><div class="grimoire-tag-picker">${DEFAULT_TAGS.map(t=>`<label class="grimoire-check-tag"><input type="checkbox" name="tags" value="${esc(t)}" ${tags.includes(t)?'checked':''}><span>${esc(t)}</span></label>`).join('')}</div><div class="grimoire-custom-tag"><input id="customDiaryTag" type="text" placeholder="Añadir una etiqueta propia"><button type="button" class="grimoire-btn" data-action="add-diary-tag">Añadir</button></div><div id="customDiaryTags" class="grimoire-tags">${tags.filter(t=>!DEFAULT_TAGS.includes(t)).map(t=>`<span data-tag="${esc(t)}">${esc(t)} <button type="button" data-action="remove-custom-tag" data-tag="${esc(t)}">×</button></span>`).join('')}</div></div><div class="grimoire-field"><label>Describe tu día</label><textarea name="description" rows="7" placeholder="¿Qué ha pasado hoy? ¿Qué te gustaría recordar?">${esc(entry?.description||'')}</textarea></div>`;
    return formOverlay(entry?'Editar entrada del diario':'Una página nueva en tu diario',body);
  }
  function renderRitualForm(entry=null) {
    const resources=Array.isArray(entry?.extra_resources)?entry.extra_resources.map(r=>r.url).join('\n'):'';
    const body=`<div class="grimoire-field"><label>Nombre del ritual *</label><input name="name" required maxlength="160" value="${esc(entry?.name||'')}" placeholder="Nombre del ritual"></div><div class="grimoire-field"><label>Propósito *</label><input name="purpose" list="grimoirePurposes" required value="${esc(entry?.purpose||'')}" placeholder="Ej. Protección"><datalist id="grimoirePurposes"><option>Venganza</option><option>Curación</option><option>Amor y sexo</option><option>Protección</option><option>Salud</option><option>Dinero</option></datalist></div><div class="grimoire-field"><label>Materiales</label><textarea name="materials" rows="3" placeholder="Anota los materiales necesarios">${esc(entry?.materials||'')}</textarea></div><div class="grimoire-field"><label>Procedimiento</label><textarea name="procedure" rows="6" placeholder="Describe el ritual paso a paso">${esc(entry?.procedure||'')}</textarea></div><div class="grimoire-field"><label>Enlace directo a la ilustración</label><input name="image_url" type="url" value="${esc(entry?.image_url||'')}" placeholder="https://…"><small>La imagen se alojará fuera de Supabase.</small></div><div class="grimoire-field"><label>Recursos extra (un enlace por línea)</label><textarea name="resource_urls" rows="3" placeholder="https://…">${esc(resources)}</textarea><small>Puedes añadir enlaces a canciones, vídeos u otros recursos.</small></div><label class="grimoire-favorite-check"><input type="checkbox" name="is_favorite" ${entry?.is_favorite?'checked':''}> Marcar como favorito</label>`;
    return formOverlay(entry?'Editar ritual':'Añadir un ritual',body);
  }
  function renderPotionForm(entry=null) {
    const body=`<div class="grimoire-field"><label>Nombre de la pócima *</label><input name="name" required maxlength="160" value="${esc(entry?.name||'')}"></div><div class="grimoire-field"><label>Efectos</label><textarea name="effects" rows="3">${esc(entry?.effects||'')}</textarea></div><div class="grimoire-field"><label>Ingredientes</label><textarea name="ingredients" rows="4">${esc(entry?.ingredients||'')}</textarea></div><div class="grimoire-field"><label>Preparación</label><textarea name="preparation" rows="5">${esc(entry?.preparation||'')}</textarea></div><p class="grimoire-form-note">Si una preparación está destinada a ingerirse, comprueba siempre la seguridad de sus ingredientes.</p>`;
    return formOverlay(entry?'Editar pócima':'Añadir una pócima',body);
  }

  function openOverlay(html) { root.insertAdjacentHTML('beforeend',html); }
  function closeOverlays() { root.querySelectorAll('.grimoire-modal-backdrop').forEach(x=>x.remove()); }
  function findRecord(type,id) { const pool=type==='diary'?state.diary:type==='ritual'?state.rituals:state.potions; return pool.find(x=>x.id===id); }
  async function saveRecord(table,id,data) {
    const uid=userId(); if(!uid) throw new Error('Tu sesión ha caducado. Vuelve a entrar en la Mansión.');
    let query;
    if(id) query=supabase.from(table).update(data).eq('id',id).eq('user_id',uid);
    else query=supabase.from(table).insert({...data,user_id:uid});
    const {error}=await query; if(error) throw error;
    await loadAll();
  }
  async function deleteRecord(table,id) {
    const uid=userId(); const {error}=await supabase.from(table).delete().eq('id',id).eq('user_id',uid); if(error)throw error; await loadAll();
  }
  async function handleSubmit(form) {
    const fd=new FormData(form); const type=form.dataset.type;
    if(type==='diary') {
      const tags=[...form.querySelectorAll('input[name="tags"]:checked')].map(x=>x.value);
      form.querySelectorAll('#customDiaryTags [data-tag-value]').forEach(x=>tags.push(x.dataset.tagValue));
      const custom=[...form.querySelectorAll('#customDiaryTags span')].map(x=>x.dataset.tag).filter(Boolean); custom.forEach(t=>{if(!tags.includes(t))tags.push(t)});
      const data={diary_date:String(fd.get('diary_date')),productivity:Number(fd.get('productivity')),emotional_state:Number(fd.get('emotional_state')),energy:Number(fd.get('energy')),tags:[...new Set(tags)],description:String(fd.get('description')||'').trim()};
      const duplicate=state.diary.find(x=>x.diary_date===data.diary_date&&x.id!==form.dataset.id); if(duplicate) throw new Error('Ya existe una entrada para ese día. Abre la página existente para editarla.');
      await saveRecord('grimoire_diary',form.dataset.id||null,data);
      state.selectedDiaryDate=data.diary_date; state.diaryMonth=data.diary_date.slice(0,7); closeOverlays(); state.section='diary'; render(); notify('Tu página del diario se ha guardado ✧');
    } else if(type==='ritual') {
      const image=String(fd.get('image_url')||'').trim(); if(image&&!safeUrl(image))throw new Error('El enlace de la ilustración debe ser una dirección http o https válida.');
      const urls=String(fd.get('resource_urls')||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      const resources=urls.map((url,i)=>{const valid=safeUrl(url);if(!valid)throw new Error(`El recurso de la línea ${i+1} no es un enlace http o https válido.`);return {label:`Recurso ${i+1}`,url:valid};});
      const data={name:String(fd.get('name')).trim(),purpose:String(fd.get('purpose')).trim(),materials:String(fd.get('materials')||'').trim(),procedure:String(fd.get('procedure')||'').trim(),image_url:image||null,extra_resources:resources,is_favorite:fd.get('is_favorite')==='on'};
      await saveRecord('grimoire_rituals',form.dataset.id||null,data); closeOverlays(); state.section='rituals'; render(); notify('El ritual se ha guardado en tu libro ✧');
    } else if(type==='potion') {
      const data={name:String(fd.get('name')).trim(),effects:String(fd.get('effects')||'').trim(),ingredients:String(fd.get('ingredients')||'').trim(),preparation:String(fd.get('preparation')||'').trim()};
      await saveRecord('grimoire_potions',form.dataset.id||null,data); closeOverlays(); state.section='potions'; render(); notify('La pócima se ha guardado en el recetario ✧');
    }
  }

  root.addEventListener('input',e=>{
    const range=e.target.closest('[data-score]'); if(range){const out=root.querySelector(`[data-score-output="${range.dataset.score}"]`);if(out)out.textContent=`${range.value}/10`;}
  });
  root.addEventListener('change',e=>{
    if(e.target.id==='ritualFilter'){state.ritualFilter=e.target.value;render();}
    if(e.target.id==='ritualSort'){state.ritualSort=e.target.value;render();}
  });
  root.addEventListener('submit',async e=>{
    if(e.target.id!=='grimoireForm')return; e.preventDefault();
    const form=e.target; const submit=form.querySelector('[type="submit"]'); submit.disabled=true;
    try{await handleSubmit(form);}catch(error){console.error(error);notify('No se pudo guardar: '+error.message);submit.disabled=false;}
  });
  root.addEventListener('click',async e=>{
    const stop=e.target.closest('[data-stop]'); if(stop&&e.target!==stop&&!e.target.closest('[data-action]'))return;
    const section=e.target.closest('[data-section]'); if(section){state.section=section.dataset.section;state.searchTerm='';render();return;}
    const mode=e.target.closest('[data-diary-mode]');if(mode){state.diaryMode=mode.dataset.diaryMode;render();return;}
    const b=e.target.closest('[data-action]'); if(!b)return;
    const action=b.dataset.action,id=b.dataset.id;
    try {
      if(action==='reload'){await loadAll();return;}
      if(action==='new-diary'){const targetDate=state.selectedDiaryDate||diariesToday();const existing=state.diary.find(x=>x.diary_date===targetDate);if(existing){openOverlay(renderDiaryForm(existing));const f=root.querySelector('#grimoireForm');f.dataset.type='diary';f.dataset.id=existing.id;}else{openOverlay(renderDiaryForm(null,targetDate));root.querySelector('#grimoireForm').dataset.type='diary';}return;}
      if(action==='new-ritual'){openOverlay(renderRitualForm());root.querySelector('#grimoireForm').dataset.type='ritual';return;}
      if(action==='new-potion'){openOverlay(renderPotionForm());root.querySelector('#grimoireForm').dataset.type='potion';return;}
      if(action==='edit-diary'){const x=findRecord('diary',id);if(x){openOverlay(renderDiaryForm(x));const f=root.querySelector('#grimoireForm');f.dataset.type='diary';f.dataset.id=id;}return;}
      if(action==='edit-ritual'){const x=findRecord('ritual',id);if(x){closeOverlays();openOverlay(renderRitualForm(x));const f=root.querySelector('#grimoireForm');f.dataset.type='ritual';f.dataset.id=id;}return;}
      if(action==='edit-potion'){const x=findRecord('potion',id);if(x){closeOverlays();openOverlay(renderPotionForm(x));const f=root.querySelector('#grimoireForm');f.dataset.type='potion';f.dataset.id=id;}return;}
      if(action==='view-diary'){const x=findRecord('diary',id);if(x){state.section='diary';state.selectedDiaryDate=x.diary_date;render();}return;}
      if(action==='select-diary-date'){state.selectedDiaryDate=b.dataset.date;render();return;}
      if(action==='diary-month-prev'||action==='diary-month-next'){const [y,m]=state.diaryMonth.split('-').map(Number);const d=new Date(y,m-1+(action==='diary-month-prev'?-1:1),1,12);state.diaryMonth=monthKey(d);state.selectedDiaryDate=null;render();return;}
      if(action==='open-diary'){state.section='diary';state.selectedDiaryDate=diariesToday();render();const existing=state.diary.find(x=>x.diary_date===diariesToday());if(existing){state.selectedDiaryDate=existing.diary_date;render();}else{openOverlay(renderDiaryForm());root.querySelector('#grimoireForm').dataset.type='diary';}return;}
      if(action==='show-graph'){state.graphMonth=state.diaryMonth;openOverlay(renderGraph());return;}
      if(action==='graph-prev'||action==='graph-next'){const [y,m]=state.graphMonth.split('-').map(Number);state.graphMonth=monthKey(new Date(y,m-1+(action==='graph-prev'?-1:1),1,12));const old=root.querySelector('.grimoire-graph-modal');if(old)old.outerHTML=renderGraph().match(/<section class="grimoire-modal grimoire-graph-modal"[\s\S]*?<\/section>/)[0];return;}
      if(action==='close-graph'||action==='close-detail'||action==='close-form'){if(e.target===b||b.classList.contains('grimoire-close')||b.classList.contains('grimoire-btn'))closeOverlays();return;}
      if(action==='view-ritual'){const x=findRecord('ritual',id);if(x)openOverlay(renderRitualDetail(x));return;}
      if(action==='view-potion'){const x=findRecord('potion',id);if(x)openOverlay(renderPotionDetail(x));return;}
      if(action==='toggle-favorite'){const x=findRecord('ritual',id);if(x){await saveRecord('grimoire_rituals',id,{is_favorite:!x.is_favorite});state.section='rituals';notify(x.is_favorite?'Ritual retirado de favoritos':'Ritual añadido a favoritos');}return;}
      if(action==='delete-diary'||action==='delete-ritual'||action==='delete-potion'){
        if(!confirm('¿Seguro que quieres eliminar esta página? Esta acción no se puede deshacer.'))return;
        await deleteRecord(action==='delete-diary'?'grimoire_diary':action==='delete-ritual'?'grimoire_rituals':'grimoire_potions',id);closeOverlays();state.section=action==='delete-diary'?'diary':action==='delete-ritual'?'rituals':'potions';notify('Página eliminada');return;
      }
      if(action==='global-search'){const input=root.querySelector('#grimoireGlobalSearch');state.searchTerm=input?.value.trim()||'';render();return;}
      if(action==='clear-search'){state.searchTerm='';render();return;}
      if(action==='add-diary-tag'){const input=root.querySelector('#customDiaryTag');const tag=input?.value.trim();if(tag){const wrap=root.querySelector('#customDiaryTags');if(![...wrap.querySelectorAll('span')].some(x=>x.dataset.tag===tag)){wrap.insertAdjacentHTML('beforeend',`<span data-tag="${esc(tag)}">${esc(tag)} <button type="button" data-action="remove-custom-tag" data-tag="${esc(tag)}">×</button></span>`);}input.value='';}return;}
      if(action==='remove-custom-tag'){const tag=b.dataset.tag;const node=[...root.querySelectorAll('#customDiaryTags span')].find(x=>x.dataset.tag===tag);node?.remove();return;}
    } catch(error){console.error(error);notify('Ha ocurrido un error: '+error.message);}
  });

  return {
    async onOpen(){ if(!state.ready) await loadAll(); else render(); },
    async refresh(){await loadAll();}
  };
}
