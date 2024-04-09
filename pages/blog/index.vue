<script setup>
const currentPage = ref(1)

const changeNum = (val) => {
    if (currentPage.value > 0 && val > 0 || currentPage.value > 1) {
        currentPage.value += val
    }
    query = groq`*[_type == 'post'] | order(_createdAt asc)[${currentPage.value * 6 - 6}..${currentPage.value * 6 + 5}]{
  heading,
    content,
    'imageUrl': image.asset->url,
      _createdAt
}`
allPosts.value = useLazySanityQuery(query)
    console.log(query)
}

let query = groq`*[_type == 'post'] | order(_createdAt asc)[${currentPage.value * 6 - 6}..${currentPage.value * 6 + 5}]{
  heading,
    content,
    'imageUrl': image.asset->url,
      _createdAt
}`

const allPosts = ref(useLazySanityQuery(query))

</script>

<template>
<navbar></navbar>
<div class="Blog col">
    <div class="BlogCards">
        <NuxtLink  v-for="(post, index) in allPosts.data.value" :key="JSON.stringify(post)" :to="'/blog/'+index" style="display: block; text-decoration: none">
            <div class="BlogCard col">
                <img class="CardImage" :src="post.imageUrl">
                <h2 class="CardHeader">{{ post.heading }}</h2>
                <p class="CardContent">{{ post.content.slice(0,30) }}...</p>
            </div>
        </NuxtLink>
    </div>
    <div class="PageSelector row">
            <button class="Left" @click="changeNum(-1)"><</button>
            <p style="color: white; font-size: 30px;">{{ currentPage }}</p>
            <button class="Right"@click="changeNum(1)">></button>
        </div>
</div>
<customFooter></customFooter>
</template>

<style scoped>

button {
    padding: 15px 50px;
}

.Left:active {
    top: 10px;
    left: 0px;
}

.Right:active {
    top: 10px;
    left: 10px;
}

.Blog {
    justify-content: space-between;
    background-image: url('/public/media/FallingBullets.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 20px;
    min-height: 85vh;
}

.BlogCards {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    grid-auto-rows: 320px;
    gap: 30px;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 20px 100px;
    height: 100%;
}

.BlogCard {
    color: white;
    box-sizing: border-box;
    padding: 10px 20px;
    text-align: center;
    height: fit-content;
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

.PageSelector {
    gap: 20px;
}

</style>