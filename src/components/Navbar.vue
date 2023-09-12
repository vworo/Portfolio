<script setup>

</script>

<template>
    <ul>
        <li>
            <v-icon name="la-home-solid" color="darkorange" />
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <v-icon name="bi-person" color="darkorange" scale="1.25"/>
            <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
            <v-icon name="md-librarybooks-outlined" color="darkorange" />
            <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li>
            <v-icon name="hi-document-text" color="darkorange" />
            <RouterLink to="/resume">Resume</RouterLink>
        </li>
        <li>
            <v-icon name="hi-mail" color="darkorange" />
            <RouterLink to="/contact">Contact</RouterLink>
        </li>
    </ul>
</template>

<style scope>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color: rgba(36, 36, 36, 0.3);
        backdrop-filter: blur(6px);
    }

    li {
        margin: 1em 2em;        
    }
</style>