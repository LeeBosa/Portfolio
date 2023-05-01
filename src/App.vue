<template>
    <div id="app">
        <HeaderPage/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderPage from './components/HeaderPage.vue';

    export default {
        name: 'App',
        components: {
            HeaderPage,
        },
        created() {
            loadFonts()
        }
    }

    const fonts = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/SpoqaHanSansNeo/SpoqaHanSansNeo.css" type="text/css"/>'
    function loadFonts () {
        document.head.innerHTML += fonts;
    }
</script>

<style>
    /* 리셋 */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    input {
        border: none;
        outline: none;
        background-color: transparent;
    }

    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    #app {
        font-family: "Spoqa Han Sans Neo";
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -0.4px;
        word-break: keep-all;
        color: #333;
        scroll-behavior: smooth;
    }

    body.hidden {
        height: 100%;
        overflow: hidden;
        touch-action: none;
    }

    /* 스크롤바 */
    body::-webkit-scrollbar {
        width: 16px;
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: #555;
    }

    body::-webkit-scrollbar-thumb:hover {
        background-color: #777;
    }

    body::-webkit-scrollbar-track {
        background-color: #333;
    }
</style>
