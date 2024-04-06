<script setup>

</script>

<template>
    <Navbar></Navbar>
    <div class="Main col">
        <img src="/public/media/Header.gif" class="HeaderImg">
        <div class="GetTheGame row">
            <img class="BigIcon" src="/public/media/Dealer.png">
            <div class="col">
                <h1>AVAILABLE ON STEAM NOW!</h1>
            <button>GET THE GAME</button>
            </div>
            <img class="BigIcon" src="/public/media/Contract.png" style="position: relative; top: 60%; rotate: 10deg;">
        </div>
        <div class="TrailerSection col">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BbKAIy1GFF4?si=X8x1pWpY5QOLi3cI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style scoped>
.HeaderImg {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: relative;
    z-index: 2;
}

.GetTheGame {
    width: 100%;
    padding: 20px 0px;
    position: relative;
    justify-content: space-around
}

.TrailerSection {
    background-image: url('/public/media/TrailerBackground.png');
    background-size: cover;
    height: 80vh;
    width: 100%;
}

</style>