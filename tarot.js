
/* =====================================================
   EL GRIMORIO — TAROT RIDER-WAITE
   78 cartas · 156 interpretaciones · Posiciones normal
   e invertida · Reflexión y preguntas de sí/no
   ===================================================== */

// Cada carta contiene:
// nombre, número, símbolo,
// significado normal, reflexión normal, sí/no normal,
// significado invertido, reflexión invertida, sí/no invertido.

const MAJOR_ARCANA = [

  {
    id:"el-loco", name:"El Loco", number:"0", symbol:"🌱",
    meaning:"Nuevos comienzos, libertad, espontaneidad y confianza ante lo desconocido.",
    reflection:"Quizá estés ante una oportunidad de empezar de nuevo. ¿Qué harías si dejaras a un lado el miedo?",
    yesNo:"Podría indicar que sí. Es una invitación a dar el primer paso, aunque todavía no conozcas el camino.",
    reversedMeaning:"Inseguridad ante los comienzos, imprudencia o miedo a salir de lo conocido.",
    reversedReflection:"¿Estás evitando una oportunidad por miedo o lanzándote sin considerar las consecuencias?",
    reversedYesNo:"No por ahora. Conviene mirar antes de dar el salto."
  },
  {
    id:"el-mago", name:"El Mago", number:"I", symbol:"✨",
    meaning:"Iniciativa, creatividad, habilidad y capacidad para transformar las ideas en realidad.",
    reflection:"Tienes más recursos de los que quizá crees. ¿Qué podrías conseguir si confiaras en tus propias capacidades?",
    yesNo:"Sí. La carta favorece la iniciativa y la acción consciente.",
    reversedMeaning:"Falta de iniciativa, talento desaprovechado o manipulación.",
    reversedReflection:"¿Estás dudando de tus capacidades o utilizando tus habilidades de una manera que no te representa?",
    reversedYesNo:"No por ahora. Necesitas recuperar la confianza y aclarar tus intenciones."
  },
  {
    id:"la-sacerdotisa", name:"La Sacerdotisa", number:"II", symbol:"🌙",
    meaning:"Intuición, sabiduría interior, secretos y conocimiento que todavía no se ha revelado.",
    reflection:"No todas las respuestas aparecen cuando las buscamos. ¿Qué te dice tu intuición cuando guardas silencio?",
    yesNo:"Todavía no está claro. Conviene esperar, observar y escuchar antes de actuar.",
    reversedMeaning:"Desconexión de la intuición, secretos ocultos o dificultad para escucharte.",
    reversedReflection:"¿Estás ignorando algo que en el fondo ya sabes?",
    reversedYesNo:"Todavía no. Hay información o emociones que necesitan salir a la luz."
  },
  {
    id:"la-emperatriz", name:"La Emperatriz", number:"III", symbol:"🌸",
    meaning:"Abundancia, creatividad, fertilidad, cuidado y conexión con la naturaleza.",
    reflection:"Algo puede estar creciendo en tu vida. ¿Qué necesitas cuidar para que pueda florecer?",
    yesNo:"Sí. Es una carta favorable para el crecimiento y los proyectos.",
    reversedMeaning:"Bloqueo creativo, dependencia, descuido personal o exceso de protección.",
    reversedReflection:"¿Estás cuidando demasiado a los demás y olvidándote de ti?",
    reversedYesNo:"No por ahora. Algo necesita atención antes de crecer."
  },
  {
    id:"el-emperador", name:"El Emperador", number:"IV", symbol:"👑",
    meaning:"Estructura, estabilidad, autoridad, disciplina y protección.",
    reflection:"Quizá necesites poner orden o establecer límites. ¿Qué estructura te ayudaría a sentirte más seguro?",
    yesNo:"Sí, especialmente si actúas con planificación y responsabilidad.",
    reversedMeaning:"Rigidez, autoritarismo, falta de estructura o necesidad excesiva de control.",
    reversedReflection:"¿Estás confundiendo estabilidad con tenerlo todo bajo control?",
    reversedYesNo:"No por ahora. Conviene revisar la manera de organizar la situación."
  },
  {
    id:"el-sumo-sacerdote", name:"El Sumo Sacerdote", number:"V", symbol:"🕯️",
    meaning:"Tradición, aprendizaje, valores, orientación y búsqueda de significado.",
    reflection:"¿Qué enseñanzas has heredado y cuáles siguen teniendo sentido para ti?",
    yesNo:"Sí. Puede señalar una vía convencional, estable o respaldada por buenos consejos.",
    reversedMeaning:"Rebeldía frente a las normas, dogmatismo o cuestionamiento de las creencias heredadas.",
    reversedReflection:"¿Sigues una tradición porque tiene sentido para ti o simplemente porque siempre ha sido así?",
    reversedYesNo:"Depende. Puede ser necesario cuestionar lo establecido."
  },
  {
    id:"los-enamorados", name:"Los Enamorados", number:"VI", symbol:"💞",
    meaning:"Amor, unión, decisiones importantes, afinidad y coherencia con los propios valores.",
    reflection:"Una elección puede requerir que escuches tanto a tu corazón como a tu conciencia. ¿Qué deseas realmente?",
    yesNo:"Sí, aunque puede depender de una decisión importante o de alcanzar un acuerdo.",
    reversedMeaning:"Desarmonía, indecisión afectiva o conflicto entre deseos y valores.",
    reversedReflection:"¿Estás eligiendo desde el miedo a perder a alguien en lugar de desde lo que realmente deseas?",
    reversedYesNo:"No por ahora. Hace falta claridad y honestidad emocional."
  },
  {
    id:"el-carro", name:"El Carro", number:"VII", symbol:"🏇",
    meaning:"Determinación, avance, voluntad, victoria y superación de obstáculos.",
    reflection:"Tienes la posibilidad de avanzar, pero necesitas dirigir tus fuerzas hacia un mismo objetivo.",
    yesNo:"Sí. La carta habla de progreso gracias a la determinación.",
    reversedMeaning:"Falta de dirección, pérdida de control o avance sin un objetivo claro.",
    reversedReflection:"¿Estás intentando avanzar en demasiadas direcciones a la vez?",
    reversedYesNo:"No por ahora. Necesitas recuperar el rumbo."
  },
  {
    id:"la-fuerza", name:"La Fuerza", number:"VIII", symbol:"🦁",
    meaning:"Valentía, paciencia, autocontrol, compasión y fortaleza interior.",
    reflection:"No toda fortaleza consiste en imponerse. ¿Podrías afrontar esta situación con paciencia y amabilidad?",
    yesNo:"Sí, si mantienes la calma y confías en tu fortaleza interior.",
    reversedMeaning:"Inseguridad, agotamiento, dudas sobre uno mismo o dificultad para gestionar los impulsos.",
    reversedReflection:"¿Estás siendo demasiado exigente contigo cuando lo que necesitas es comprensión?",
    reversedYesNo:"Sí, pero primero necesitas recuperar la confianza y la calma."
  },
  {
    id:"el-ermitano", name:"El Ermitaño", number:"IX", symbol:"🏮",
    meaning:"Introspección, prudencia, soledad elegida y búsqueda de sabiduría.",
    reflection:"Quizá necesites un momento de distancia para comprender lo que ocurre. ¿Qué descubrirías si te escucharas?",
    yesNo:"No por ahora. Es una invitación a detenerse y reflexionar antes de continuar.",
    reversedMeaning:"Aislamiento excesivo, soledad no deseada o resistencia a aceptar ayuda.",
    reversedReflection:"¿Te estás retirando para escucharte o estás evitando que los demás se acerquen?",
    reversedYesNo:"No por ahora. Quizá necesites abrirte a otras perspectivas."
  },
  {
    id:"la-rueda-de-la-fortuna", name:"La Rueda de la Fortuna", number:"X", symbol:"☸️",
    meaning:"Cambios, ciclos, oportunidades, giros inesperados y movimiento.",
    reflection:"La vida está llena de etapas. ¿Qué puedes aceptar y qué está en tu mano cambiar?",
    yesNo:"Quizá. La situación puede cambiar y todavía no está completamente definida.",
    reversedMeaning:"Resistencia al cambio, ciclos repetidos o dificultad para adaptarse a lo inesperado.",
    reversedReflection:"¿Qué patrón se repite en tu vida y qué podrías hacer de forma diferente?",
    reversedYesNo:"Quizá. La situación necesita un cambio de actitud."
  },
  {
    id:"la-justicia", name:"La Justicia", number:"XI", symbol:"⚖️",
    meaning:"Equilibrio, honestidad, responsabilidad, decisiones y consecuencias.",
    reflection:"Es momento de mirar los hechos con claridad. ¿Estás siendo justo contigo y con los demás?",
    yesNo:"Depende. La respuesta estará ligada a la honestidad, la responsabilidad y las consecuencias.",
    reversedMeaning:"Injusticia, falta de responsabilidad, desequilibrio o dificultad para reconocer los propios errores.",
    reversedReflection:"¿Estás siendo completamente honesto al valorar tu parte en lo ocurrido?",
    reversedYesNo:"No por ahora. Es necesario revisar los hechos y asumir responsabilidades."
  },
  {
    id:"el-colgado", name:"El Colgado", number:"XII", symbol:"🪢",
    meaning:"Pausa, sacrificio, aceptación y cambio de perspectiva.",
    reflection:"A veces avanzar requiere dejar de insistir. ¿Qué podrías ver de otra manera?",
    yesNo:"No por ahora. Puede ser necesario esperar o cambiar de perspectiva.",
    reversedMeaning:"Estancamiento, resistencia a soltar o sacrificios que han perdido su sentido.",
    reversedReflection:"¿Estás esperando un cambio sin estar dispuesto a cambiar nada?",
    reversedYesNo:"No por ahora. Insistir en la misma postura puede mantenerte bloqueado."
  },
  {
    id:"la-muerte", name:"La Muerte", number:"XIII", symbol:"🍂",
    meaning:"Transformación, cierre de etapas, renovación y desprendimiento.",
    reflection:"Algo puede necesitar terminar para dejar espacio a lo nuevo. ¿Qué estás preparado para soltar?",
    yesNo:"No, si la pregunta implica mantener las cosas como están. La carta señala transformación y cierre.",
    reversedMeaning:"Resistencia a cerrar una etapa, miedo al cambio o transformación aplazada.",
    reversedReflection:"¿Qué estás intentando mantener aunque sabes que ya no funciona?",
    reversedYesNo:"No. Seguir aferrándote a lo anterior puede impedir el cambio necesario."
  },
  {
    id:"la-templanza", name:"La Templanza", number:"XIV", symbol:"🪽",
    meaning:"Armonía, moderación, paciencia, integración y equilibrio.",
    reflection:"Quizá la respuesta no esté en los extremos. ¿Cómo podrías encontrar un punto de equilibrio?",
    yesNo:"Sí, pero con paciencia. Las cosas pueden necesitar tiempo para encontrar su lugar.",
    reversedMeaning:"Excesos, desequilibrio, impaciencia o dificultad para encontrar un punto medio.",
    reversedReflection:"¿En qué aspecto de tu vida estás pasando de un extremo a otro?",
    reversedYesNo:"No por ahora. Hace falta recuperar el equilibrio."
  },
  {
    id:"el-diablo", name:"El Diablo", number:"XV", symbol:"⛓️",
    meaning:"Apegos, tentaciones, dependencias, deseos y patrones que limitan la libertad.",
    reflection:"¿Hay algo que te atrae pero que también te hace sentir atrapado? Reconocerlo puede ser el primer paso.",
    yesNo:"No es una señal favorable. Invita a revisar las motivaciones y los posibles apegos.",
    reversedMeaning:"Liberación de dependencias, reconocimiento de patrones dañinos o tentación de volver a ellos.",
    reversedReflection:"¿Qué hábito o vínculo está perdiendo poder sobre ti y qué necesitas para mantener esa libertad?",
    reversedYesNo:"Sí, si estás dispuesto a romper con aquello que te limita."
  },
  {
    id:"la-torre", name:"La Torre", number:"XVI", symbol:"⚡",
    meaning:"Ruptura, revelaciones, cambios bruscos y caída de estructuras que ya no se sostienen.",
    reflection:"¿Qué parte de tu vida necesita una revisión sincera, aunque resulte incómoda?",
    yesNo:"No. La carta advierte de inestabilidad y de la necesidad de revisar la situación.",
    reversedMeaning:"Resistencia a un cambio inevitable, miedo a afrontar la realidad o crisis aplazada.",
    reversedReflection:"¿Qué verdad estás evitando porque temes lo que podría cambiar?",
    reversedYesNo:"No por ahora. Evitar el problema no lo resolverá."
  },
  {
    id:"la-estrella", name:"La Estrella", number:"XVII", symbol:"⭐",
    meaning:"Esperanza, inspiración, serenidad, confianza y renovación.",
    reflection:"Después de un periodo difícil puede volver la calma. ¿Qué pequeña esperanza quieres proteger?",
    yesNo:"Sí. Es una carta especialmente esperanzadora y favorable.",
    reversedMeaning:"Pérdida de esperanza, desánimo, desconexión de los propios deseos o dificultad para confiar.",
    reversedReflection:"¿Qué pequeña cosa podría devolverte la ilusión?",
    reversedYesNo:"Sí, poco a poco. La esperanza puede recuperarse."
  },
  {
    id:"la-luna", name:"La Luna", number:"XVIII", symbol:"🌕",
    meaning:"Sueños, emociones, intuición, incertidumbre e ilusiones.",
    reflection:"Puede que no tengas toda la información. ¿Qué temores podrían estar influyendo en tu manera de interpretar la situación?",
    yesNo:"Todavía no. Hay incertidumbre y quizá aspectos que aún no puedes ver con claridad.",
    reversedMeaning:"Confusión emocional, temores exagerados, autoengaño o dificultad para distinguir intuición y miedo.",
    reversedReflection:"¿Qué parte de tu preocupación está basada en hechos y cuál en suposiciones?",
    reversedYesNo:"Todavía no. Necesitas más claridad."
  },
  {
    id:"el-sol", name:"El Sol", number:"XIX", symbol:"☀️",
    meaning:"Alegría, claridad, vitalidad, éxito y autenticidad.",
    reflection:"¿Qué te hace sentir libre, alegre y verdaderamente tú? Quizá merezca más espacio en tu vida.",
    yesNo:"Sí. Es una de las cartas más positivas del mazo.",
    reversedMeaning:"Optimismo apagado, dificultad para disfrutar o expectativas poco realistas.",
    reversedReflection:"¿Qué está impidiendo que reconozcas lo bueno que sí existe en tu vida?",
    reversedYesNo:"Sí, aunque quizá no de la manera que esperabas."
  },
  {
    id:"el-juicio", name:"El Juicio", number:"XX", symbol:"📯",
    meaning:"Despertar, renovación, decisiones importantes y comprensión del pasado.",
    reflection:"Es posible que estés preparado para una nueva etapa. ¿Qué has aprendido de lo que has vivido?",
    yesNo:"Sí, si estás dispuesto a reconocer lo ocurrido y tomar una decisión consciente.",
    reversedMeaning:"Dudas ante una nueva etapa, resistencia a reconocer errores o dificultad para perdonarse.",
    reversedReflection:"¿Qué necesitas aceptar de tu pasado para poder avanzar?",
    reversedYesNo:"Sí, si estás dispuesto a afrontar la verdad y aprender de ella."
  },
  {
    id:"el-mundo", name:"El Mundo", number:"XXI", symbol:"🌍",
    meaning:"Realización, plenitud, culminación, integración y nuevos horizontes.",
    reflection:"Has recorrido un camino. ¿Qué puedes reconocer y celebrar de todo lo que has conseguido?",
    yesNo:"Sí. Es una carta de culminación, logro y realización.",
    reversedMeaning:"Sensación de falta de cierre, objetivos incompletos o dificultad para pasar de etapa.",
    reversedReflection:"¿Qué asunto pendiente necesitas resolver para sentir que puedes continuar?",
    reversedYesNo:"Todavía no. Hay algo que necesita completarse."
  }

];

