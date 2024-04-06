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
        <div class="About col">
            <div class="Content col">
                <div class="row AboutCard card1 first">15 to 20 minute playthrough</div>
                <div class="row AboutCard card2" style="margin-left: min(150px, 10vw);">Immersive & grounded tabletop gameplay, featuring diegetic systems and minimal UI.</div>
                <div class="row AboutCard card3" style="margin-right: min(150px, 10vw);">Unscripted rounds that offer unpredictable yet controllable outcomes, with a fair amount of replay value.</div>
                <div class="row AboutCard card4 last">A ruthless yet fair AI, that makes decisions based on what's on the table, rather than under it.</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card1::before,
.card2::after,
.card3::before,
.card4::after {
    display: inline-block;
    content: url('/public/media/icons/Clock.gif');
    height: 32px;
    width: 32px;
    background-size: contain;
    background-position: center;
}

.card2::after {
    content: url('/public/media/icons/Interaction.gif');
}

.card3::before {
    content: url('/public/media/icons/Controller.png');
}

.card4::after {
    content: url('/public/media/icons/Computer.gif');
}

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
    justify-content: space-around;
    background-color: rgb(20, 20, 20);
    background-image: url('/public/media/GetTheGameSection.gif');
    background-size: cover;
    background-blend-mode: difference;
}

.TrailerSection {
    background-image: url('/public/media/TrailerBackground.png');
    background-size: cover;
    height: 80vh;
    width: 100%;
}

.first {align-self: flex-start;}
.last {align-self: flex-end;}

.About {
    height: 60vh;
    padding: 50px 0px;
    width: 100%;
    background-image: url('/public/media/TrailerBackground.png');
    background-size: cover;
}

.Content  {
    gap: 20px;
    padding: 20px;
    width: 90%;

}

.AboutCard {
    font-size: var(--cardContentSize);
    background-color: var(--darkGreen);
    border: 2px solid black;
    padding: 15px 20px;
    color: white;
    border-radius: 15px;
    width: max(30vw, 300px);
    text-align: center;
    gap: 2px;
}
</style>