<script>
import { store } from '../store.js';
import MenuLinks from './MenuLinks.vue';


export default {
  name: "PageHeader",
  components: {
    MenuLinks,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header id="container-header">
    <div class="call-us">
      <div>We have a 95% Succesful Pass Rate!</div>
      <div><i class="fa-solid fa-phone"> </i> Give us a call to book your tuition! 1-800-555-555</div>
    </div>
    <div id="row">
      <nav id="nav">
        <div class="logo">
          <img src="../../public/img/avada-drivers-logo-1x.png" alt="">
        </div>
        <MenuLinks v-for=" link in store.links" :details="link" />
        <img src="../../public/img/hover-button1.png" alt="">
      </nav>
      <div class="drive-with-avada">
        <h1>Drive With Avada</h1>
        <div>We offer the finest driving tuition money can buy</div>
      </div>

    </div>

  </header>
</template>

<style scoped lang="scss">
#container-header {
  width: 100%;
  min-height: 700px;
  background-image: url('../../public/img/homepage-hero-background.jpg');
  background-size: cover;
  color: white;
}

.call-us {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #353637;
  color: grey;
  font-size: small;
  padding-left: 15%;
  padding-right: 15%;
}

#row {
  width: 100%;

}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  background-color: rgba($color: #000000, $alpha: 0.35);
  padding-left: 15%;
  padding-right: 15%;
}

.drive-with-avada {
  width: 100%;
  height: 450px;
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 250%;
  padding-left: 15%;
  padding-right: 15%;

}

img {
  min-height: 100%;
}
</style>


