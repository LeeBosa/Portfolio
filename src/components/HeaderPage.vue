<template>
    <header>
        <div class="header">
            <nav class="gnb">
                <router-link to="/" class="gnb_menu">프로젝트</router-link>
                <router-link to="/contacts" class="gnb_menu">문의하기</router-link>
                <a class="gnb_menu" href="https://github.com/taedonn" target="_blank">깃허브</a>
                <a class="gnb_menu" href="https://resume.taedonn.com" target="_blank">이력서</a>
                <a class="gnb_menu" href="https://taedonn.tistory.com" target="_blank">블로그</a>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderPage',
    }

    const fonts = [
        // Spoqa Han Sans Neo
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/SpoqaHanSansNeo/SpoqaHanSansNeo.css" type="text/css"/>',
    ]
    for (let i = 0; i < fonts.length; i++) { document.getElementsByTagName("head")[0].innerHTML += fonts[i]; }
</script>

<script setup>
    
</script>

<style scoped>
    header {
        width: 100%;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.8);
    }
    .header {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .gnb {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .gnb_menu {
        width: 180px;
        height: 100%;
        display: block;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        opacity: 0.8;
        color: #FFF;
    }
</style>
