<template>
  <index-header/>
  <educations-component/>
  <about-me-component/>
  <!-- <experiencies-component/> -->
</template>

<script>
import indexHeader from '@/components/headerComponent.vue'
import EducationsComponent from '@/components/educationsComponent.vue'
import aboutMeComponent from '@/components/aboutMeComponent.vue'
// import experienciesComponent from '@/components/experienciesComponent.vue'

export default {
  components: { indexHeader, EducationsComponent, aboutMeComponent }

}
</script>

<style>

</style>
