const FAIRY_ASSETS = {
  standard: [
    'https://i.postimg.cc/sfw0dK66/estandar-1.png',
    'https://i.postimg.cc/44BFkwLP/estandar-2.png'
  ],
  speaking: 'https://i.postimg.cc/2j2XRTcw/hablando.png',
  eating: 'https://i.postimg.cc/T2CHMQ7J/comiendo.png',
  writing: 'https://i.postimg.cc/j2g8HdnW/escribiendo.png',
  winking: 'https://i.postimg.cc/BbYhTQPQ/guinando.png'
};

const GREETINGS = [
  '¡Hola, Juanma! ¿Cómo estás hoy? Me alegra verte por aquí.',
  '¡Anda! ¡Pero si has vuelto! Acércate, que tengo algo que contarte.',
  '¡Pssst, Juanma! Hoy tengo un pequeño secreto para ti.',
  '¡Qué alegría verte! Estaba ordenando mis polvitos mágicos.',
  '¡Bienvenido a mi rinconcito! ¿Qué aventura nos espera hoy?',
  '¡Hola, hola! Espero que hoy encuentres alguna pequeña maravilla.',
  '¡Por fin! Ya pensaba que tendría que hablar con las setas.',
  '¡Shhh! Las alas me han traído hasta aquí para saludarte.'
];

const THANKS = [
  '¡Mmm! ¡Qué rico! Muchas gracias, Juanma. ¡Tenía un hambre de hada!',
  '¡Delicioso! Te has ganado tres destellitos de purpurina.',
  '¡Ñam, ñam! ¡Así da gusto vivir en una mansión encantada!',
  '¡Qué detalle! Ahora tengo energía para repartir un poquito de magia.',
  '¡Estaba justo pensando en merendar! ¡Gracias, humano favorito!'
];

