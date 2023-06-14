<script>
export default {
    name: "LinksFooter",
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="container-links">
        <div>{{ details.link }}</div>
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


