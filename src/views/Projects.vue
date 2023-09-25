<script setup>

</script>

<template>
    <h2>Projects</h2>

    <div class="listing">
        <div class="text-content">
            <h3>GameCade</h3>
            <p>This is a drawing game app built with React and Firebase. It allows multiple users to chat, and to create and join lobbies, where they can then select a game mode, and start drawing or interacting with other users depending on the game mode.</p>
        </div>
        <div class="image-content">
            <img src="../assets/SSGameCade.png" alt="GameCade lobby page with chatbox open">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Beat Box</h3>
            <p>A web application that mimics the functionality of Spotify using Spotify's OAuth system. Users can authenticate with their Spotify accounts and access features such as browsing playlists, searching for songs, and playing music (click on a song to listen).</p>
        </div>
        <div class="image-content">
            <img src="../assets/SSBeatBox.png" alt="BeatBox Trending playlists page">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Armory</h3>
            <p>An app designed for police and military inventory management. Requires login to access database usage.</p>
        </div>
        <div class="image-content">
            <img src="../assets/SSArmory.png" alt="Armory ">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Tic Tac Toe</h3>
            <p>A computer recreation of the famous 'Tic Tac Toe' game. Player 1 is assigned 'x' and will always go first in a game. Click 'Settings' to change grid size.</p>
        </div>
        <div class="image-content">
            <img src="../assets/SSTicTacToe.png" alt="BeatBox Trending playlists page">
        </div>
    </div>
</template>

<style scoped>
    .listing {
        display: flex;
        margin: 2em;
    }

    .text-content { 
        text-align: left;
        width: 50%;
        padding: 2em;
    }

    .image-content {
        width: 50%;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media screen and (max-width: 600px) {
        .listing {
            display: block;
        }

        .text-content {
            align-items: center;
        }

        .image-content {
            width: 100%;
        }
    }
</style>