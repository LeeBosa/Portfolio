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
        }
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

    #app {
        font-family: "Spoqa Han Sans Neo";
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -0.4px;
        word-break: keep-all;
        color: #333333;
        scroll-behavior: smooth;
    }
</style>
