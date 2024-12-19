<script setup>
    import { ref } from 'vue';
    import emailjs from '@emailjs/browser';

    const contactForm = ref(null);
    let submitMessage = ref(null);

    const clearFormAndMessage = () => {
        console.log('Form and message cleared.');
        contactForm.value.reset();
        submitMessage.value = null;
    };

    const sendEmail =() => {
        emailjs.sendForm('contact_service', 'contact_form', 'form', import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
            .then((result) => {
                clearFormAndMessage();
                submitMessage.value = "Message sent successfully!";
                console.log('SUCCESS!', result.text);
            }, (error) => {
                clearFormAndMessage();
                submitMessage.value = "Something went wrong.";
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
            <button type="reset">Clear</button>
            <button type="submit" value="Send">Submit</button>
        </div>

    </form>
    <p id="emailjs-submit-message">{{ submitMessage }}</p>
</template>

<style scoped>
    form {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 2em;
        border: solid 1px darkorange;
        border-radius: 3em;
        width: 75%;
        margin: 0 auto;
    }

    label {
        display: block;
    }

    input, textarea {
        margin: 1em;
        padding: 0.25em;
        width: 80%;
        font-family: inherit;
        font-size: inherit;
    }

    textarea {
        height: 100px;
    }
    
    button {
        margin: 0.5em;
    }
</style>