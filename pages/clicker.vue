<script setup lang="ts" >
    const count = useState('counter',() => 0)
    const inct = () => count.value++

    const val = $fetch('/api/test')

    // auto increment 
    onNuxtReady(() => {
        setInterval(() => count.value++, 1000)
    })
</script>

<template>
    <div>
        <h1>Clicker</h1>
        <p>Count: {{ count }}</p>
        <button @click="inct">Increment</button>
    </div>
</template>