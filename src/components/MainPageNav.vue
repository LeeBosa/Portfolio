<template>
    <nav class="nav">
        <router-link to="/main/web" class="nav_link">
            <div>
                <div class="nav_logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>
                </div>
                <h2>프론트엔드 개발</h2>
            </div>
        </router-link>
        <router-link to="/main/product" class="nav_link">
            <div>
                <div class="nav_logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg>
                </div>
                <h2>제품 디자인</h2>
            </div>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'MainPageNav',
    }
</script>

<style scoped>
    .nav {
        width: 100%;
        padding: 12px 0;
        padding-top: 64px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #A3A3A3;
    }
    .nav_link {
        text-decoration: none;
        margin-right: 32px;
    }
    .nav_link:last-of-type {
        margin-right: 0px;
    }
    .nav_link > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav_link > div h2 {
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }
    .nav_logo {
        width: 28px;
        height: 28px;
        border: 1px solid #666;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
    }
    .nav_logo svg {
        width: 16px;
        height: 16px;
        fill: #666;
    }
</style>