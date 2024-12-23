<script setup lang="ts">
    //list all files using api /api/list-articles
    const { data } = await useFetch('/api/getarticles')
    const articles = data
</script>

<template>
    <NuxtLayout> 
        <h1>Hello in the article section</h1>
        <ul>
            <li v-for="article in articles" :key="article.title">
                {{ article.title }}
                <img :src="article.picture" alt="article.title" height="30"/>
                <a :href="article.path">Read</a>
            </li>
        </ul>
    </NuxtLayout>
</template>