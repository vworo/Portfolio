<script setup>
    
</script>

<template>
    <object data="/Resume - LinkedIn.pdf" type="application/pdf">
        <img src="/Resume - LinkedIn.pdf" alt="Resume in pdf format">
    </object>
</template>

<style scoped>
    object {
        border-radius: 2em;
        border: 1px solid darkorange;
        width: 100%;
        height: 760px;
    }

    @media screen and (max-width: 600px) {
        object {
            height: 575px;
        }
    }
</style>