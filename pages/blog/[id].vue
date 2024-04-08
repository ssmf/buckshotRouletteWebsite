<script setup>
const { id } = useRoute().params
</script>

<template>
<navbar></navbar>
    <div class="BlogPostWrapper col">
        <div class="BlogPost col">
            <h1 class="Heading">#{{ id }} Steam release is out now!!!</h1>
            <img class="HeaderImage" src="/public/media/NewsletterBackground.png">
            <p class="BlogContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem  lacus, fermentum a lacinia sed, porttitor ut est. Donec varius lacus  turpis. Cras velit risus, luctus id accumsan ac, hendrerit nec sem. Duis  tristique consectetur pretium. In vitae commodo felis, id consectetur  magna. Phasellus tincidunt sem ac turpis dapibus, id facilisis lacus  luctus. Mauris id mollis nisi.
        Vivamus laoreet leo eget orci mollis, auctor feugiat lacus semper.  Quisque id porta massa. Nam non nunc aliquam, feugiat ante sit amet,  iaculis leo. Morbi dignissim, ex vel lacinia tincidunt, metus lacus  pulvinar tortor, ac luctus ipsum nibh suscipit est. Maecenas in tell</p>
        </div>
    </div>  
<CustomFooter></CustomFooter>
</template>

<style scoped>
.BlogPostWrapper {
    width: 100%;
    min-height: 100vh;
    background-image: url('/public/media/FallingBullets.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    justify-content: flex-start;
}
.BlogPost {
    gap: 30px;
    width: 70%;
    text-align: center;
}
.Heading {
    font-size: 50px;
    color: white;
}
.HeaderImage {
    max-width: 150%;
}
.BlogContent {
    font-size: var(--cardContentSize);
    color: var(--gray);
}
</style>