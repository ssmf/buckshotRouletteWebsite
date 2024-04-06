<script setup>
const email = ref('')
const SubmitForm = () => {
    if (email.value == '') {
        console.log('empty email!')
    } else {
        console.log(email.value)
    }
}
</script>

<template>
<form class="row" style="gap: 5px;" @submit.prevent="SubmitForm">
    <input v-model="email" type="email" placeholder="email@example.com" />
    <button type="submit">✓</button>
</form>
</template>

<style scoped>
input {
    background-color: var(--green);
    border: 2px solid black;
    font-size: 20px;
    padding: 10px 5px;
    border-radius: 15px;
    transition: .1s all ease-in-out;
    outline: none;
}

input:focus {

  outline: solid 2px var(--red);
}

button {
    padding: 10px 15px;
    font-size: 15px;
    background-color: var(--darkRed);
    color: white;
}

button:hover {
    top: 2px;
    left: 2px;
}
</style>