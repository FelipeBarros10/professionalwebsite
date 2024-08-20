<template>
  <div class="w-full header-bg-dark xl:mx-auto h-full xl:flex header-bg-dark">
    <div data-aos="fade-right" class="w-full xl:mx-auto xl:w-2/6 flex flex-col justify-center items-center">
      <h3 class="text-pink-600 font-bold text-3xl 2xl:text-5xl mr-12 2xl:mr-24 mt-10">{{ $t('aboutTheSite.title') }}</h3>
      <p class="text-gray-300 2xl:text-2xl mx-14 mt-3 mb-5">
        {{ $t('aboutTheSite.paragraph1') }}</p>

      <p class="text-gray-300 mx-14 2xl:text-2xl xl:mb-16">
        {{ $t('aboutTheSite.paragraph2') }}</p>
    </div>
    <div data-aos="fade-up" class="w-full xl:w-3/6 flex mt-10 flex-col justify-center items-center">
      <img class="w-full xl:w-10/12 mb-20" src="../assets/images/capa.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
