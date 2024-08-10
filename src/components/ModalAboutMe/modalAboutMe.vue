<template>
  <div
    class="modal-overlay fixed inset-0 z-40 flex flex-col xl:flex-row items-center justify-center"
    v-if="modalAboutMeVisible"
    @click="closeModal"
    >
    <div class="header-bg-dark w-10/12 xl:w-8/12  my-10 rounded-lg px-6 py-8 flex  shadow-xl">
      <div class="flex flex-col justify-start xl:w-6/12 items-start">
        <h1 class="text-pink-600 xl:ml-8 text-base xl:text-3xl font-bold tracking-wide">
          Sobre mim
        </h1>

        <p class="xl:mx-10 text-gray-300 xl:mt-2 tracking-tight">Eu sou Felipe Ferreira de Barros, de Bauru, SP. Tenho uma paixão profunda por tecnologia, especialmente na área de front-end.
           Atualmente, estou estudando Sistemas de Informação e me dedicando a cursos e projetos extras para aprimorar minhas habilidades.
           Além dos meus estudos, trabalho como estagiário freelancer em  projetos com um desenvolvedor sênior,
           o que me permite aplicar na prática o que aprendo e explorar novas soluções.
           Estou sempre em busca de aprender mais e crescer profissionalmente, e esse equilíbrio entre estudo e prática é o que me motiva e me inspira.</p>
      </div>
      <div class="flex justify-center xl:w-6/12 items-center">
        <div class="flex flex-col xl:w-8/12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center justify-center p-2 shadow-2xl rounded-xl">
          <a target="_blank" href="https://hamburgueria-ycwm.vercel.app/"><img class="rounded" src="../../assets/images/eu.jpg" /></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalAboutMeVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3); /* Fundo escuro semi-transparente */
}
</style>
