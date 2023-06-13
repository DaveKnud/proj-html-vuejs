<script>
export default {
    name: "MenuLinks",
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="container-links">
        <h4>{{ details.link }}</h4>
    </div>
</template>

<style scoped lang="scss">
h4 {
    font-weight: 700;
    text-align: center;
}

img {
    width: 30px;
    height: 30px;
}
</style>