const INSPIRATION = [
  'Escribe una historia que tenga lugar en una estación espacial donde nadie recuerda cómo llegó.',
  'Imagina una ciudad en la que los sueños de sus habitantes aparecen escritos en los escaparates al amanecer.',
  'Cuenta la historia de alguien que recibe una carta enviada por su yo de dentro de cien años.',
  'Un dragón trabaja como bibliotecario y está empeñado en que nadie queme los libros.',
  'Escribe sobre una isla que solo aparece cuando alguien está a punto de tomar una decisión importante.',
  'Un personaje descubre que su sombra tiene una vida completamente distinta a la suya.',
  'Imagina un hotel para monstruos tímidos que quieren pasar desapercibidos entre los humanos.',
  'Una niña encuentra un mapa que no señala lugares, sino momentos felices.',
  'Escribe una historia en la que la Luna decide tomarse unas vacaciones.',
  'Un relojero fabrica relojes que miden emociones en lugar de horas.',
  'En un bosque, los árboles intercambian recuerdos durante la noche.',
  'Un fantasma está cansado de asustar y quiere aprender a hacer reír.',
  'Describe el último día de una tienda que vende objetos perdidos de otras dimensiones.',
  'Una persona recibe cada mañana una receta de alguien que todavía no conoce.',
  'Imagina un mundo donde los colores tienen personalidad y pueden discutir entre sí.',
  'Un tren nocturno recoge pasajeros que viajan a lugares que ya no existen.',
  'Escribe sobre una bruja que ha perdido su magia, pero conserva su sentido del humor.',
  'Una ciudad entera se despierta y descubre que ha cambiado de lugar con otra.',
  'Un personaje puede escuchar lo que cuentan las fotografías cuando nadie las mira.',
  'Un pequeño pueblo celebra cada año el festival de las cosas que nunca ocurrieron.',
  'Una criatura marina colecciona mensajes que los barcos lanzan al océano.',
  'Escribe sobre dos enemigos que tienen que cuidar juntos un huevo misterioso.',
  'Un ascensor tiene un botón secreto que lleva a una planta que no aparece en los planos.',
  'Imagina una academia donde se estudia el arte de hacer preguntas extraordinarias.',
  'Una persona hereda una casa en la que cada habitación pertenece a una estación del año.',
  'Un aprendiz de mago solo consigue realizar hechizos cuando se equivoca.',
  'Escribe una aventura protagonizada por un mapa que quiere ser explorado.',
  'En una librería, los libros eligen a sus lectores y a veces se equivocan.',
  'Una estrella fugaz aterriza en un jardín y no sabe cómo volver al cielo.',
  'Imagina una sociedad donde los cumpleaños se celebran al cumplir sueños, no años.',
  'Un personaje descubre una puerta diminuta detrás de un radiador.',
  'Escribe sobre un pueblo donde los lunes duran cinco minutos y los domingos tres días.',
  'Una criatura invisible deja pequeñas pistas para demostrar que existe.',
  'Un museo inaugura una exposición de objetos que todavía no han sido inventados.',
  'Una persona puede entrar en los cuadros, pero nunca sabe cuánto tiempo pasará dentro.',
  'Imagina que los animales de una ciudad organizan una reunión para cambiar las normas.',
  'Un caballero recibe la misión de proteger algo que parece completamente insignificante.',
  'Escribe una historia que comience con: «La lluvia empezó a caer hacia arriba».',
  'Una hechicera puede convertir los enfados en pequeñas luciérnagas.',
  'Un personaje encuentra una brújula que siempre señala aquello que necesita aprender.',
  'En una estación de metro aparece un andén que solo visitan personajes de ficción.',
  'Una persona se despierta con la capacidad de hablar con las cosas olvidadas en los cajones.',
  'Imagina un reino en el que está prohibido contar finales de historias.',
  'Un pequeño robot quiere convertirse en jardinero y cuidar un bosque.',
  'Escribe sobre una fiesta de disfraces a la que acuden criaturas que no saben qué disfraz ponerse.',
  'Una biblioteca guarda un libro en blanco que se escribe con las decisiones del lector.',
  'Un personaje recibe las llaves de un faro que ilumina caminos interiores.',
  'Imagina que los recuerdos pueden guardarse en frascos y alguien rompe uno por accidente.',
  'Un grupo de desconocidos comparte el mismo sueño durante siete noches.',
  'Una ciudad construye una torre para comunicarse con las nubes.',
  'Escribe sobre un mago que tiene que resolver un misterio sin utilizar magia.',
  'Una criatura del bosque quiere descubrir qué hay al otro lado de la última página de un libro.',
  'Un personaje encuentra una moneda que compra cinco minutos de conversación con alguien del pasado.',
  'Imagina una escuela para aprendices de villano donde nadie quiere ser realmente malo.',
  'Una familia descubre que su jardín crece unos centímetros cada vez que alguien cuenta una historia.',
  'Escribe sobre una nave espacial cuyo ordenador ha desarrollado miedo a la oscuridad.',
  'Un pueblo tiene una campana que suena cuando alguien está a punto de enamorarse.',
  'Una persona descubre que puede entrar en los videojuegos, pero solo como personaje secundario.',
  'Imagina una competición de inventos absurdos que acaba salvando el mundo.',
  'Un hada pierde una de sus alas y recibe ayuda de quien menos esperaba.',
  'Escribe una historia que transcurra íntegramente durante una cena imposible.',
  'Un detective investiga la desaparición de todos los sonidos de una ciudad.',
  'Un personaje puede cambiar el tiempo atmosférico de una habitación según su estado de ánimo.',
  'Imagina un mundo donde cada persona tiene un pequeño guardián fantástico que nadie más puede ver.',
  'Un barco navega por un cielo lleno de islas flotantes y busca un puerto legendario.',
  'Una puerta aparece cada noche en una pared distinta de la casa.',
  'Escribe sobre una persona que trabaja archivando los finales alternativos de las historias.',
  'Un cuervo entrega mensajes que solo pueden leerse a la luz de una vela.',
  'Imagina que las constelaciones son ventanas a otros mundos.',
  'Una criatura antigua despierta en una ciudad moderna y decide aprender a usar el transporte público.',
  'Un personaje descubre que alguien está borrando los caminos de un bosque mágico.',
  'Escribe sobre una cafetería donde cada bebida permite recordar un día olvidado.',
  'Una princesa quiere ser cartógrafa y explorar lugares que nadie ha dibujado.',
  'Un grupo de amigos encuentra una caja que contiene el sonido del mar.',
  'Imagina una ciudad donde las estatuas cambian de postura cuando nadie las mira.',
  'Un viajero llega a un pueblo en el que todos conocen su nombre, pero él no recuerda haber estado allí.',
  'Escribe sobre un monstruo que solo aparece para ayudar a quienes se sienten solos.',
  'Una persona recibe un paquete que contiene una versión diminuta de su propia casa.',
  'Un hechizo hace que todas las mentiras se conviertan en mariposas visibles.',
  'Imagina un mundo donde las estaciones del año son gobernadas por cuatro hermanas.',
  'Un personaje debe devolver una estrella a su constelación antes del amanecer.',
  'Una tienda vende recuerdos de lugares que todavía no has visitado.',
  'Escribe sobre un jardín en el que cada flor representa una pregunta sin respuesta.',
  'Un videojuego antiguo empieza a enviar mensajes a quien lo juega.',
  'Un aprendiz de detective resuelve misterios observando detalles que los demás ignoran.',
  'Imagina una casa encantada que quiere ser reformada y decorada con cariño.',
  'Una persona encuentra una escalera que desciende hasta el centro de sus propios recuerdos.',
  'Un grupo de criaturas fantásticas monta una compañía de teatro ambulante.',
  'Escribe sobre el último farero de un océano que está desapareciendo.',
  'Una máquina traduce el idioma de los sueños, pero solo funciona los martes.',
  'Imagina que cada libro leído deja una pequeña puerta abierta en algún lugar del mundo.',
  'Un personaje tiene que organizar una expedición para encontrar el silencio.',
  'Una nube decide acompañar a una persona durante todo un viaje.',
  'Escribe sobre una ciudad subterránea iluminada por plantas bioluminiscentes.',
  'Un reloj se detiene cada vez que alguien dice algo que de verdad siente.',
  'Un personaje descubre que su vecino es el guardián de las pequeñas casualidades.',
  'Imagina una aventura en la que el objeto más poderoso es una llave sin cerradura.',
  'Una criatura fantástica quiere aprender a cocinar una receta humana.',
  'Escribe una historia que comience con: «Aquella mañana, todas las puertas estaban abiertas».',
  'Un explorador encuentra un planeta donde los océanos están hechos de nubes.',
];

