<script setup>

</script>

<template>
    <ul>
        <li>
            <RouterLink to="/">
                <v-icon name="la-home-solid" color="darkorange" />
                Home
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/about">
                <v-icon name="md-personoutline" color="darkorange"/>
                About
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/projects">
                <v-icon name="md-librarybooks-outlined" color="darkorange" />
                Projects
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/resume">
                <v-icon name="hi-document-text" color="darkorange" />
                Resume
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/contact">
                <v-icon name="hi-mail" color="darkorange" />
                Contact
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color: rgba(36, 36, 36, 0.3);
        backdrop-filter: blur(6px);
        border-bottom: 1px solid #E2E8F0;
    }

    li {
        margin: 1em 2em;
    }

    svg {
        margin: 0em 0.5em;
    }
</style>