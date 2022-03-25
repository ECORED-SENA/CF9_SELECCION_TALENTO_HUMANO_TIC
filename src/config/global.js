export default {
  global: {
    componenteFormativo:
      'Planificación del proceso de reclutamiento o atracción de candidatos ',
    descripcionCurso:
      'El proceso de preselección de candidatos requiere de una planeación que implica llevar a cabo una serie de etapas, como son: definir políticas y presupuesto, identificar necesidades, estructurar perfil del cargo, elección de fuentes de reclutamiento, y divulgación, que se retroalimentan entre sí, por lo cual tiene un carácter dinámico y debe ser eficaz para el cumplimiento de las estrategias organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercado laboral y mercado de talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Políticas y normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recursos y presupuesto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Reclutamiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alles, M. (2007). Dirección Estratégica de Recursos Humanos. Granica. ',
      link: '',
    },
    {
      referencia: 'Alles, M. (2016). Selección por competencias. Granica. ',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2003). Gestión del Talento Humano. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Cuestas, A. (2017 ). Gestión del Talento Humano y del Conocimiento. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Dessler, G. y Varela, R. (2011). Administración de Recursos Humanos. Enfoque latinoamericano. Pearson',
      link: '',
    },
    {
      referencia:
        'Estébanez, B. (2019). Evolución del reclutamiento: del 1.0 al 4.0. GBS Recursos Humanos. ',
      link:
        'https://www.gbsrecursoshumanos.com/blog/evolucion-del-reclutamiento/',
    },
    {
      referencia:
        'Fernández, J. (2005). Gestión por Competencias. Un Modelo Estratégico para lEGRES Dirección de Recursos Humanos. Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'Francés, A. (2006 ). Estrategia y Planes para la Empresa con el Cuadro de Mando Integral. Pearson Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'García, M., Murillo, G. y González, C. (2010). Los Macro-procesos: Un Nuevo Enfoque al Estudio de la Gestión Humana. Programa Editorial.',
      link: '',
    },
    {
      referencia:
        'García, P., Gatica, M., Cruz, E., Gatica, K., Vargas, R., Hernández, J., Ramos, V. y Macías, D. (2016). Procesos de reclutamiento y las redes sociales. Revista Iberoamericana para la Investigación y el Desarrollo Educativo, 6(12).',
      link: 'https://www.ride.org.mx/index.php/ride/article/view/226/1024',
    },
    {
      referencia:
        'Gómez, J. (2002). Lineamientos Pedagógicos para una Educación por Competencias. En G. Bustamante, S de Z., M. Bacarat, N. Graziano y L. Marín, El concepto de competencia II. Una mirada interdisciplinar. Sociedad Colombiana de Pedagogía.',
      link: '',
    },
    {
      referencia:
        'Gómez, J. (2002). Lineamientos Pedagógicos para una Educación por Competencias. En G. Bustamante, S de Z., M. Bacarat, N. Graziano y L. Marín, El concepto de competencia II. Una mirada interdisciplinar. Sociedad Colombiana de Pedagogía.',
      link:
        'González, Á. (2007). Método de Compensación Basado en Competencias. Ediciones Uninorte.',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'conjunto de datos pertenecientes a un mismo contexto; en este caso, busca almacenar sistemáticamente los datos de los candidatos que participan en los procesos de selección de la organización y permite realizar consultas posteriores de las que se pueden extraer datos que permitan el cubrimiento de futuras vacantes.',
    },
    {
      termino: 'Capacidades',
      significado: 'conocimiento, competencias y experiencia.',
    },
    {
      termino: 'Competencia',
      significado:
        'característica de personalidad expresada en comportamientos que generan un desempeño exitoso en un puesto de trabajo.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'conjunto de saberes ordenados sobre un tema en particular, materia o disciplina. ',
    },
    {
      termino: 'Profesiograma',
      significado:
        'documento donde se especifican y se acreditan las funciones que tiene un empleado en su puesto de trabajo, se plasman aptitudes y capacidades que debe tener una persona para desarrollar una tarea, también llamado perfil profesional.',
    },
    {
      termino: '<em>Employer branding</em>',
      significado:
        'creación de marca del empleador. Es el proceso de creación de identidad y gestión de la imagen de la empresa en su papel como proveedora de empleo. ',
    },
    {
      termino: 'Enriquecimiento de cargo',
      significado:
        'reorganización y ampliación del cargo para proporcionar adecuación del cargo; crecimiento profesional del ocupante.',
    },
    {
      termino: 'Experiencia',
      significado:
        'práctica prolongada de una actividad, lo que permite incorporar nuevos conocimientos e incrementar la eficacia en la aplicación de los conocimientos y competencias, e influye en la optimización de los resultados de dicha actividad.',
    },
    {
      termino: 'Headhunting',
      significado:
        'método de selección de personal en el que un cazatalentos, también denominado head-hunter, realiza la búsqueda directa del perfil profesional que una empresa solicita. ',
    },
    {
      termino: 'Identidad digital',
      significado:
        'expresión que determina el conjunto de información (perfiles profesionales, noticias, referencias de blogs, etc.) que se pueden encontrar en Internet sobre una persona.',
    },
    {
      termino: 'LinkedIn',
      significado:
        'motivo es aquello que impulsa a una persona a actuar de determinada manera; la motivación es uno de los factores internos de los seres humanos que requiere mayor atención.<br><br>Interés recurrente para el logro de un objetivo; energiza, orienta y selecciona comportamientos.',
    },
    {
      termino: 'Modelo de competencia',
      significado:
        'modelo de gestión que soporta las características personales, destrezas, actitudes de los ocupantes más exitosos de ciertos cargos, para establecer los elementos requeridos y cumplir con la demanda de una empresa.',
    },
    {
      termino: 'Servicios de Redes Sociales',
      significado:
        '<em>(Social networking)</em> Conjunto de servicios, habitualmente basados en plataformas web, donde el usuario puede ponerse en contacto con otras personas, sean conocidas o no, compartiendo información y creando comunidades virtuales.',
    },
    {
      termino: 'Talento',
      significado:
        'conocimiento y desarrollo de competencias que posee una persona más allá de lo requerido por su puesto de trabajo.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
