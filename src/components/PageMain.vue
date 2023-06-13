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
                    ut possimus? Maxime.
                </p>
            </div>
            <div class="card first-lesson">
                <h2 class=" green-text text-align-center">First lesson free!</h2>
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

        <!-- Start-learning-and-courses-section SECTION -->
        <section class="Start-learning-and-courses-section">
            <div class="row">
                <div class="start-learning-to-drive">
                    <div>
                        <h2>Start Learning to Drive Today</h2>
                        <strong>Give us a call to schedule your first driving lesson</strong>
                    </div>
                    <h3><i class="fa-solid fa-phone"></i> 1-800-555-555</h3>
                </div>
                <div class="courses">
                    <div class="card Start-learning-and-courses-section">
                        <h2 class="black-text text-align-center ">Courses</h2>
                        <div class="card-body">
                            <small class="grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus fugit
                                vel, vero dolore maiores quibusdam enim animi quidem quam excepturi. Ipsum quibusdam
                                suscipit aliquid? Hic nihil delectus soluta at blanditiis.</small>
                        </div>
                        <div class="button-area">
                            <div class="button"> REQUEST A CALLBACK</div>
                        </div>
                        <img class="green-corner" src="../../img/new-corner.jpg" alt="">
                    </div>
                    <div class="type-courses">
                        <div class="img-type-course-container">
                            <img src="../../img/courses-passplus-200x200.jpg" alt="">
                            <h5 class="azul text-align-center">Pass Plus</h5>
                            <div class="learn-more">LEARN MORE</div>
                        </div>
                    </div>
                    <div class="type-courses">
                        <div class="img-type-course-container">
                            <img src="../../img/course-intensive.jpg" alt="">
                            <h5 class="azul text-align-center">Instructors</h5>
                            <div class="learn-more">LEARN MORE</div>
                        </div>
                    </div>
                    <div class="type-courses">
                        <div class="img-type-course-container">
                            <img src="../../img/courses-instructor-400x400.jpg" alt="">
                            <h5 class="azul text-align-center">Intensive Course
                                <div class="learn-more">LEARN MORE</div>
                            </h5>
                        </div>
                    </div>
                </div>

                <!-- RATE SECTION -->
                <div class="rate-container ">
                    <div class="card rate-col text-align-center">
                        <div class="card-body">
                            <i class="fa-solid fa-circle-notch"></i>
                            <div class="percentage">95%</div>
                        </div>
                        <small><strong class="grey ">PASS RATE</strong></small>
                    </div>
                    <div class="card rate-col text-align-center">
                        <div class="card-body">
                            <i class="fa-regular fa-circle"></i>
                            <div class="percentage">100%</div>
                        </div>
                        <small><strong class="grey ">REFERRAL RTE</strong></small>
                    </div>
                    <div class="card rate-col text-align-center">
                        <div class="card-body">
                            <i class="fa-solid fa-circle-notch empty"></i>
                            <div class="percentage">0%</div>
                        </div>
                        <small><strong class="grey ">ACCIDENT RATE</strong></small>
                    </div>
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

.card.first-lesson {
    width: 45%;
    box-shadow: 1px 1px 5px 1px rgb(176, 176, 176);
    border: none;
    top: -80px;
    padding-top: 20px;
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
    color: #7ABC64;
}

.black-text {
    color: #000000;
}

h1 {
    font-weight: 700;
}

.icon i {
    color: black;
    background-color: aquamarine;
    font-size: 20px;
}

//Start-learning-and-courses-section
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

.courses {
    padding-left: 15%;
    padding-right: 15%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.card.Start-learning-and-courses-section {
    width: 30%;
    box-shadow: 1px 1px 5px 1px rgb(176, 176, 176);
    border: none;
    top: -25px;
    padding-top: 30px;
}

.green-corner {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
}

.img-type-course-container {
    width: 200px;
    height: 200px;
}

.img-type-course-container img {
    margin-top: 50px;
    max-width: 100%;
    min-height: 100%;
    margin-bottom: 15px;
}

//RATE SECTION
.rate-container {
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    gap: 10px;
}

.rate-col {
    width: calc(100% / 3);
    height: 300px;
    box-shadow: 1px 1px 5px 1px rgb(176, 176, 176);
    border: none;
    padding-top: 30px;
    padding-bottom: 50px;
}

.rate-container i,
.rate-container i.empty {
    font-size: 150px;
    color: #7ABC64;
    transform: rotate(-0.05turn);
    position: relative;
}

.rate-container i.empty {
    color: rgb(207, 207, 207);
    transform: rotate(0);
}

.percentage {
    position: absolute;
    font-size: 40px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 40%;
    left: 50%;
    color: gray;
}
</style>