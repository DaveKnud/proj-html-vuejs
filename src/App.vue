<script>
import axios from 'axios';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  }
}
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang ="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>