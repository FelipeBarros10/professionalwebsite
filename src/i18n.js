import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      imFelipeBarros: 'I\'M FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Looking for the first opportunity '
    },
    experiencies: {
      experienceHeader: 'Experiences',
      title: 'Some expeperiences that involves technologies',
      since: 'Since'
    },
    education: {
      title: 'EDUCATION',
      subtitle: 'College',
      course: 'Information of Systems'

    },
    educationsIte: {
      subtitle: 'College',
      course: 'Course:',
      courseName: 'Information of Systems',
      start: 'Start:',
      end: 'End:'

    },
    educationsDev: {
      course: 'Course:',
      courseName: 'FullStack Developer',
      tech: 'Technologies',
      start: 'Start:',
      end: 'End:'

    },

    educationsDoDev: {
      course: 'Course:',
      courseName: 'Information of Systems',
      start: 'Start:',
      end: 'End:'

    },
    aboutTheSite: {
      title: 'Introducing myself,',
      paragraph1: 'My experience in the technology field is focused on front-end development, as the combination of logic, creativity, and the ability to create intuitive and visually appealing interfaces captivated me and led me to pursue this path.',
      paragraph2: 'This portfolio was created to showcase some of my skills as a front-end developer. Here, I present several projects I have developed using HTML, CSS, JavaScript, and modern frameworks such as Vue.js and Tailwind.'
    },
    projectsComponent: {
      titleProjects: "Check out some of the projects I've worked on",
      subtitleProjects: 'Personal and professional projects.',
      titleAboutMe: 'Find out more about me',
      subtitleAboutMe: 'Where i come from? Where do i live? What do i eat?',
      buttonTitle: 'Click here'
    },
    professionalExperiences: {
      header: 'Experiences',
      firstExp: 'DIGITAL PLANNING INTERNSHIP - Paschoalotto',
      featureTitleFirstExp: 'Treatment of dial bases: ',
      featureSubtitleFirstExp: 'Responsible for generating an Excel database through R Studio for Virtual Agents and ChatBots',
      featureTitleFirstExp2: 'Production Reports:',
      featureSubtitleFirstExp2: 'Production monitoring every hour',
      featureTitleFirstExp3: 'Access to agreements in the DB:',
      featureSubtitleFirstExp3: 'Through PgAdmin I have access to customers who have closed agreements and how to have a profile analysis or cancellation of bills',
      featureSubtitleFirstExp4: 'Power BI Dashboards analysis'
    }

  },
  ptBR: {
    header: {
      imFelipeBarros: 'OI, SOU FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Procurando a primeira oportunidade'
    },
    experiencies: {
      experienceHeader: 'Experiências',
      title: 'Experiências que envolvem tecnologias',
      since: 'Desde'
    },
    education: {
      title: 'EDUCAÇÃO'
    },

    educationsIte: {
      subtitle: 'Faculdade',
      course: 'Curso:',
      courseName: 'Sistemas de Informação',
      start: 'Início:',
      end: 'Fim:'

    },
    educationsDev: {
      course: 'Curso:',
      courseName: 'Desenvolvedor FullStack',
      tech: 'Tecnologias:',
      start: 'Início:',
      end: 'Fim:'

    },
    educationsDoDev: {
      course: 'Curso:',
      courseName: 'Basic JavaScript',
      start: 'Início:',
      end: 'Fim:'

    },
    aboutTheSite: {
      title: 'Quero me apresentar,',
      paragraph1: 'Meu momento na área de tecnologia está voltada ao desenvolvimento front-end, que é a combinação de lógica, criatividade e a capacidade de criar interfaces intuitivas e visualmente agradáveis me cativou e me fez seguir esse caminho.',
      paragraph2: 'Este portfólio foi criado com o intuito de mostrar parte das minhas habilidades como desenvolvedor front-end. Aqui trago alguns outros projetos que desenvolvi em HTML, CSS, JavaScript e frameworks modernos como Vue.js e Tailwind.'
    },
    projectsComponent: {
      titleProjects: 'Conheça alguns projetos feitos por mim',
      subtitleProjects: 'Projetos pessoais e profissionais.',
      titleAboutMe: 'Conheça mais sobre mim',
      subtitleAboutMe: 'De onde eu venho? Onde vivo? O que eu como?',
      buttonTitle: 'Clique aqui'
    },
    professionalExperiences: {
      header: 'Experiências',
      firstExp: 'ESTÁGIO DE PLANEJAMENTO DIGITAL - Paschoalotto',
      featureTitleFirstExp: 'Tratamento de Bases de Acionamento: ',
      featureSubtitleFirstExp: 'Responsável pela geração de banco de dados em excel através do R Studio para Agentes Virtuais e ChatBot',
      featureTitleFirstExp2: 'Reports de Produção:',
      featureSubtitleFirstExp2: 'Acompanhamento de produção HXH (Hora a Hora)',
      featureTitleFirstExp3: 'Acesso a acordos em BD:',
      featureSubtitleFirstExp3: 'Através do PgAdmin tenho acesso aos clientes que fecharam acordos e como isso ter uma análise de perfil ou cancelamento de boletos',
      featureSubtitleFirstExp4: 'Análise de Dashboards em Power BI',
      subtitleSecondExp: 'Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Gerenciamento e orientatções aos devs de como prosseguir com suas tarefas.',
      featuresTitleSecondExp: 'Projetos com:',
      footerSecondExp: 'Projetos ainda estão sendo desenvolvidos, logo serão incluídos ao meu portifólio'
    }

  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'ptBR', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n
