
/* =====================================================
   EL GRIMORIO — MATERIAL DE ESTUDIO
   78 cartas Rider-Waite
   Conjuntos de palabras clave y situaciones prácticas
   ===================================================== */

function study(keywords, reversedKeywords, situation) {
  return {
    keywords,
    reversedKeywords,
    situation
  };
}

const MAJOR_STUDY = {
  'el-loco': study(
    ['Comienzos', 'Libertad', 'Espontaneidad'],
    ['Imprudencia', 'Inmadurez', 'Riesgo'],
    'Una persona decide comenzar una aventura sin conocer el resultado, confiando en su curiosidad y en las posibilidades que encontrará por el camino.'
  ),
  'el-mago': study(
    ['Iniciativa', 'Habilidad', 'Manifestación'],
    ['Manipulación', 'Engaño', 'Falta de enfoque'],
    'Alguien descubre que ya dispone de los conocimientos y recursos necesarios para poner en marcha una idea que llevaba tiempo imaginando.'
  ),
  'la-sacerdotisa': study(
    ['Intuición', 'Misterio', 'Sabiduría interior'],
    ['Secretos', 'Desconexión', 'Confusión interior'],
    'Una persona sospecha que todavía desconoce información importante y decide observar, escuchar y esperar antes de actuar.'
  ),
  'la-emperatriz': study(
    ['Creatividad', 'Fertilidad', 'Cuidado'],
    ['Bloqueo creativo', 'Dependencia', 'Sobreprotección'],
    'Un proyecto comienza a crecer gracias al cariño, la imaginación y la dedicación que alguien está poniendo en él.'
  ),
  'el-emperador': study(
    ['Autoridad', 'Estructura', 'Estabilidad'],
    ['Rigidez', 'Control excesivo', 'Autoritarismo'],
    'Una persona necesita organizar una situación complicada, establecer límites claros y asumir responsabilidades.'
  ),
  'el-sumo-sacerdote': study(
    ['Tradición', 'Enseñanza', 'Valores'],
    ['Dogmatismo', 'Rebeldía', 'Convenciones limitantes'],
    'Alguien busca orientación en una persona experta o en una institución antes de tomar una decisión importante.'
  ),
  'los-enamorados': study(
    ['Amor', 'Unión', 'Elección consciente'],
    ['Desacuerdo', 'Indecisión', 'Desconexión'],
    'Una persona debe tomar una decisión importante teniendo en cuenta sus sentimientos y sus propios valores.'
  ),
  'el-carro': study(
    ['Determinación', 'Avance', 'Victoria'],
    ['Falta de dirección', 'Descontrol', 'Obstáculos'],
    'Alguien afronta dificultades, mantiene el rumbo y reúne la determinación necesaria para alcanzar su objetivo.'
  ),
  'la-fuerza': study(
    ['Valentía', 'Paciencia', 'Autocontrol'],
    ['Inseguridad', 'Impulsividad', 'Duda interior'],
    'Una persona resuelve un conflicto mediante la paciencia, la serenidad y la comprensión, en lugar de recurrir a la imposición.'
  ),
  'el-ermitano': study(
    ['Introspección', 'Soledad elegida', 'Sabiduría'],
    ['Aislamiento', 'Evasión', 'Desconexión'],
    'Alguien decide apartarse temporalmente del ruido exterior para reflexionar y encontrar sus propias respuestas.'
  ),
  'la-rueda-de-la-fortuna': study(
    ['Cambio', 'Ciclos', 'Oportunidad'],
    ['Resistencia al cambio', 'Contratiempos', 'Estancamiento'],
    'Una circunstancia inesperada cambia los planes de una persona y abre una etapa diferente.'
  ),
  'la-justicia': study(
    ['Equilibrio', 'Verdad', 'Responsabilidad'],
    ['Injusticia', 'Parcialidad', 'Falta de responsabilidad'],
    'Una persona debe afrontar las consecuencias de sus decisiones y actuar con honestidad y objetividad.'
  ),
  'el-colgado': study(
    ['Pausa', 'Sacrificio consciente', 'Nueva perspectiva'],
    ['Estancamiento', 'Resistencia', 'Sacrificio inútil'],
    'Alguien siente que no puede avanzar y decide detenerse para contemplar el problema desde otro punto de vista.'
  ),
  'la-muerte': study(
    ['Transformación', 'Final necesario', 'Renacimiento'],
    ['Resistencia', 'Apego al pasado', 'Miedo al cambio'],
    'Una etapa termina y, aunque cuesta aceptarlo, deja espacio para que algo nuevo pueda comenzar.'
  ),
  'la-templanza': study(
    ['Armonía', 'Moderación', 'Integración'],
    ['Excesos', 'Impaciencia', 'Desequilibrio'],
    'Dos personas con formas de pensar diferentes consiguen encontrar un punto intermedio mediante el diálogo.'
  ),
  'el-diablo': study(
    ['Apego', 'Tentación', 'Dependencia'],
    ['Liberación', 'Conciencia', 'Ruptura de cadenas'],
    'Una persona reconoce que está atrapada en un hábito o relación que le perjudica y empieza a cuestionar esa dependencia.'
  ),
  'la-torre': study(
    ['Ruptura', 'Revelación', 'Crisis repentina'],
    ['Resistencia a la ruptura', 'Crisis interna', 'Miedo al cambio'],
    'Una verdad inesperada derrumba una situación que parecía estable y obliga a reconstruir desde cero.'
  ),
  'la-estrella': study(
    ['Esperanza', 'Inspiración', 'Renovación'],
    ['Desánimo', 'Falta de confianza', 'Desconexión'],
    'Después de una etapa difícil, una persona recupera poco a poco la ilusión y vuelve a confiar en el futuro.'
  ),
  'la-luna': study(
    ['Intuición', 'Incertidumbre', 'Subconsciente'],
    ['Claridad gradual', 'Miedos reconocidos', 'Verdades reveladas'],
    'Alguien atraviesa una situación confusa en la que no todo es lo que parece y necesita distinguir sus temores de la realidad.'
  ),
  'el-sol': study(
    ['Alegría', 'Éxito', 'Claridad'],
    ['Optimismo debilitado', 'Retrasos', 'Alegría incompleta'],
    'Un proyecto sale adelante y una persona puede disfrutar abiertamente de sus logros y compartir su felicidad.'
  ),
  'el-juicio': study(
    ['Despertar', 'Renacimiento', 'Evaluación'],
    ['Autocrítica', 'Negación', 'Resistencia a cambiar'],
    'Una persona revisa su pasado, comprende lo que necesita cambiar y siente que ha llegado el momento de tomar una nueva dirección.'
  ),
  'el-mundo': study(
    ['Culminación', 'Realización', 'Plenitud'],
    ['Cierre incompleto', 'Retrasos', 'Falta de conclusión'],
    'Después de mucho esfuerzo, alguien completa una etapa importante y siente que ha alcanzado aquello por lo que trabajaba.'
  )
};