// =====================================================
// ARCANOS MENORES
// =====================================================

// Formato de cada carta:
// [nombre, número, símbolo, significado, reflexión,
//  sí/no, significado invertido, reflexión invertida,
//  sí/no invertido]

function buildSuit(suitId, suitName, symbol, cards) {
  return cards.map((c, index) => ({
    id: `${suitId}-${index + 1}`,
    name: c[0],
    number: c[1],
    arcana: "Menor",
    suit: suitName,
    symbol,
    meaning: c[2],
    reflection: c[3],
    yesNo: c[4],
    reversedMeaning: c[5],
    reversedReflection: c[6],
    reversedYesNo: c[7]
  }));
}

// =====================================================
// BASTOS — FUEGO
// Energía, creatividad, pasión, acción y voluntad.
// =====================================================

const WANDS = buildSuit("bastos", "Bastos", "🔥", [

  ["As de Bastos","1","Inspiración, energía creativa y nacimiento de una iniciativa.","¿Qué idea te entusiasma lo suficiente como para empezar a darle vida?","Sí. Hay energía y potencial para comenzar.","Falta de motivación, bloqueo creativo o entusiasmo que se apaga antes de empezar.","¿Qué está apagando tus ganas de iniciar algo que te importa?","No por ahora. Conviene recuperar la motivación."],
  ["Dos de Bastos","2","Planificación, visión de futuro y exploración de posibilidades.","¿Qué horizonte te gustaría explorar y qué primer paso podrías preparar?","Sí, pero requiere planificación y una decisión.","Miedo a salir de la zona conocida, planes poco claros o indecisión sobre el futuro.","¿Qué posibilidad te atrae pero todavía no te atreves a explorar?","Quizá. Antes necesitas decidir qué dirección quieres tomar."],
  ["Tres de Bastos","3","Expansión, progreso, oportunidades y confianza en lo que está por llegar.","¿Qué has puesto ya en marcha y cómo podrías permitir que crezca?","Sí. Hay señales de expansión y avance.","Retrasos, expectativas frustradas o dificultades para expandirse.","¿Estás esperando resultados demasiado pronto?","No por ahora. Puede haber demoras."],
  ["Cuatro de Bastos","4","Celebración, estabilidad, hogar y alegría compartida.","¿Qué pequeños logros merecen ser celebrados con quienes quieres?","Sí. Es una carta favorable para la armonía y la celebración.","Inestabilidad en el hogar, celebraciones aplazadas o falta de armonía.","¿Qué necesita tu entorno para volver a sentirse acogedor y seguro?","Quizá. Hay aspectos de la situación que necesitan resolverse."],
  ["Cinco de Bastos","5","Competencia, tensiones, desacuerdos y desafíos.","¿Qué conflicto merece tu energía y cuál no merece la pena alimentar?","No por ahora. Puede haber obstáculos o desacuerdos.","Conflictos evitados, tensión interna o competencia que desgasta.","¿Estás evitando una conversación necesaria o entrando en discusiones que no aportan nada?","No por ahora. Primero conviene resolver las tensiones."],
  ["Seis de Bastos","6","Reconocimiento, victoria, confianza y éxito visible.","¿Puedes reconocer tus propios méritos sin depender únicamente de la aprobación externa?","Sí. Indica reconocimiento y buenos resultados.","Reconocimiento insuficiente, exceso de orgullo o éxito que no satisface.","¿Estás midiendo tu valor únicamente por el reconocimiento de los demás?","Sí, pero quizá necesites redefinir qué significa para ti tener éxito."],
  ["Siete de Bastos","7","Defensa de las propias convicciones, perseverancia y resistencia.","¿Qué es importante para ti y merece que establezcas límites?","Sí, si mantienes tu posición con determinación.","Agotamiento por defenderse constantemente, inseguridad o dificultad para poner límites.","¿Qué batallas puedes dejar de librar sin traicionarte?","No por ahora. Necesitas recuperar fuerzas y revisar tus límites."],
  ["Ocho de Bastos","8","Rapidez, noticias, movimiento y acontecimientos que se aceleran.","¿Qué ocurriría si dejaras de posponer aquello que ya está preparado?","Sí. Sugiere movimiento y avances rápidos.","Retrasos, noticias que no llegan o movimiento desorganizado.","¿Qué puedes hacer mientras esperas a que las cosas avancen?","Quizá. Hay movimiento, pero puede demorarse."],
  ["Nueve de Bastos","9","Resistencia, cautela, experiencia y perseverancia ante el cansancio.","¿Qué has aprendido de tus dificultades y cómo puedes proteger tu energía?","Sí, aunque puede requerir esfuerzo y paciencia.","Cansancio extremo, desconfianza o resistencia a bajar la guardia.","¿Estás protegiéndote de un peligro real o viviendo permanentemente a la defensiva?","No por ahora. Necesitas descansar antes de continuar."],
  ["Diez de Bastos","10","Responsabilidades, sobrecarga, esfuerzo y exceso de obligaciones.","¿Estás cargando con más de lo que te corresponde? ¿Qué podrías delegar o soltar?","No por ahora. Antes conviene aliviar la carga.","Sobrecarga, incapacidad para delegar o dificultad para reconocer los propios límites.","¿Qué responsabilidad no te corresponde seguir llevando?","No. Es necesario soltar peso antes de continuar."],
  ["Sota de Bastos","S","Curiosidad, entusiasmo, descubrimiento y nuevas aventuras.","¿Qué te gustaría explorar simplemente por curiosidad?","Sí. Hay posibilidades interesantes por descubrir.","Falta de entusiasmo, inmadurez o ideas que todavía no encuentran dirección.","¿Qué te ilusiona y cómo podrías darle una forma concreta?","Quizá. La idea necesita madurar."],
  ["Caballero de Bastos","C","Acción, pasión, aventura, impulso y movimiento.","¿Estás actuando desde el entusiasmo o desde la impaciencia?","Sí, aunque conviene evitar las decisiones precipitadas.","Impulsividad, frustración, retrasos o energía dispersa.","¿Estás persiguiendo algo por deseo auténtico o por impaciencia?","No por ahora. Evita precipitarte."],
  ["Reina de Bastos","R","Carisma, independencia, seguridad y creatividad.","¿Qué cambiaría si ocuparas tu espacio sin pedir disculpas por ser tú?","Sí. Confía en tu iniciativa y seguridad.","Inseguridad, celos, dependencia de la aprobación o pérdida de confianza.","¿Qué parte de ti necesita volver a sentirse valiosa sin compararse?","Sí, cuando recuperes la confianza en ti."],
  ["Rey de Bastos","K","Liderazgo, visión, determinación y capacidad para inspirar.","¿Qué proyecto merece que asumas el liderazgo y confíes en tu visión?","Sí. Favorece las decisiones firmes y ambiciosas.","Liderazgo autoritario, expectativas poco realistas o falta de dirección.","¿Estás inspirando a los demás o intentando controlar cada detalle?","Sí, pero necesitas revisar tu manera de dirigir."]
]);

