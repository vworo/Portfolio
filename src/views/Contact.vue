<script setup>
    import { ref } from 'vue';
    import emailjs from '@emailjs/browser';

    const contactForm = ref(null);

    const clearForm = () => {
        console.log('Form cleared.');
        contactForm.value.reset();
    };

    const sendEmail =() => {
        emailjs.sendForm('contact_service', 'contact_form', 'form', import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                clearForm();
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };
</script>

<template>
    <form @submit.prevent="sendEmail" ref="contactForm">

        <label>Name</label>
        <input type="text" name="user_name">

        <label>Email</label>
        <input type="email" name="user_email">

        <label>Message</label>
        <textarea name="message"></textarea>

        <div class="controls">
            <button type="button" @click="clearForm">Clear</button>
            <button type="submit" value="Send">Submit</button>
        </div>
    </form>
</template>

<style scope>
    form {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1em;
        border-radius: 3em;
        width: 50vw;
    }

    label {
        margin: 1em;
        display: block;
    }

    input, textarea {
        margin: 1em;
        width: 90%;
    }

    button {
        margin: 1em;
    }
</style>