<script setup>
    
</script>

<template>
    <object data="Resume - LinkedIn.pdf" type="application/pdf">
        <p>Your browser does not support PDFs.</p>
        <p>Instead you can <a href="Resume - LinkedIn.pdf" target="_blank" rel="noopener">click here to download the PDF file.</a></p>
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