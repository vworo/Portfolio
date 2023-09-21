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
        <input type="text" name="user_name" placeholder="John Smith" required>

        <label>Email</label>
        <input type="email" name="user_email" placeholder="johnsmith@gmail.com" required>

        <label>Message</label>
        <textarea name="message" placeholder="Your really cool message goes here." required></textarea>

        <div class="controls">
            <button type="button" @click="clearForm">Clear</button>
            <button type="submit" value="Send">Submit</button>
        </div>

    </form>
</template>

<style scoped>
    form {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1em;
        border: solid 1px darkorange;
        border-radius: 3em;
        width: 50%;
        margin: 0 auto;
    }

    label {
        margin: 1em;
    }

    input, textarea {
        margin: 1em;
        padding: 0.25em;
        width: 90%;
        font-family: inherit;
        font-size: inherit;
    }

    textarea {
        height: 100px;
    }
    
    button {
        margin: 1em;
    }
</style>