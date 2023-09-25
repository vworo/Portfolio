<script setup>

</script>

<template>
    <h2>Projects</h2>

    <div class="listing">
        <div class="text-content">
            <h3>GameCade</h3>
            <p>This is a drawing game app built with React and Firebase. It allows multiple users to chat, and to create and join lobbies, where they can then select a game mode, and start drawing or interacting with other users depending on the game mode.</p>
            <a href="https://gamecade-react.web.app/" target="_blank" rel="noopener">
                <button>Live Site</button>
            </a>
            <a href="https://github.com/vworo/GameCade-Client-React" target="_blank" rel="noopener">
                <button>Github</button>
            </a>
        </div>
        <div class="image-content">
            <img src="../assets/SSGameCade.png" alt="GameCade lobby page with chatbox open">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Beat Box</h3>
            <p>A web application that mimics the functionality of Spotify using Spotify's OAuth system. Users can authenticate with their Spotify accounts and access features such as browsing playlists, searching for songs, and playing music (click on a song to listen).</p>
            <a href="https://boxbeats.netlify.app/" target="_blank" rel="noopener">
                <button>Live Site</button>
            </a>
            <a href="https://github.com/vworo/Beat-Box" target="_blank" rel="noopener">
                <button>Github</button>
            </a>
        </div>
        <div class="image-content">
            <img src="../assets/SSBeatBox.png" alt="BeatBox Trending playlists page">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Armory</h3>
            <p>An app designed for police and military inventory management. Requires login to access database usage.</p>
            <a href="https://armory.fly.dev/" target="_blank" rel="noopener">
                <button>Live Site</button>
            </a>
            <a href="https://github.com/vworo/Armory" target="_blank" rel="noopener">
                <button>Github</button>
            </a>
        </div>
        <div class="image-content">
            <img src="../assets/SSArmory.png" alt="Armory app showcasing sample data">
        </div>
    </div>

    <div class="listing">
        <div class="text-content">
            <h3>Tic Tac Toe</h3>
            <p>A computer recreation of the famous 'Tic Tac Toe' game. Player 1 is assigned 'x' and will always go first in a game. Click 'Settings' to change grid size.</p>
            <a href="https://vworo.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener">
                <button>Live Site</button>
            </a>
            <a href="https://github.com/vworo/Tic-Tac-Toe" target="_blank" rel="noopener">
                <button>Github</button>
            </a>
        </div>
        <div class="image-content">
            <img src="../assets/SSTicTacToe.png" alt="Tic tac toe game grid screen">
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
        border: solid 1px darkorange;
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