<template>
  <div
    class="modal-overlay fixed  inset-0 z-40 xl:grid xl:grid-cols-2 flex flex-col items-center justify-center"
    v-if="isModalProjectsVisible"
    @click="closeModal"
    >
    <div class="header-bg-dark-1 w-9/12 xl:w-4/6 mx-auto my-10 rounded-lg px-6 py-8  shadow-xl">
      <div class="flex justify-center items-center">
        <div class="flex flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center justify-center xl:w-2/6 p-2 bg-header-dark shadow-2xl rounded-xl">
          <a target="_blank" href="https://hamburgueria-ycwm.vercel.app/"><img class="w-44" src="../../assets/images/logo.png" /></a>
        </div>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-8 text-base xl:text-xl font-medium tracking-tight">
        Site Hamburgueria - Front End
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Realizei esse site com o intuito da prática e aprimoramento de habilidades.
      </p>
    </div>

    <div class="header-bg-dark-1 w-9/12 xl:w-4/6 mx-auto my-10 xl:ml-5 rounded-lg px-6 py-8 ring-1  shadow-xl">
      <div class="flex justify-center items-center">
        <div class="flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center justify-center p-8 xl:w-2/6 xl:p-6 2xl:py-7 2xl:px-8 bg-header-dark shadow-2xl rounded-xl">
          <a class="" target="_blank" href="https://layout-starbucks.vercel.app/"><img class="w-32 2xl:w-44 xl:w-full" src="../../assets/images/logostarbucks.png" /></a>
        </div>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-8 text-base xl:text-xl font-medium tracking-tight">
        Site Layout StarBucks - Front End
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Site criado no início dos meus estudos. Criei um layout de um site do starbucks
      </p>
    </div>

    <div class="header-bg-dark-1 w-9/12 xl:w-4/6 mx-auto my-10 rounded-lg px-6 py-8  shadow-xl">
      <div class="flex justify-center items-center">
        <div class="flex flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center justify-center xl:w-2/6 p-2 bg-header-dark shadow-2xl rounded-xl">
          <a target="_blank" href="https://hamburgueria-ycwm.vercel.app/"><img class="w-44" src="../../assets/images/logof.png" /></a>
        </div>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-8 text-base xl:text-xl font-medium tracking-tight">
        Site Profissional
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        O mesmo site que você está acessando neste momento.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalProjectsVisible: {
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
