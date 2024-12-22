
<script setup lang="ts">
    useHead({
        title: 'My homepage',
        meta: [
            {
                name: 'description',
                content: 'This is the homepage of my site'
            }
        ]
    })

const nom = "ma couille"
</script>

<script lang="ts">
import '~/assets/css/index.css'
import 'animate.css'
</script>

<template>
    <div>
        <h1>Welcome to the homepage</h1>
        <h2>salut {{ nom }}</h2>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
    </div>
    <NuxtLink to="/about">Go to about</NuxtLink>
</template>