// =====================================================
// COPAS — AGUA
// Amor, emociones, relaciones, intuición y sensibilidad.
// =====================================================

const CUPS = buildSuit("copas", "Copas", "💧", [

  ["As de Copas","1","Amor, apertura emocional, sensibilidad y nuevos comienzos afectivos.","¿Qué emoción necesita espacio en tu vida? ¿Estás dispuesto a recibir cariño?","Sí. Es una carta muy favorable para los sentimientos.","Emociones reprimidas, bloqueo afectivo o dificultad para aceptar el cariño.","¿Qué sentimiento estás intentando contener y qué pasaría si le dieras espacio?","No por ahora. Primero necesitas abrirte emocionalmente."],
  ["Dos de Copas","2","Unión, reciprocidad, atracción, acuerdos y conexión emocional.","¿Existe equilibrio entre lo que das y lo que recibes?","Sí. Favorece la unión y los acuerdos mutuos.","Desequilibrio afectivo, desacuerdos, separación o falta de reciprocidad.","¿Estás recibiendo el mismo cuidado que ofreces?","No por ahora. La relación o el acuerdo necesita equilibrio."],
  ["Tres de Copas","3","Amistad, celebración, comunidad y alegría compartida.","¿Con quién puedes compartir tus alegrías y sentirte parte de algo?","Sí. Es una carta de encuentros y buenos momentos.","Distanciamiento de amistades, aislamiento o celebraciones que esconden malestar.","¿Con quién puedes mostrarte tal como eres sin tener que fingir?","Quizá. Conviene recuperar la conexión con los demás."],
  ["Cuatro de Copas","4","Apatía, introspección, insatisfacción y oportunidades que pasan desapercibidas.","¿Estás tan centrado en lo que falta que no ves lo que tienes delante?","No por ahora. Quizá necesites recuperar el interés o mirar de otra manera.","Insatisfacción, oportunidades ignoradas o dificultad para salir de la apatía.","¿Qué pequeña oportunidad podrías estar pasando por alto?","Sí, si estás dispuesto a abrirte a nuevas posibilidades."],
  ["Cinco de Copas","5","Pérdida, tristeza, decepción y dificultad para mirar hacia adelante.","¿Qué estás lamentando y qué sigue permaneciendo a tu lado?","No. La carta refleja una situación emocional difícil.","Dificultad para superar una pérdida, apego al pasado o tristeza prolongada.","¿Qué necesitas permitirte sentir para empezar a sanar?","No por ahora. La situación todavía necesita tiempo."],
  ["Seis de Copas","6","Nostalgia, recuerdos, infancia, ternura y generosidad.","¿Qué parte de tu pasado merece ser recordada con cariño sin impedirte avanzar?","Sí. Puede señalar una oportunidad agradable o un reencuentro.","Idealización del pasado, nostalgia excesiva o dificultad para madurar emocionalmente.","¿Estás recordando lo que fue o deseando que vuelva a ser como lo imaginaste?","Quizá. Conviene distinguir los recuerdos de la realidad actual."],
  ["Siete de Copas","7","Fantasía, deseos, posibilidades y dificultad para elegir.","¿Qué opciones son reales y cuáles pertenecen más a tus expectativas?","Todavía no. Hay demasiadas posibilidades o cierta confusión.","Expectativas irreales, fantasías que confunden o dificultad para elegir.","¿Qué deseo es auténtico y cuál responde a una ilusión?","No por ahora. Necesitas concretar tus opciones."],
  ["Ocho de Copas","8","Desapego, búsqueda de sentido y decisión de abandonar algo que ya no llena.","¿Qué necesitas dejar atrás para encontrar algo más acorde con lo que eres?","No, si implica permanecer en la situación actual. La carta invita a marcharse.","Miedo a marcharse, estancamiento emocional o regreso a una situación insatisfactoria.","¿Qué te mantiene en un lugar del que una parte de ti quiere salir?","No. La carta invita a revisar por qué sigues ahí."],
  ["Nueve de Copas","9","Satisfacción, placer, bienestar y deseos cumplidos.","¿Qué significa para ti sentirte satisfecho con tu vida, más allá de lo que esperan los demás?","Sí. Es una carta de satisfacción y buenos resultados.","Insatisfacción, deseos superficiales o búsqueda de felicidad únicamente en lo externo.","¿Qué necesitas realmente para sentirte satisfecho?","Quizá. Es importante revisar tus expectativas."],
  ["Diez de Copas","10","Felicidad compartida, armonía familiar, afecto y plenitud emocional.","¿Cómo sería para ti una vida emocionalmente plena?","Sí. Es una carta muy favorable para la felicidad y la unión.","Conflictos familiares, expectativas irreales sobre la felicidad o desconexión emocional.","¿Estás intentando alcanzar una imagen perfecta de felicidad en lugar de construir una real?","No por ahora. Hay asuntos emocionales que necesitan atención."],
  ["Sota de Copas","S","Sensibilidad, imaginación, ternura y mensajes emocionales.","¿Qué pasaría si te permitieras expresar lo que sientes con más naturalidad?","Sí. Puede anunciar una apertura emocional o una noticia agradable.","Inmadurez emocional, sensibilidad herida o dificultad para expresar sentimientos.","¿Puedes expresar lo que sientes sin esperar que los demás adivinen tus necesidades?","Quizá. Es necesario aclarar las emociones."],
  ["Caballero de Copas","C","Romanticismo, encanto, propuestas afectivas y búsqueda de ideales.","¿Estás persiguiendo una conexión real o una idea idealizada del amor?","Sí. Favorece las propuestas afectivas, aunque invita a mantener los pies en la tierra.","Idealización romántica, promesas poco realistas o decepción afectiva.","¿Estás enamorado de la persona real o de lo que esperas que llegue a ser?","No por ahora. Conviene mirar la situación sin idealizarla."],
  ["Reina de Copas","R","Empatía, intuición, comprensión y madurez emocional.","¿Cómo puedes cuidar de los demás sin olvidarte de tus propias necesidades?","Sí. Confía en tu sensibilidad y escucha emocional.","Dependencia emocional, límites difusos o emociones desbordadas.","¿Cómo puedes cuidar de los demás sin absorber sus problemas?","No por ahora. Necesitas recuperar tu equilibrio emocional."],
  ["Rey de Copas","K","Equilibrio emocional, serenidad, comprensión y afecto maduro.","¿Cómo puedes responder a tus emociones sin dejar que te desborden?","Sí. Hay posibilidades de estabilidad y madurez emocional.","Inestabilidad emocional, evasión de sentimientos o dificultad para afrontar conversaciones importantes.","¿Estás gestionando tus emociones o escondiéndolas detrás de una apariencia de tranquilidad?","Quizá. Hace falta más honestidad emocional."]
]);

