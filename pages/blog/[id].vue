<script setup>
const { id } = useRoute().params

const { data } = await useSanityQuery(groq`*[_type == 'post'] | order(_createdAt asc)[${id}]{
  heading,
    content,
    'imageUrl': image.asset->url,
      _createdAt
}`)
</script>

<template>
<navbar></navbar>
    <div class="BlogPostWrapper col">
        <div class="BlogPost col">
            <h1 class="Heading">#{{ Number(id)+1 }} {{ data.heading }}</h1>
            <img class="HeaderImage" :src="data.imageUrl">
            <p class="BlogContent">{{ data.content }}</p>
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
    max-width: 70%;
}
.BlogContent {
    font-size: var(--cardContentSize);
    color: var(--gray);
}
</style>