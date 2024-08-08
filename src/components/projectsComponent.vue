<template>
  <div class=" bg-gray-50 xl:py-20 xl:px-44 flex w-full flex-col xl:flex-row justify-center items-center">
    <modalProject :isModalProjectsVisible="isModalProjectsVisible" @close="closeModalProjects"/>
    <div class="w-10/12 xl:w-6/12 mt-10 xl:mt-0 py-10 xl:py-20 xl:px-24 2xl:py-32 2xl:px-32 px-14 bg-white justify-center items-center xl:items-start flex flex-col">
      <div data-aos="fade-up" data-aos-delay="300">
        <h1 class="font-bold text-pallete-150 text-2xl  2xl:text-4xl mb-5">
          Conheça alguns projetos feitos por mim
        </h1>
        <span class="text-purple-400 font-thin text-xl 2xl:text-2xl ml-1">
          Projetos pessoais e profissionais..
        </span>
      </div>
      <div @click="putTheModalProjectsVisible" class="button_slide w-full xl:w-9/12 2xl:w-8/12">
        <button  class="text-xl">
          Clique aqui
        </button>
        <i class="bi bi-arrow-right xl:ml-2 text-xl"></i>
      </div>
    </div>

    <div class="w-10/12 xl:w-6/12 border-t-2 xl:border-t-0 xl:border-l-2 xl:border-purple-100 border-purple-200 py-10 px-14 xl:py-20 xl:px-24 2xl:py-32 2xl:px-32 bg-white justify-center items-center xl:items-start flex flex-col">
      <div data-aos="fade-up" data-aos-delay="300">
        <h1 class="font-bold text-pallete-150 text-2xl 2xl:text-4xl mb-5">
          Conheça alguns projetos feitos por mim
        </h1>
        <span class="text-purple-400 font-thin text-xl 2xl:text-2xl ml-1">
          Projetos pessoais e profissionais..
        </span>
      </div>
      <div @click="putTheModalProjectsVisible" class="button_slide w-full xl:w-9/12 2xl:w-8/12">
        <button  class="text-xl">
          Clique aqui
        </button>
        <i class="bi bi-arrow-right xl:ml-2 text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import modalProject from './ModalProjects/modalProjects.vue'

export default {
  components: { modalProject },
  setup () {
    const isModalProjectsVisible = ref(false)

    function putTheModalProjectsVisible () {
      isModalProjectsVisible.value = true
    }

    function closeModalProjects () {
      isModalProjectsVisible.value = false
    }

    return {
      isModalProjectsVisible,
      putTheModalProjectsVisible,
      closeModalProjects
    }
  }
}
</script>

<style>
.button_slide {
  color: rgba(216, 2, 134, 0.61);
  border: 2px solid rgb(216, 2, 134);
  border-radius: 0px;
  padding: 8px 36px;
  display: inline-block;
  margin: 3rem 0px;
  font-family: "Lucida Console", Monaco, bold;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: ease-out 0.4s;
}

.button_slide:hover {
  box-shadow: inset 600px 0 0 0 #D80286;
  transition: ease-out 0.5s;
  color: #fff;
}

@media (min-width: 1028px) {
  .button_slide {
    text-align: center;
    padding: 10px 0px;
  }
}

@media (min-width: 1400px) {
  .button_slide {
    text-align: center;
    padding: 16px 0px;
  }
}
</style>