// =====================================================
// ESPADAS — AIRE
// Pensamiento, comunicación, conflictos y decisiones.
// =====================================================

const SWORDS = buildSuit("espadas", "Espadas", "⚔️", [

  ["As de Espadas","1","Claridad mental, verdad, decisiones y nuevas ideas.","¿Qué verdad necesitas reconocer para poder avanzar?","Sí. La claridad y la decisión pueden abrir el camino.","Confusión, falta de claridad, ideas bloqueadas o uso de la verdad para herir.","¿Qué necesitas aclarar antes de tomar una decisión?","No por ahora. Falta claridad."],
  ["Dos de Espadas","2","Indecisión, bloqueo, equilibrio precario y dificultad para elegir.","¿Qué estás evitando mirar por miedo a tomar una decisión?","Todavía no. Hay una decisión pendiente o información que falta.","Indecisión prolongada, información oculta o incapacidad para afrontar una elección.","¿Qué decisión estás aplazando y qué temes que ocurra si eliges?","No por ahora. Evitar decidir también tiene consecuencias."],
  ["Tres de Espadas","3","Dolor emocional, decepción, separación y verdades difíciles.","¿Qué herida necesita ser reconocida para comenzar a sanar?","No. Es una carta asociada a dificultades y decepciones.","Sanación emocional, perdón o dificultad para dejar atrás una herida.","¿Qué necesitas perdonarte para poder dejar de sufrir por lo ocurrido?","Quizá. La recuperación es posible, pero necesita tiempo."],
  ["Cuatro de Espadas","4","Descanso, recuperación, silencio y necesidad de desconectar.","¿Cuándo fue la última vez que te permitiste descansar sin sentir culpa?","No por ahora. Es momento de parar y recuperar fuerzas.","Inquietud, descanso insuficiente o dificultad para desconectar.","¿Qué te impide descansar de verdad?","No por ahora. Primero necesitas recuperar energía."],
  ["Cinco de Espadas","5","Conflicto, orgullo, tensión y victorias que tienen un coste.","¿Merece la pena ganar esta discusión si el precio es perder algo más importante?","No. Advierte de conflictos y resultados poco satisfactorios.","Reconciliación, arrepentimiento o reconocimiento de que un conflicto no merece continuar.","¿Qué ganarías si dejaras de intentar tener siempre la razón?","Quizá. La tensión puede disminuir si hay voluntad de reconciliación."],
  ["Seis de Espadas","6","Transición, alejamiento de dificultades y búsqueda de calma.","¿Qué necesitas dejar atrás para acercarte a una etapa más tranquila?","Sí. Indica una transición favorable, aunque gradual.","Resistencia al cambio, regreso a dificultades anteriores o sensación de no avanzar.","¿Qué te está impidiendo abandonar una situación que ya no te hace bien?","No por ahora. El avance puede estar bloqueado."],
  ["Siete de Espadas","7","Estrategia, discreción, secretos y posibles evasiones.","¿Estás siendo completamente sincero contigo mismo y con los demás?","No es una señal clara de sí. Conviene investigar y actuar con prudencia.","Estrategias poco éticas, engaño descubierto o autoengaño.","¿Qué estás ocultando y qué consecuencias puede tener seguir haciéndolo?","No. Conviene actuar con transparencia."],
  ["Ocho de Espadas","8","Limitaciones mentales, inseguridad, miedo y sensación de estar atrapado.","¿Qué parte de tu bloqueo procede de circunstancias reales y cuál de tus propios temores?","No por ahora. Primero necesitas reconocer qué te está limitando.","Liberación de bloqueos mentales, recuperación de la autonomía o resistencia a salir del miedo.","¿Qué paso pequeño demostraría que tienes más libertad de la que crees?","Sí, si empiezas a cuestionar tus limitaciones."],
  ["Nueve de Espadas","9","Preocupación, culpa, insomnio y pensamientos que se repiten.","¿Estás dando por ciertos escenarios que todavía no han ocurrido?","No. La carta refleja preocupación y dificultad para encontrar tranquilidad.","Recuperación tras la ansiedad, reconocimiento de miedos o pensamientos que pierden fuerza.","¿Qué preocupación puedes dejar de alimentar esta noche?","Quizá. La situación puede mejorar si afrontas tus temores."],
  ["Diez de Espadas","10","Final doloroso, agotamiento, ruptura y cierre definitivo.","¿Qué etapa ha llegado a su límite y qué necesitas para empezar a recuperarte?","No. Señala un final o una situación que necesita cambiar.","Recuperación después de una crisis, resistencia a aceptar un final o miedo a volver a empezar.","¿Qué parte de ti está lista para recuperarse aunque todavía duela?","No por ahora. El proceso de recuperación aún necesita tiempo."],
  ["Sota de Espadas","S","Curiosidad, observación, inteligencia y búsqueda de información.","¿Qué necesitas averiguar antes de formarte una opinión?","Quizá. Es mejor investigar y observar antes de decidir.","Rumores, conclusiones precipitadas, vigilancia excesiva o comunicación poco clara.","¿Estás buscando información para comprender o para confirmar lo que ya sospechas?","Quizá. Necesitas comprobar los hechos."],
  ["Caballero de Espadas","C","Rapidez mental, determinación, confrontación e impulsividad.","¿Estás avanzando con decisión o estás corriendo sin pensar en las consecuencias?","Sí, pero existe riesgo de actuar precipitadamente.","Agresividad, precipitación, falta de dirección o conflictos innecesarios.","¿Qué ocurriría si pensaras antes de actuar?","No por ahora. La precipitación puede complicar las cosas."],
  ["Reina de Espadas","R","Independencia, lucidez, honestidad y límites claros.","¿Qué necesitas decir con sinceridad, aunque no sea lo más cómodo?","Sí. La claridad y la objetividad favorecen la decisión.","Frialdad excesiva, amargura, juicio severo o dificultad para expresar emociones.","¿Puedes mantener tus límites sin cerrar la puerta a la sensibilidad?","Quizá. Necesitas combinar claridad y empatía."],
  ["Rey de Espadas","K","Razón, autoridad intelectual, estrategia y decisiones fundamentadas.","¿Qué decisión tomarías si separaras los hechos de tus emociones?","Sí, siempre que la decisión esté bien razonada.","Manipulación intelectual, abuso de autoridad, rigidez o decisiones injustas.","¿Estás utilizando tu conocimiento para comprender o para imponer tu criterio?","No por ahora. Revisa los hechos y las intenciones."]
]);

