<script setup>

</script>

<template>
<navbar></navbar>
    <div class="Blog">
        <a  v-for="i in 20" href="/" style="display: block; text-decoration: none">
            <div class="BlogCard col">
                <img class="CardImage" src="/public/media/NewsletterBackground.png">
                <h2 class="CardHeader">Steam release is out now!</h2>
                <p class="CardContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus dolorum, eaque culpa ipsum ea ab rerum porro officiis itaque a commodi reprehenderit, illo aperiam accusamus expedita nihil! Sequi, deleniti sapiente.</p>
            </div>
        </a>
    </div>
<customFooter></customFooter>
</template>

<style scoped>
.Blog {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    grid-auto-rows: 300px;
    gap: 30px;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-image: url('/public/media/FallingBullets.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 50px 100px;
}

.BlogCard {
    color: white;
    box-sizing: border-box;
    padding: 10px 20px;
    text-align: center;
    max-height: 300px;
    width: 400px;
    gap: 10px;
    border: 2px solid var(--red);
    border-radius: 20px;
    overflow: hidden;
    background-color: black;
    transition: .1s all ease-in-out;
    position: relative;
    top: 0px;
}

.BlogCard:hover {
    background-color: var(--darkRed);
    border: 2px solid black;
    cursor: pointer;
    top: 5px;
}

.CardHeader {
    font-size: 35px;
    text-shadow: 2px 2px 0px black;
}

.CardContent {
    color: var(--gray);
    font-size: var(--cardContentSize);
    max-width: 90%;
    overflow: hidden;
    text-shadow: 2px 2px 0px black;
}

.CardImage {
    width: 100%;
    border-radius: 10px;
    border: 2px solid black;
}
</style>