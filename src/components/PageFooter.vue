<script>
import { store } from '../store.js';
import LinksFooter from './LinksFooter.vue';
export default {
    name: "PageHeader",
    components: {
        LinksFooter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer id="container">
        <div class="row-footer">
            <div class="col">
                <img class="logo-footer"
                    src="https://github.com/DaveKnud/proj-html-vuejs/blob/main/avada-drivers-logo-1x.png?raw=true" alt="">
                <div>
                    <small class="grey">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odio voluptatum eius ullam laborum
                        quae
                        eum voluptates. Nobis facere doloribus, iure voluptates, placeat libero corporis ipsa, hic
                        repellendus
                        illum inventore.
                    </small>
                </div>
            </div>
            <div class="col">
                <h5>Contacts details</h5>
                <small class="grey">
                    <LinksFooter v-for=" link in store.linksContactDetails" :details="link" />
                </small>
            </div>
            <div class="col">
                <h5>Courses</h5>
                <small class="green">
                    <LinksFooter v-for=" link in store.linksCoursesFooter" :details="link" />
                </small>
            </div>
            <div>
                <img src="https://github.com/DaveKnud/proj-html-vuejs/blob/main/footer-ad-grid.png?raw=true" alt="">
                <div class="button">Book Now</div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
#container {
    padding-top: 70px;
    width: 100%;
    min-height: 400px;
    background-color: #373B3E;
    color: white;
    line-height: 25px;
}

.row-footer {
    display: flex;
    width: 70%;
    margin: 0 auto;
}

img {
    width: 200px;
    height: 200px;
}

img.logo-footer {
    width: 200px;
    height: 40px;
}
</style>
