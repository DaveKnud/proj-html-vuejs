<script>
export default {
    name: "PageMain",
}
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <div id="container">
        <!-- GET BEHIND THE WHEEL SECTION-->
        <section class="section-get-behind-the-wheel">
            <div class="text ">
                <h2> Get behind the Wheel</h2>
                <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus corrupti, laboriosam
                    quos amet atque
                    quo nobis possimus sed deserunt sit neque. Odit, deserunt? Accusantium tempore suscipit adipisci natus
                    aliquid.</p>
                <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet vitae voluptatem
                    distinctio
                    voluptate sequi saepe ut tempora nam, tempore nulla eaque libero eligendi alias iste dolor veritatis
                    quod
                    molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sunt soluta accusamus
                    totam
                    quidem quasi. Minus eligendi quas incidunt asperiores! Sit nihil perspiciatis quidem quis praesentium
                    sequi
                    ut possimus? Maxime.</p>
            </div>
            <div class="card">
                <h2 class=" green-text">First lesson free!</h2>
                <div class="card-body">
                    <small class="card-text" style="color: grey">When you make a block booking with us your first lesson is
                        included free!</small>
                    <input type="text" placeholder=" Your Name*" name="" id="">
                    <input type="text" placeholder=" Email*" name="" id="">
                    <input type="text" placeholder=" Telephone" name="" id="">
                    <input type="text" placeholder=" Location" name="" id="">
                </div>
                <div class="button-area">
                    <div class="button"> REQUEST A CALLBACK</div>
                </div>
            </div>
        </section>

        <!-- COURSES SECTION -->
        <section class="courses">
            <div class="row">
                <div class="start-learning-to-drive">
                    <div>
                        <h2>Start Learning to Drive Today</h2>
                        <strong>Give us a call to schedule your first driving lesson</strong>
                    </div>
                    <h2><i class="fa-solid fa-phone"></i> 1-800-555-555</h2>

                </div>
            </div>
        </section>



    </div>
</template>

<style scoped lang="scss">
#container {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 50px;
}

.section-get-behind-the-wheel {
    display: flex;
    justify-content: space-between;
    padding-left: 15%;
    padding-right: 15%;
}

.text {
    width: 45%;
}

.card {
    width: 45%;
    box-shadow: 1px 1px 5px 1px rgb(176, 176, 176);
    border: none;
    top: -100px;
}

.card-body {
    text-align: center;
}

input {
    width: 100%;
    margin-top: 30px;
    border-radius: 2px;
    border: 1px solid rgb(167, 167, 167);
    background-color: rgb(234, 234, 234);
    font-size: small;
    padding: 10px;
}

.green-text {
    text-align: center;
    color: #7ABC64;
}

h1 {
    font-weight: 700;
}

.icon i {
    color: black;
    background-color: aquamarine;
    font-size: 20px;
}

//COURSES
.start-learning-to-drive {
    width: 100%;
    height: 200px;
    color: white;
    background-image: url('../../public/img/horizontal-cta-background.jpg');
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
}
</style>