// =====================================================
// OROS — TIERRA
// Trabajo, recursos, estabilidad y mundo material.
// =====================================================

const PENTACLES = buildSuit("oros", "Oros", "🪙", [

  ["As de Oros","1","Oportunidades materiales, prosperidad, estabilidad y nuevos proyectos.","¿Qué oportunidad concreta podrías cultivar para construir algo duradero?","Sí. Es una carta favorable para nuevos comienzos materiales.","Oportunidades desaprovechadas, inseguridad material o dificultades para materializar un proyecto.","¿Qué paso concreto te ayudaría a convertir una idea en algo real?","Quizá. La oportunidad necesita más preparación."],
  ["Dos de Oros","2","Adaptabilidad, equilibrio, gestión de recursos y múltiples responsabilidades.","¿Cómo puedes organizar tus prioridades sin intentar hacerlo todo a la vez?","Sí, pero necesitarás flexibilidad y buena organización.","Desorganización, exceso de compromisos o dificultad para administrar los recursos.","¿Qué podrías simplificar para recuperar el equilibrio?","No por ahora. Conviene ordenar tus prioridades."],
  ["Tres de Oros","3","Trabajo en equipo, aprendizaje, colaboración y reconocimiento de habilidades.","¿Qué podrías conseguir con ayuda de otras personas?","Sí. Favorece los proyectos compartidos y el esfuerzo bien realizado.","Falta de colaboración, trabajo poco reconocido o dificultades para aprender.","¿Estás permitiendo que otros aporten o intentando hacerlo todo por tu cuenta?","Quizá. Hace falta mejorar la colaboración."],
  ["Cuatro de Oros","4","Seguridad, ahorro, control y miedo a perder lo conseguido.","¿Estás protegiendo lo que tienes o aferrándote a ello por miedo?","Sí, si buscas conservar la estabilidad, aunque conviene evitar el exceso de control.","Avaricia, miedo a perder, control excesivo o dificultad para compartir.","¿Qué estás reteniendo por miedo a que no haya suficiente?","No por ahora. El exceso de control puede limitarte."],
  ["Cinco de Oros","5","Carencia, dificultades económicas, inseguridad y sensación de abandono.","¿Te estás permitiendo pedir ayuda cuando la necesitas?","No por ahora. La carta refleja dificultades y necesidad de apoyo.","Recuperación tras una etapa difícil, ayuda disponible o temor a pedir apoyo.","¿Qué recurso o persona podría ayudarte a salir de esta situación?","Sí, si aceptas la ayuda que tienes cerca."],
  ["Seis de Oros","6","Generosidad, ayuda, intercambio, equilibrio y reciprocidad.","¿Existe equilibrio entre lo que das y lo que recibes?","Sí. Favorece la ayuda y los acuerdos equilibrados.","Desequilibrio entre dar y recibir, ayuda interesada o dificultad para aceptar apoyo.","¿Estás dando por obligación o recibiendo con culpa?","Quizá. Es necesario revisar el equilibrio."],
  ["Siete de Oros","7","Paciencia, esfuerzo acumulado, evaluación y resultados a largo plazo.","¿Estás dispuesto a esperar a que madure algo en lo que ya has invertido esfuerzo?","Sí, pero los resultados pueden tardar.","Impaciencia, resultados decepcionantes o esfuerzo que necesita replantearse.","¿Tu esfuerzo está acercándote a donde quieres llegar?","No por ahora. Conviene revisar la estrategia."],
  ["Ocho de Oros","8","Dedicación, aprendizaje, práctica, constancia y perfeccionamiento.","¿Qué habilidad podrías desarrollar poco a poco con práctica y paciencia?","Sí. El esfuerzo constante puede dar buenos frutos.","Perfeccionismo, falta de dedicación o sensación de que el esfuerzo no merece la pena.","¿Estás exigiéndote hacerlo perfecto en lugar de permitirte aprender?","Sí, si recuperas la constancia y la disposición a mejorar."],
  ["Nueve de Oros","9","Independencia, bienestar, autonomía y disfrute de los logros propios.","¿Qué significaría para ti disfrutar de lo que has conseguido por tus propios medios?","Sí. Es una carta favorable para la estabilidad y la autonomía.","Dependencia material, falsa seguridad o dificultad para disfrutar de los propios logros.","¿Estás disfrutando de lo que has conseguido o solo preocupado por conservarlo?","Quizá. La estabilidad necesita una revisión."],
  ["Diez de Oros","10","Legado, estabilidad económica, familia, patrimonio y seguridad duradera.","¿Qué estás construyendo hoy que te gustaría conservar en el futuro?","Sí. Favorece la estabilidad y los proyectos a largo plazo.","Conflictos familiares o económicos, inseguridad sobre el futuro o disputas por recursos.","¿Qué estás construyendo y qué valores quieres que sostengan ese futuro?","No por ahora. Hay asuntos materiales o familiares que resolver."],
  ["Sota de Oros","S","Estudio, oportunidades, curiosidad práctica y nuevos aprendizajes.","¿Qué podrías aprender que te ayudara a construir el futuro que deseas?","Sí. Es una buena señal para empezar a aprender o planificar.","Falta de planificación, oportunidades ignoradas o dificultades para llevar una idea a la práctica.","¿Qué necesitas aprender antes de comprometerte con este proyecto?","Sí, si estás dispuesto a prepararte y aprender."],
  ["Caballero de Oros","C","Responsabilidad, constancia, prudencia y trabajo paciente.","¿Qué pequeño paso puedes repetir con constancia hasta alcanzar tu objetivo?","Sí, aunque será un proceso lento y constante.","Estancamiento, terquedad, lentitud excesiva o resistencia a cambiar de método.","¿Tu constancia te está ayudando o se ha convertido en una rutina que ya no funciona?","Sí, pero necesitas adaptarte y revisar el camino."],
  ["Reina de Oros","R","Cuidado, practicidad, abundancia, bienestar y conexión con lo cotidiano.","¿Cómo puedes crear un entorno que cuide tanto de tu bienestar como de tus proyectos?","Sí. Favorece la seguridad y el cuidado de lo que importa.","Desequilibrio entre trabajo y vida personal, descuido propio o inseguridad material.","¿Estás creando bienestar para ti o dedicándote únicamente a sostener a los demás?","Quizá. Primero necesitas recuperar tu propio bienestar."],
  ["Rey de Oros","K","Prosperidad, experiencia, seguridad, liderazgo y éxito material.","¿Cómo puedes utilizar tus recursos con responsabilidad para construir estabilidad?","Sí. Es una carta muy favorable para la prosperidad y la consolidación.","Avaricia, materialismo, abuso de poder o éxito conseguido a costa de otros.","¿Qué precio estás dispuesto a pagar por la seguridad o el éxito?","No por ahora. Conviene revisar tus prioridades y tu manera de actuar."]
]);