const WHEREABOUTS = [
  'Hoy quizá encuentres una pluma en un lugar inesperado. Si la ves, piensa que te he dejado un saludito.',
  'Hoy el número 42 podría cruzarse contigo más de una vez. ¡A ver si lo descubres!',
  'Hoy busca una forma de corazón en algún rincón cotidiano. A veces la magia tiene formas sencillas.',
  'Hoy puede que una canción te encuentre justo cuando la necesitas.',
  'Hoy fíjate en una ventana iluminada. Puede ser mi pequeño faro para ti.',
  'Hoy quizá veas una mariposa, dibujada o de verdad. Te mando un aleteo.',
  'Hoy busca algo de color violeta que no esperabas encontrar.',
  'Hoy una nube podría parecerte un animal fantástico. Mira un momento hacia arriba.',
  'Hoy presta atención a una palabra bonita que escuches por casualidad.',
  'Hoy quizá encuentres una hoja con una forma curiosa. ¡Tesoro del día!',
  'Hoy puede que veas dos cosas iguales en lugares distintos. Será nuestro guiño.',
  'Hoy busca una estrella, aunque sea dibujada en una etiqueta o una prenda.',
  'Hoy quizá escuches a alguien reírse de una manera contagiosa. Guarda ese sonido.',
  'Hoy fíjate en las sombras: alguna podría parecer la entrada de un reino secreto.',
  'Hoy puede aparecer ante ti una puerta especialmente bonita. Imagínate qué habrá detrás.',
  'Hoy busca una pequeña luz en medio de un lugar oscuro.',
  'Hoy quizá encuentres una piedra que te llame la atención. No hace falta llevártela: basta con verla.',
  'Hoy el número 7 puede aparecer en tu camino. ¡Salúdalo de mi parte!',
  'Hoy intenta descubrir algo azul que nunca habías observado con atención.',
  'Hoy quizá una brisa te despeine justo cuando salgas al exterior. Ese será mi abrazo.',
  'Hoy busca una palabra escrita a mano en algún cartel, nota o cuaderno.',
  'Hoy puede que veas un gato descansando como si fuese el dueño del mundo.',
  'Hoy fíjate en los reflejos: quizá encuentres un mundo doble en un escaparate.',
  'Hoy una pequeña coincidencia podría sacarte una sonrisa. No la dejes pasar.',
  'Hoy busca una flor, incluso si está creciendo en una grieta del suelo.',
  'Hoy quizá escuches una melodía que te recuerde a un lugar querido.',
  'Hoy presta atención a un olor agradable: café, lluvia, jabón o tierra mojada.',
  'Hoy busca una espiral en algún objeto cotidiano.',
  'Hoy puede que encuentres una estrella de cinco puntas en un dibujo o estampado.',
  'Hoy fíjate en un detalle arquitectónico que normalmente pasaría desapercibido.',
  'Hoy quizá veas un pájaro detenerse un instante cerca de ti.',
  'Hoy busca algo diminuto que tenga un trabajo importante.',
  'Hoy el número 13 podría aparecer en un sitio inesperado. ¡Qué misterioso!',
  'Hoy intenta encontrar tres tonos distintos de verde.',
  'Hoy puede que alguien te regale una frase amable sin saber cuánto la necesitabas.',
  'Hoy busca una llave, real o dibujada. ¿Qué puerta abriría?',
  'Hoy quizá veas una nube con forma de barco.',
  'Hoy presta atención a un sonido lejano que normalmente ignorarías.',
  'Hoy busca un objeto antiguo que parezca guardar una historia.',
  'Hoy puede que una luz atraviese una cortina y dibuje algo precioso.',
  'Hoy fíjate en los números de una matrícula, un reloj o un recibo: quizá se repita alguno.',
  'Hoy busca una pequeña luna creciente en un símbolo, un dibujo o el cielo.',
  'Hoy quizá encuentres una textura que te apetezca tocar: madera, piedra, tela o papel.',
  'Hoy observa un rincón con plantas. Puede que descubras una hoja nueva.',
  'Hoy busca algo que tenga alas, aunque no sea un ser vivo.',
  'Hoy puede que veas una palabra que empiece por la misma letra que tu nombre.',
  'Hoy intenta encontrar un círculo perfecto en tu entorno.',
  'Hoy quizá alguien diga algo que te haga pensar: «Qué curioso, justo eso necesitaba escuchar».',
  'Hoy busca un pequeño detalle dorado o plateado que brille con la luz.',
  'Hoy fíjate en una escalera y piensa adónde te gustaría que condujera.',
  'Hoy quizá veas un paraguas aunque no llueva. ¡Un visitante de otros días!'
];

