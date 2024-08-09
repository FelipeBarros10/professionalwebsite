<template>
  <div
    class="modal-overlay fixed inset-0 z-40 flex flex-col xl:flex-row items-center justify-center"
    v-if="modalAboutMeVisible"
    @click="closeModal"
    >
    <div class="header-bg-dark w-10/12 xl:w-1/3 my-10 rounded-lg px-6 py-8 flex  shadow-xl">
      <div class="flex justify-center items-center">
        <div class="flex flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center justify-center  p-2 shadow-2xl rounded-xl">
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