// Los arcanos menores siguen el orden de tarot.js:
// As, Dos, Tres, Cuatro, Cinco, Seis, Siete,
// Ocho, Nueve, Diez, Sota, Caballero, Reina y Rey.

const MINOR_RANKS = [
  'as', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete',
  'ocho', 'nueve', 'diez', 'sota', 'caballero', 'reina', 'rey'
];

const MINOR_STUDY = {
  bastos: [
    study(['Inspiración', 'Entusiasmo', 'Potencial creativo'], ['Bloqueo creativo', 'Retraso', 'Desmotivación'], 'A alguien se le ocurre una idea apasionante y siente un impulso enorme por empezar a desarrollarla.'),
    study(['Planificación', 'Visión de futuro', 'Expansión'], ['Indecisión', 'Miedo a avanzar', 'Falta de planificación'], 'Una persona contempla varias posibilidades para su futuro y debe decidir qué camino quiere explorar.'),
    study(['Progreso', 'Expansión', 'Primeros resultados'], ['Retrasos', 'Obstáculos', 'Expectativas frustradas'], 'Después de preparar un proyecto, alguien comienza a ver sus primeros resultados y espera nuevas oportunidades.'),
    study(['Celebración', 'Hogar', 'Comunidad'], ['Inestabilidad', 'Conflictos familiares', 'Falta de armonía'], 'Un grupo de personas se reúne para celebrar un logro y disfrutar de una etapa de tranquilidad compartida.'),
    study(['Competencia', 'Conflicto', 'Reto colectivo'], ['Resolución de conflictos', 'Evitación', 'Agotamiento'], 'Varias personas defienden sus ideas con intensidad y deben aprender a gestionar sus diferencias.'),
    study(['Reconocimiento', 'Victoria', 'Éxito público'], ['Falta de reconocimiento', 'Orgullo', 'Fracaso'], 'Una persona recibe el reconocimiento público por el esfuerzo y el trabajo que ha realizado.'),
    study(['Defensa', 'Perseverancia', 'Coraje'], ['Agotamiento', 'Vulnerabilidad', 'Desbordamiento'], 'Alguien debe defender su posición frente a varias dificultades y mantenerse firme en lo que considera importante.'),
    study(['Rapidez', 'Movimiento', 'Noticias'], ['Retrasos', 'Desorganización', 'Prisa excesiva'], 'Varias noticias y acontecimientos llegan casi al mismo tiempo y una situación comienza a avanzar rápidamente.'),
    study(['Resistencia', 'Experiencia', 'Perseverancia'], ['Cansancio', 'Desconfianza', 'Defensividad'], 'Una persona está cerca de terminar un reto, pero necesita reunir fuerzas para superar el último obstáculo.'),
    study(['Responsabilidad', 'Carga de trabajo', 'Esfuerzo'], ['Sobrecarga', 'Agotamiento', 'Delegación necesaria'], 'Alguien ha asumido tantas tareas que apenas puede con ellas y necesita repartir responsabilidades.'),
    study(['Entusiasmo', 'Exploración', 'Descubrimiento'], ['Impulsividad', 'Inconstancia', 'Falta de dirección'], 'Una persona joven o inexperta se lanza con ilusión a explorar una oportunidad nueva.'),
    study(['Acción', 'Aventura', 'Independencia'], ['Impaciencia', 'Imprudencia', 'Inconstancia'], 'Alguien actúa con decisión y energía para perseguir una oportunidad, aunque corre el riesgo de precipitarse.'),
    study(['Carisma', 'Determinación', 'Optimismo'], ['Celos', 'Inseguridad', 'Temperamento dominante'], 'Una persona segura y magnética inspira a los demás con su entusiasmo y confianza.'),
    study(['Liderazgo', 'Visión', 'Emprendimiento'], ['Arrogancia', 'Dominación', 'Expectativas irreales'], 'Un líder con experiencia impulsa un proyecto ambicioso y anima a los demás a pensar en grande.')
  ],

  copas: [
    study(['Amor', 'Apertura emocional', 'Nuevo vínculo'], ['Bloqueo emocional', 'Tristeza', 'Emociones reprimidas'], 'Una persona conoce a alguien especial o descubre una nueva fuente de ilusión y conexión emocional.'),
    study(['Unión', 'Reciprocidad', 'Atracción mutua'], ['Desconexión', 'Desacuerdo', 'Desequilibrio'], 'Dos personas sienten una conexión mutua y deciden construir una relación basada en el respeto.'),
    study(['Amistad', 'Celebración', 'Alegría compartida'], ['Excesos', 'Cotilleos', 'Conflictos sociales'], 'Un grupo de amistades se reúne para celebrar una buena noticia y compartir un momento feliz.'),
    study(['Apatía', 'Insatisfacción', 'Contemplación'], ['Renovación emocional', 'Apertura', 'Nueva motivación'], 'Una persona está tan centrada en lo que le falta que no se da cuenta de una oportunidad que tiene delante.'),
    study(['Pérdida', 'Duelo', 'Decepción'], ['Aceptación', 'Perdón', 'Recuperación'], 'Alguien sufre una decepción y se concentra en lo que ha perdido, sin advertir todavía lo que conserva.'),
    study(['Nostalgia', 'Infancia', 'Generosidad'], ['Apego al pasado', 'Inmadurez', 'Superación'], 'Una persona recuerda con cariño una etapa de su infancia o recupera el contacto con alguien de su pasado.'),
    study(['Fantasía', 'Opciones', 'Imaginación'], ['Claridad', 'Decisión', 'Realismo'], 'Alguien tiene tantas opciones y sueños en mente que le cuesta distinguir cuáles son realmente posibles.'),
    study(['Abandono', 'Búsqueda personal', 'Desapego'], ['Miedo a marcharse', 'Estancamiento', 'Evitación'], 'Una persona decide alejarse de algo que ya no la llena para buscar un sentido más profundo a su vida.'),
    study(['Satisfacción', 'Placer', 'Deseos cumplidos'], ['Insatisfacción', 'Excesos', 'Vanidad'], 'Después de mucho esfuerzo, alguien disfruta de una situación que le produce satisfacción y bienestar personal.'),
    study(['Armonía', 'Familia', 'Plenitud emocional'], ['Conflictos familiares', 'Desunión', 'Desarmonía'], 'Una familia o comunidad disfruta de una etapa de unión, cariño y felicidad compartida.'),
    study(['Sensibilidad', 'Romanticismo', 'Invitación'], ['Inmadurez emocional', 'Fantasía excesiva', 'Vulnerabilidad'], 'Alguien recibe una invitación afectuosa, una propuesta romántica o una noticia que despierta su sensibilidad.'),
    study(['Romance', 'Idealismo', 'Propuesta emocional'], ['Idealización', 'Celos', 'Decepción'], 'Una persona expresa sus sentimientos y se acerca a otra con una propuesta romántica o conciliadora.'),
    study(['Empatía', 'Intuición', 'Compasión'], ['Dependencia emocional', 'Susceptibilidad', 'Desbordamiento'], 'Alguien escucha con atención a otra persona y ofrece apoyo desde la comprensión y la madurez emocional.'),
    study(['Equilibrio emocional', 'Sabiduría', 'Serenidad'], ['Frialdad', 'Inestabilidad', 'Represión emocional'], 'Una persona mantiene la calma ante una situación emocional complicada y ayuda a los demás a encontrar equilibrio.')
  ],

  espadas: [
    study(['Claridad', 'Verdad', 'Decisión'], ['Confusión', 'Mentiras', 'Mala comunicación'], 'Una conversación revela una verdad importante y permite tomar una decisión con mayor claridad.'),
    study(['Indecisión', 'Bloqueo', 'Dilema'], ['Confusión', 'Información oculta', 'Sobrecarga mental'], 'Una persona se encuentra ante dos opciones difíciles y evita decidir porque teme las consecuencias.'),
    study(['Dolor', 'Desamor', 'Separación'], ['Sanación', 'Perdón', 'Liberación emocional'], 'Alguien descubre una traición o atraviesa una ruptura que le provoca un profundo sufrimiento.'),
    study(['Descanso', 'Recuperación', 'Pausa'], ['Agotamiento', 'Inquietud', 'Necesidad de descanso'], 'Una persona decide detener su actividad durante un tiempo porque necesita recuperar fuerzas y claridad mental.'),
    study(['Conflicto', 'Egoísmo', 'Tensión'], ['Reconciliación', 'Remordimiento', 'Superación del conflicto'], 'Alguien gana una discusión a costa de herir a otras personas y descubre que la victoria no le aporta satisfacción.'),
    study(['Transición', 'Viaje', 'Superación'], ['Resistencia', 'Equipaje emocional', 'Estancamiento'], 'Una persona abandona una etapa complicada y se dirige hacia un lugar o una situación más tranquila.'),
    study(['Estrategia', 'Astucia', 'Discreción'], ['Confesión', 'Descubrimiento', 'Culpabilidad'], 'Alguien intenta conseguir su objetivo de forma discreta, sin revelar completamente sus intenciones.'),
    study(['Limitación', 'Miedo', 'Bloqueo mental'], ['Liberación', 'Autonomía', 'Superación del miedo'], 'Una persona cree que no tiene salida, aunque parte de sus limitaciones proceden de sus propios pensamientos.'),
    study(['Ansiedad', 'Preocupación', 'Insomnio'], ['Alivio', 'Recuperación', 'Esperanza'], 'Alguien pasa las noches dando vueltas a sus problemas y anticipando continuamente lo peor.'),
    study(['Final doloroso', 'Agotamiento', 'Ruptura'], ['Recuperación', 'Resiliencia', 'Renacimiento'], 'Una situación llega a un final doloroso y definitivo, pero también marca el comienzo de una recuperación.'),
    study(['Curiosidad', 'Observación', 'Vigilancia'], ['Chismes', 'Impulsividad verbal', 'Dispersión'], 'Una persona observa atentamente lo que sucede a su alrededor y busca información antes de actuar.'),
    study(['Determinación', 'Rapidez', 'Ambición'], ['Agresividad', 'Prisa', 'Imprudencia'], 'Alguien toma una decisión rápida y se lanza a defender sus ideas sin detenerse a valorar los riesgos.'),
    study(['Independencia', 'Objetividad', 'Franqueza'], ['Amargura', 'Frialdad', 'Resentimiento'], 'Una persona experimentada afronta una situación con inteligencia, independencia y sinceridad directa.'),
    study(['Intelecto', 'Autoridad', 'Razonamiento'], ['Manipulación', 'Crueldad', 'Abuso de poder'], 'Una figura de autoridad utiliza el razonamiento, la experiencia y la objetividad para resolver un problema complejo.')
  ],

  oros: [
    study(['Oportunidad', 'Prosperidad', 'Nuevo comienzo material'], ['Oportunidad perdida', 'Inestabilidad', 'Mala inversión'], 'Una persona recibe una oportunidad laboral o económica que puede convertirse en una fuente de estabilidad.'),
    study(['Adaptación', 'Equilibrio', 'Gestión'], ['Desorganización', 'Sobrecarga', 'Mala gestión'], 'Alguien intenta compaginar varias responsabilidades y necesita organizar su tiempo y sus recursos.'),
    study(['Trabajo en equipo', 'Aprendizaje', 'Colaboración'], ['Falta de cooperación', 'Trabajo mediocre', 'Desacuerdo'], 'Varias personas unen sus conocimientos y habilidades para completar un proyecto común.'),
    study(['Seguridad', 'Ahorro', 'Conservación'], ['Avaricia', 'Apego material', 'Inseguridad económica'], 'Una persona protege sus ahorros y sus posesiones porque necesita sentir que tiene el control de su seguridad material.'),
    study(['Carencia', 'Dificultad económica', 'Exclusión'], ['Recuperación', 'Ayuda', 'Mejora material'], 'Alguien atraviesa una etapa de dificultades económicas y se siente solo, aunque existen recursos y personas que podrían ayudarle.'),
    study(['Generosidad', 'Ayuda', 'Intercambio'], ['Deudas', 'Interés oculto', 'Desequilibrio'], 'Una persona que dispone de recursos decide compartirlos con alguien que atraviesa una situación más difícil.'),
    study(['Paciencia', 'Evaluación', 'Crecimiento gradual'], ['Impaciencia', 'Frustración', 'Esfuerzo mal dirigido'], 'Alguien lleva tiempo trabajando en un proyecto y necesita evaluar si sus esfuerzos están dando frutos.'),
    study(['Dedicación', 'Aprendizaje', 'Perfeccionamiento'], ['Desmotivación', 'Perfeccionismo', 'Falta de compromiso'], 'Una persona practica una habilidad constantemente para mejorar y convertirse en especialista en su oficio.'),
    study(['Independencia', 'Autosuficiencia', 'Disfrute'], ['Dependencia', 'Inseguridad', 'Éxito superficial'], 'Alguien disfruta de los frutos de su trabajo y alcanza una situación de comodidad e independencia.'),
    study(['Legado', 'Patrimonio', 'Estabilidad familiar'], ['Conflictos familiares', 'Pérdidas materiales', 'Inestabilidad'], 'Una familia construye una seguridad económica duradera y transmite sus recursos a las siguientes generaciones.'),
    study(['Aprendizaje práctico', 'Estudio', 'Constancia'], ['Falta de progreso', 'Desinterés', 'Oportunidad desaprovechada'], 'Una persona comienza a estudiar una habilidad práctica que puede abrirle nuevas oportunidades profesionales.'),
    study(['Responsabilidad', 'Constancia', 'Fiabilidad'], ['Estancamiento', 'Rutina agotadora', 'Irresponsabilidad'], 'Alguien trabaja con paciencia y responsabilidad en una tarea que requiere dedicación y atención al detalle.'),
    study(['Practicidad', 'Abundancia material', 'Generosidad'], ['Materialismo', 'Dependencia', 'Descuido financiero'], 'Una persona administra sus recursos con sensatez y crea un entorno cómodo y seguro para sí misma y los demás.'),
    study(['Prosperidad', 'Experiencia', 'Éxito material'], ['Codicia', 'Obstinación', 'Abuso económico'], 'Una persona experimentada ha construido una situación económica sólida gracias a su constancia y buena gestión.')
  ]
};

export const TAROT_STUDY = {
  ...MAJOR_STUDY,

  ...Object.fromEntries(
    Object.entries(MINOR_STUDY).flatMap(([suit, cards]) =>
      cards.map((card, index) => [
        `${suit}-${MINOR_RANKS[index]}`,
        card
      ])
    )
  )
};

// Comprobaciones de integridad.
const studyCardCount = Object.keys(TAROT_STUDY).length;

if (studyCardCount !== 78) {
  console.warn(
    `El material de estudio contiene ${studyCardCount} cartas en lugar de 78.`
  );
}

for (const [id, card] of Object.entries(TAROT_STUDY)) {
  if (
    !Array.isArray(card.keywords) ||
    !Array.isArray(card.reversedKeywords) ||
    !card.situation
  ) {
    console.warn(`Material de estudio incompleto: ${id}`);
  }
}