const CURIOSITIES = [
  { category: 'Videojuegos', text: 'En Super Mario Bros., el diseño de Mario con gorra y bigote ayudó a que sus rasgos se distinguieran con los píxeles limitados de la época.' },
  { category: 'Videojuegos', text: 'El primer videojuego de Pokémon se lanzó en Japón en 1996: Pokémon Rojo y Pokémon Verde.' },
  { category: 'Videojuegos', text: 'Minecraft nació como un proyecto independiente de Markus Persson y su primera versión pública apareció en 2009.' },
  { category: 'Videojuegos', text: 'La música de Tetris para Game Boy popularizó una melodía basada en una canción folclórica rusa llamada Korobeiniki.' },
  { category: 'Videojuegos', text: 'En Animal Crossing, el reloj del juego sigue el calendario y la hora del mundo real.' },
  { category: 'Videojuegos', text: 'Kirby fue diseñado inicialmente con una apariencia muy sencilla y redonda, que facilitaba animarlo y expresarlo.' },
  { category: 'Videojuegos', text: 'El nombre de Sonic alude a la velocidad del sonido, una idea central de su diseño.' },
  { category: 'Videojuegos', text: 'The Legend of Zelda se inspiró, entre otras cosas, en las exploraciones de la infancia de Shigeru Miyamoto por los alrededores de Kioto.' },
  { category: 'Videojuegos', text: 'Pac-Man se diseñó alrededor de la idea de comer y de una silueta que recordaba a una pizza a la que le faltaba una porción.' },
  { category: 'Videojuegos', text: 'El estudio detrás de Stardew Valley, ConcernedApe, fue esencialmente el trabajo de una sola persona durante años.' },
  { category: 'Libros', text: 'Mary Shelley escribió Frankenstein cuando era muy joven; la primera edición se publicó anónimamente en 1818.' },
  { category: 'Libros', text: 'El nombre de Sherlock Holmes fue creado por Arthur Conan Doyle, y su primera aparición fue en Estudio en escarlata, de 1887.' },
  { category: 'Libros', text: 'Alicia en el país de las maravillas se publicó en 1865 y sus ilustraciones originales fueron obra de John Tenniel.' },
  { category: 'Libros', text: 'J. R. R. Tolkien fue profesor de lengua y literatura anglosajonas en la Universidad de Oxford.' },
  { category: 'Libros', text: 'La novela La historia interminable, de Michael Ende, se publicó originalmente en alemán en 1979.' },
  { category: 'Libros', text: 'El principito fue publicado por primera vez en 1943, en Nueva York, mientras Antoine de Saint-Exupéry vivía en Estados Unidos.' },
  { category: 'Libros', text: 'La palabra «robot» se popularizó gracias a la obra de teatro R. U. R., del escritor checo Karel Čapek, estrenada en 1921.' },
  { category: 'Libros', text: 'Las aventuras de Pinocho aparecieron por entregas en una revista italiana antes de publicarse como libro.' },
  { category: 'Libros', text: 'La novela Drácula de Bram Stoker se publicó en 1897 y está construida mediante diarios, cartas y otros documentos ficticios.' },
  { category: 'Libros', text: 'Las primeras ediciones de Harry Potter y la piedra filosofal se publicaron en Reino Unido en 1997.' },
  { category: 'Historia', text: 'La Universidad de Oxford ya enseñaba antes de que existiera el Imperio azteca.' },
  { category: 'Historia', text: 'Cleopatra vivió más cerca en el tiempo del alunizaje de 1969 que de la construcción de la Gran Pirámide de Guiza.' },
  { category: 'Historia', text: 'La biblioteca de Alejandría fue una institución de la Antigüedad dedicada a reunir y estudiar textos de muchas culturas.' },
  { category: 'Historia', text: 'En la antigua Roma existían establecimientos llamados thermopolia donde se vendían comidas y bebidas preparadas.' },
  { category: 'Historia', text: 'La imprenta de tipos móviles de Johannes Gutenberg transformó la difusión de textos en Europa durante el siglo XV.' },
  { category: 'Historia', text: 'La ciudad de Petra, en la actual Jordania, fue un importante centro nabateo y muchas de sus fachadas fueron talladas en roca.' },
  { category: 'Historia', text: 'La ruta de la seda no era un único camino: era una red de rutas comerciales que conectaba regiones de Asia, África y Europa.' },
  { category: 'Historia', text: 'La primera fotografía permanente conocida, tomada por Nicéphore Niépce, data de la década de 1820.' },
  { category: 'Historia', text: 'En la Edad Media europea, los manuscritos podían decorarse con pan de oro y pigmentos muy costosos.' },
  { category: 'Historia', text: 'El faro de Alejandría fue una de las Siete Maravillas del mundo antiguo.' },
  { category: 'Fantasía', text: 'En la mitología nórdica, Yggdrasil es un fresno gigantesco que conecta distintos mundos.' },
  { category: 'Fantasía', text: 'En la mitología griega, Pegaso era un caballo alado asociado con el héroe Belerofonte.' },
  { category: 'Fantasía', text: 'Los grifos, criaturas con cuerpo de león y cabeza y alas de águila, aparecen en tradiciones artísticas de la Antigüedad.' },
  { category: 'Fantasía', text: 'En muchas leyendas europeas, los brownies son pequeños seres domésticos que ayudan durante la noche.' },
  { category: 'Fantasía', text: 'El ave fénix aparece en tradiciones antiguas como símbolo de renovación y renacimiento.' },
  { category: 'Fantasía', text: 'Los unicornios aparecen en bestiarios medievales, donde a menudo se les atribuían cualidades extraordinarias.' },
  { category: 'Fantasía', text: 'En la mitología japonesa, los kitsune son zorros sobrenaturales capaces de transformarse y adquirir gran sabiduría.' },
  { category: 'Fantasía', text: 'Los dragones tienen significados muy distintos según la cultura: pueden representar peligro, protección, sabiduría o buena fortuna.' },
  { category: 'Fantasía', text: 'Las valquirias de la mitología nórdica elegían a algunos guerreros caídos y los conducían al Valhalla.' },
  { category: 'Fantasía', text: 'En el folclore irlandés, los leprechauns son seres feéricos asociados con los zapatos y los tesoros.' },
  { category: 'Ciencia y naturaleza', text: 'Los pulpos tienen tres corazones y sangre azulada debido a una proteína transportadora de oxígeno basada en cobre.' },
  { category: 'Ciencia y naturaleza', text: 'La miel puede conservarse durante muchísimo tiempo si permanece bien sellada y protegida de la humedad.' },
  { category: 'Ciencia y naturaleza', text: 'Los wombats producen excrementos con forma aproximadamente cúbica.' },
  { category: 'Ciencia y naturaleza', text: 'Un día en Venus dura más que su año: tarda más en girar sobre sí mismo que en completar una órbita alrededor del Sol.' },
  { category: 'Ciencia y naturaleza', text: 'Los tiburones existen desde mucho antes que los árboles.' },
  { category: 'Ciencia y naturaleza', text: 'Las mariposas prueban los sabores con receptores situados en sus patas.' },
  { category: 'Ciencia y naturaleza', text: 'Los tardígrados son animales microscópicos capaces de entrar en estados de resistencia extrema.' },
  { category: 'Ciencia y naturaleza', text: 'El olor característico de la lluvia sobre suelo seco se conoce como petricor.' },
  { category: 'Ciencia y naturaleza', text: 'Los cuervos pueden reconocer rostros humanos y recordar a personas que consideran una amenaza.' },
  { category: 'Ciencia y naturaleza', text: 'Algunas especies de bambú pueden crecer muy deprisa en condiciones favorables.' },
  { category: 'Arte y cultura', text: 'La palabra «museo» procede del griego mouseion, un lugar relacionado con las musas.' },
  { category: 'Arte y cultura', text: 'El azul ultramar se obtenía tradicionalmente de una piedra semipreciosa llamada lapislázuli, que se comerciaba desde Asia.' },
  { category: 'Arte y cultura', text: 'El teatro de sombras tiene tradiciones muy antiguas en distintas partes de Asia, con estilos propios en cada región.' },
  { category: 'Arte y cultura', text: 'El origami moderno se desarrolló en Japón, aunque el papel plegado también tiene historias en otras culturas.' },
  { category: 'Arte y cultura', text: 'La palabra «serendipia» se popularizó a partir del cuento Los tres príncipes de Serendip.' },
  { category: 'Arte y cultura', text: 'Los vitrales medievales de las catedrales servían también para narrar historias e imágenes religiosas a quienes no podían leer.' },
  { category: 'Arte y cultura', text: 'El ajedrez moderno evolucionó a partir de juegos anteriores, y sus reglas se fueron transformando durante siglos.' },
  { category: 'Arte y cultura', text: 'La palabra «álbum» procede del latín albus, que significa blanco.' },
  { category: 'Arte y cultura', text: 'Los mapas antiguos a veces incluían criaturas marinas y seres fantásticos en zonas poco conocidas.' },
  { category: 'Arte y cultura', text: 'El carnaval de Venecia es conocido por sus máscaras, cuya tradición tiene varios siglos de historia.' }
];

