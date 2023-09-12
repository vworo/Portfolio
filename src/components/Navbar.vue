<script setup>

</script>

<template>
    <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/resume">Resume</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
</template>

<style scope>
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    li {
        margin: 2em;        
    }
</style>