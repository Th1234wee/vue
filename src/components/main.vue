<script setup>
    import {ref} from 'vue';
    import Button from "primevue/button";
    import 'primeicons/primeicons.css'
    const name = ref('click');
    const handleClick = () =>{
        name.value = "dbclick";
    }
</script>
<template>
    <div>
        <Button icon="pi pi-heart"  :label="name" @click="handleClick()"></Button>
        
    </div>
</template>
<style scoped>
    .p-button {
        background-color: blue;
    }
</style>