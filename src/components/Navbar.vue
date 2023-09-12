<script setup>

</script>

<template>
    <ul>
        <li>
            <v-icon name="la-home-solid" />
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <v-icon name="bi-person" />
            <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
            <v-icon name="md-librarybooks-outlined" />
            <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li>
            <v-icon name="hi-document-text" />
            <RouterLink to="/resume">Resume</RouterLink>
        </li>
        <li>
            <v-icon name="hi-mail" />
            <RouterLink to="/contact">Contact</RouterLink>
        </li>
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