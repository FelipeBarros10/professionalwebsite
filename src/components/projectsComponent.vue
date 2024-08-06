<template>
  <div class="bg-gray-300 flex flex-col justify-center items-center">
    <div>
      <h1>Conheça alguns projetos feitos por mim</h1>
      <button class="hover:bg-sky-700 transition-150 hover:text-white">Veja meu trabalho</button>
    </div>
    <div class="button_slide slide_right">
      <button class="text-xl">Clique aqui</button>
      <i class="bi bi-arrow-right xl:ml-2 text-xl"></i>
    </div>
    <!-- <div class=" header-bg-dark-1 my-10 w-10/12 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div class=" flex justify-center items-center">
        <span class="inline-flex items-center justify-center p-2 header-bg-dark shadow-2xl rounded-xl">
          <img src="../assets/images/logo.png" />
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Site Hamburgueria - Front End</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Realizei esse site com o intuito da prática e aprimoramento de habilidades.
      </p>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.button_slide {
  color: #FFF;
  border: 2px solid rgb(216, 2, 134);
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #D80286;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}

.button_slide:hover {
  box-shadow: inset 400px 0 0 0 #D80286;
}

</style>
