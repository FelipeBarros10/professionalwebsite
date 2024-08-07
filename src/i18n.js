import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      imFelipeBarros: 'I\'M FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Looking for the first opportunity '
    },
    experiencies: {
      title: 'Companies that i helped with my expertise',
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

    }

  },
  ptBR: {
    header: {
      imFelipeBarros: 'OI, SOU FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Procurando a primeira oportunidade'
    },
    experiencies: {
      title: 'Empresas que ajudei com meu expertise',
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