const DAILY_LABELS = {
  whereabouts: '¿Dónde estarás hoy?',
  curiosity: 'Dime una curiosidad'
};

export function initFairy({ supabase, getUserId }) {
  const $ = (selector) => document.querySelector(selector);
  const image = $('#fairyImage');
  const bubble = $('#fairyBubble');
  const status = $('#fairyStatus');
  const buttons = {
    food: $('#fairyFood'),
    inspiration: $('#fairyInspiration'),
    whereabouts: $('#fairyWhereabouts'),
    curiosity: $('#fairyCuriosity')
  };
  if (!image || !bubble || !status || Object.values(buttons).some((button) => !button)) {
    console.warn('El módulo del Hada no encuentra todos los elementos de su sección.');
    return { onOpen() {} };
  }

  let currentDaily = {};
  let busy = false;

  const localDate = () => new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());

  function setMood(mood) {
    const asset = FAIRY_ASSETS[mood] || FAIRY_ASSETS.standard;
    image.src = Array.isArray(asset)
      ? asset[Math.floor(Math.random() * asset.length)]
      : asset;
    image.onload = () => image.closest('.fairy-character-wrap')?.classList.remove('no-image');
    image.onerror = () => {
      image.onerror = null;
      image.closest('.fairy-character-wrap')?.classList.add('no-image');
      image.alt = 'Ilustración del hada pendiente de añadir';
    };
    image.style.opacity = '1';
  }

  function say(message, mood = 'speaking') {
    bubble.textContent = message;
    bubble.classList.remove('fairy-bubble-pop');
    void bubble.offsetWidth;
    bubble.classList.add('fairy-bubble-pop');
    setMood(mood);
  }

  function setDailyButtonState(type, used) {
    const button = buttons[type];
    button.disabled = Boolean(used);
    button.classList.toggle('is-used', Boolean(used));
    if (type === 'whereabouts') {
      button.innerHTML = used ? '✧ Ya te he saludado hoy' : '✧ ¿Dónde estarás hoy?';
    } else if (type === 'curiosity') {
      button.innerHTML = used ? '✧ Ya te he contado una' : '✧ Dime una curiosidad';
    }
  }

  async function loadDaily() {
    const userId = getUserId?.();
    if (!userId) return;
    const date = localDate();
    const { data, error } = await supabase
      .from('fairy_daily_uses')
      .select('interaction_type, content_id, content_text')
      .eq('user_id', userId)
      .eq('local_date', date);
    if (error) throw error;
    currentDaily = {};
    for (const row of data || []) currentDaily[row.interaction_type] = row;
    setDailyButtonState('whereabouts', currentDaily.whereabouts);
    setDailyButtonState('curiosity', currentDaily.curiosity);
  }

  async function useDaily(type, entries) {
    if (busy) return;
    const userId = getUserId?.();
    if (!userId) {
      say('Primero tenemos que abrir el Grimorio para reconocerte.', 'speaking');
      return;
    }
    if (currentDaily[type]) {
      say(currentDaily[type].content_text, type === 'whereabouts' ? 'winking' : 'speaking');
      return;
    }
    busy = true;
    buttons[type].disabled = true;
    status.textContent = 'El hada está buscando algo especial…';
    try {
      const entry = entries[Math.floor(Math.random() * entries.length)];
      const contentId = String(entry.id);
      const contentText = entry.text;
      const { data, error } = await supabase.from('fairy_daily_uses').insert({
        user_id: userId,
        local_date: localDate(),
        interaction_type: type,
        content_id: contentId,
        content_text: contentText
      }).select('interaction_type, content_id, content_text').single();

      if (error) {
        // Si otra pestaña/dispositivo ganó la carrera, recuperamos el mensaje del día.
        const { data: existing, error: readError } = await supabase
          .from('fairy_daily_uses')
          .select('interaction_type, content_id, content_text')
          .eq('user_id', userId)
          .eq('local_date', localDate())
          .eq('interaction_type', type)
          .maybeSingle();
        if (readError || !existing) throw error;
        currentDaily[type] = existing;
      } else {
        currentDaily[type] = data;
      }
      setDailyButtonState(type, true);
      say(currentDaily[type].content_text, type === 'whereabouts' ? 'winking' : 'speaking');
      status.textContent = 'Un pequeño secreto para acompañarte durante el día.';
    } catch (error) {
      console.error('Fairy daily interaction:', error);
      buttons[type].disabled = false;
      status.textContent = 'Uy, se me ha enredado un ala. Inténtalo de nuevo.';
      say('¡Ay! No he podido guardar este pequeño secreto. Prueba otra vez.', 'speaking');
    } finally {
      busy = false;
    }
  }

  async function inspire() {
    if (busy) return;
    const userId = getUserId?.();
    if (!userId) {
      say('Primero tenemos que abrir el Grimorio para reconocerte.', 'speaking');
      return;
    }
    busy = true;
    buttons.inspiration.disabled = true;
    status.textContent = 'Estoy revolviendo mis pergaminos…';
    try {
      const { data: usedRows, error: readError } = await supabase
        .from('fairy_prompt_history')
        .select('prompt_id')
        .eq('user_id', userId);
      if (readError) throw readError;

      let used = new Set((usedRows || []).map((row) => row.prompt_id));
      if (used.size >= INSPIRATION.length) {
        const { error: resetError } = await supabase
          .from('fairy_prompt_history')
          .delete()
          .eq('user_id', userId);
        if (resetError) throw resetError;
        used = new Set();
        status.textContent = '¡He mezclado de nuevo todos mis pergaminos!';
      }

      const available = INSPIRATION
        .map((text, index) => ({ id: `idea-${String(index + 1).padStart(3, '0')}`, text }))
        .filter((entry) => !used.has(entry.id));
      const entry = available[Math.floor(Math.random() * available.length)];
      const { error: saveError } = await supabase.from('fairy_prompt_history').insert({
        user_id: userId,
        prompt_id: entry.id
      });
      if (saveError) throw saveError;

      say(`¡Se me ha ocurrido algo! ${entry.text}`, 'writing');
      status.textContent = 'Una idea nueva, elegida de mi colección secreta.';
    } catch (error) {
      console.error('Fairy inspiration:', error);
      status.textContent = 'No he podido abrir el cajón de las ideas.';
      say('Mis pergaminos se han desordenado. ¿Me das un momento y lo intentamos otra vez?', 'writing');
    } finally {
      busy = false;
      buttons.inspiration.disabled = false;
    }
  }

  buttons.food.addEventListener('click', () => {
    const thanks = THANKS[Math.floor(Math.random() * THANKS.length)];
    say(thanks, 'eating');
    status.textContent = '¡La merienda ha sido todo un éxito!';
    window.setTimeout(() => {
      if ($('#view-fairy')?.classList.contains('active')) setMood('standard');
    }, 2600);
  });

  buttons.inspiration.addEventListener('click', inspire);
  buttons.whereabouts.addEventListener('click', () => useDaily(
    'whereabouts',
    WHEREABOUTS.map((text, index) => ({ id: `sign-${String(index + 1).padStart(3, '0')}`, text }))
  ));
  buttons.curiosity.addEventListener('click', () => useDaily(
    'curiosity',
    CURIOSITIES.map((entry, index) => ({
      id: `fact-${String(index + 1).padStart(3, '0')}`,
      text: `${entry.text}  ✧  ${entry.category}`
    }))
  ));

  async function onOpen() {
    const greeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
    say(greeting, 'speaking');
    status.textContent = 'Tu pequeña compañera de la Mansión.';
    try {
      await loadDaily();
    } catch (error) {
      console.error('Fairy daily state:', error);
      status.textContent = 'No he podido consultar mis notas de hoy.';
    }
  }

  document.querySelectorAll('[data-go="fairy"]').forEach((button) => {
    button.addEventListener('click', onOpen);
  });

  onOpen();
  return { onOpen };
}
