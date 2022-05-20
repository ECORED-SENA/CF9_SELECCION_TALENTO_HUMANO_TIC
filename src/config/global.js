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
        'red profesional líder a nivel mundial, es una comunidad social orientada a las empresas, negocios y el empleo. Partiendo del perfil de cada usuario, que libremente revela su experiencia laboral y sus destrezas en un verdadero CV laboral, la web pone en contacto a millones de personas y empresas.',
    },
    {
      termino: 'Motivación',
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
        'Ultreya Proyecto Ultreya. (2014). El mercado laboral [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2YWjX4jvtNU',
    },
    {
      texto:
        'IM Gestión Humana Consultoría RRHH. (2020). Políticas de reclutamiento, selección y de contratación de personal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dLU8s9xvcPo',
    },
    {
      texto:
        'Gutiérrez, L. (2021). Atracción y retención del talento humano durante el COVID 19 [video]. SENA.',
      tipo: 'Video',
      link:
        'https://www-gestionhumana-com.bdigital.sena.edu.co/marca-del-empleador-clave-en-la-atraccion-y-retencion-del-talento-durante-el-covid-19',
    },
    {
      texto:
        'García, M. (2009). Los macroprocesos: un nuevo enfoque al estudio de la Gestión Humana. Pensamiento y gestión, (27), p. 169-176. ',
      tipo: 'Artículo',
      descarga: '/downloads/n27a06.pdf',
    },
    {
      texto:
        'Estébanez, B. (2019). Evolución del reclutamiento: 1.0 al 4.0. GBS Recursos Humanos.',
      tipo: 'Artículo',
      link:
        'https://www.gbsrecursoshumanos.com/blog/evolucion-del-reclutamiento/',
    },
    {
      texto:
        'Economía y Negocios. (2021). Estas son las tendencias de reclutamiento laboral para el 2021. El Tiempo.',
      tipo: 'Artículo',
      link:
        'https://www.eltiempo.com/economia/sectores/cuales-son-las-tendencias-de-reclutamiento-de-personal-para-el-2021-560046',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alexis Viloria Guerrero',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Darío González',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Perez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
