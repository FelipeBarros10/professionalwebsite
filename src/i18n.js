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
      subtitleProjects: 'Personal and professional projects.'
    },
    professionalExperiences: {
      header: 'Experiences'
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
    professionalExperiences: {
      header: 'Experiências'
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