// =====================================================
// UNIFICAR EL MAZO COMPLETO
// =====================================================

export const TAROT_CARDS = [
  ...MAJOR_ARCANA,
  ...WANDS,
  ...CUPS,
  ...SWORDS,
  ...PENTACLES
];

// =====================================================
// COMPROBACIONES DEL MAZO
// =====================================================

if (TAROT_CARDS.length !== 78) {
  throw new Error(
    `El mazo debe tener 78 cartas, pero contiene ${TAROT_CARDS.length}.`
  );
}

if (new Set(TAROT_CARDS.map(card => card.id)).size !== 78) {
  throw new Error("Hay identificadores de cartas duplicados.");
}

for (const card of TAROT_CARDS) {
  const required = [
    "meaning",
    "reflection",
    "yesNo",
    "reversedMeaning",
    "reversedReflection",
    "reversedYesNo"
  ];

  for (const field of required) {
    if (!card[field]) {
      throw new Error(
        `Falta el campo ${field} en la carta ${card.name}.`
      );
    }
  }
}

// =====================================================
// EXTRAER UNA CARTA ALEATORIA
// =====================================================

export function drawTarotCard() {
  const index = Math.floor(Math.random() * TAROT_CARDS.length);
  const card = TAROT_CARDS[index];

  // 50 % de posibilidades de aparecer invertida.
  const reversed = Math.random() < 0.5;

  return {
    ...card,
    reversed,
    orientation: reversed ? "invertida" : "normal",

    // La interfaz recibirá directamente la interpretación
    // correspondiente a la orientación extraída.
    meaning: reversed ? card.reversedMeaning : card.meaning,
    reflection: reversed ? card.reversedReflection : card.reflection,
    yesNo: reversed ? card.reversedYesNo : card.yesNo
  };
}

// =====================================================
// EXTRAER UNA CARTA SIN REPETIRLA EN UNA TIRADA
// =====================================================

export function drawTarotCards(amount = 1) {
  const shuffled = [...TAROT_CARDS];

  // Barajado Fisher-Yates.
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const count = Math.max(1, Math.min(78, amount));

  return shuffled.slice(0, count).map(card => {
    const reversed = Math.random() < 0.5;

    return {
      ...card,
      reversed,
      orientation: reversed ? "invertida" : "normal",
      meaning: reversed ? card.reversedMeaning : card.meaning,
      reflection: reversed ? card.reversedReflection : card.reflection,
      yesNo: reversed ? card.reversedYesNo : card.yesNo
    };
  });
}
