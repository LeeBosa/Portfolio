<template>
    <div class="main">
        <MainPageNav/>
        <div class="project_list web"></div>
        <div class="copyright">
            {{'Copyright ' + new Date().getFullYear() + '. taedonn, all rights reserved.'}}
            <a href="https://github.com/taedonn/portfolio" target="_blank">Check this repository on GitHub</a>
        </div>
    </div>
</template>

<script>
    import MainPageNav from './MainPageNav.vue'

    export default {
        name: 'MainPage',
        components: {
            MainPageNav
        },
        created() {
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
        }
    }

    // 데이터 연동
    function init(sheetId, sheetName, name) {
        let base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
        let query = encodeURIComponent('Select A,B,C,D,E,F,G');
        let url = `${base}&sheet=${sheetName}&tq=${query}`;

        fetch(url)
            .then(res => res.text())
            .then(rep => {
                // JSON만 추출
                let data = JSON.parse(rep.substring(47).slice(0, -2));
                let item = data.table.rows;

                // 데이터 로딩
                load(name, item);
            });
    }

    // 데이터 로딩
    function load(name, item) {
        for(let i = item.length-1; i >= 0; i--) { // loop
            document.getElementsByClassName(name)[0].innerHTML += 
                `<a class="project_item_wrap" href="` + item[i].c[6].v + `" target="_blank">
                    <div class="project_item">
                        <div class="project_img">
                            <img src="` + item[i].c[5].v + `" alt="project ` + name + ` image ` + i + `"/>
                        </div>
                        <div class="project_txt">
                            <h2>` + item[i].c[1].v + `</h2>
                            <h3>` + item[i].c[3].v + `</h3>
                            <span></span>
                        </div>
                    </div>
                </a>`
        }

        // 데이터가 홀수일 때 빈 박스 추가
        if (item.length % 2 === 0) { document.getElementsByClassName(name)[0].innerHTML += '<a class="project_item_wrap project_item_wrap_empty"></a>'; }
    }
</script>

<style>
    .project_list {
        width: 100%;
        padding: 20px;
        padding-bottom: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: stretch;
    }
    .project_list .project_item_wrap {
        width: calc(33.3% - 5px);
        display: block;
        margin-top: 10px;
        color: #3A3A3A;
    }
    .project_list .project_item_wrap_empty {
        margin-top: 0;
    }
    .project_list .project_item_wrap:nth-of-type(1) { margin-top: 0; }
    .project_list .project_item_wrap:nth-of-type(2) { margin-top: 0; }
    .project_list .project_item_wrap:nth-of-type(3) { margin-top: 0; }
    .project_item {
        width: 100%;
        height: 100%;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        background-color: #F9F9F9;
    }
    .project_img {
        width: 100%;
        height: 340px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .project_img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
        transition: 0.4s;
    }
    .project_txt {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .project_txt h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 4px;
    }
    .project_txt h3 {
        font-size: 16px;
        font-weight: 300;
        padding-bottom: 0px;
        margin-bottom: 12px;
        color: #999;
    }
    .project_txt span {
        display: block;
        width: 10%;
        height: 1px;
        background-color: #bbb;
        transition: 0.4s;
    }
    @media (hover: hover) and (pointer: fine) {
        .project_item:hover img {
            transform: scale(1.025);
        }
        .project_item:hover .project_txt span {
            width: 100%;
        }
    }

    @media screen and (max-width: 1080px) {
        .project_list {
            padding: 16px;
            padding-bottom: 0;
        }
        .project_list .project_item_wrap {
            width: calc(50% - 5px);
        }
        .project_list .project_item_wrap:nth-of-type(3) {
            margin-top: 10px;
        }
        .project_item {
            padding: 28px;
        }
        .project_img {
            height: 240px;
            margin-bottom: 16px;
        }
        .project_txt h2 {
            font-size: 18px;
            margin-bottom: 0;
        }
        .project_txt h3 {
            font-size: 14px;
            margin-bottom: 8px;
        }
    }

    @media screen and (max-width: 720px) {
        .project_item {
            padding: 20px;
        }
        .project_img {
            height: 200px;
            margin-bottom: 12px;
        }
        .project_txt h2 {
            font-size: 16px;
        }
        .project_txt h3 {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 480px) {
        .project_list {
            padding: 12px;
            padding-bottom: 0;
        }
        .project_list .project_item_wrap {
            width: 100%;
        }
        .project_list .project_item_wrap:nth-of-type(2) {
            margin-top: 10px;
        }
        .project_item {
            padding: 16px;
        }
        .project_img {
            height: 300px;
            margin-bottom: 12px;
        }
        .project_txt h3 {
            margin-bottom: 4px;
        }
    }

    /* Copyright */
    .main .copyright {
        width: 100%;
        padding: 32px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        letter-spacing: 0;
        color: rgba(0, 0, 0, 0.6);
    }
    .main .copyright a {
        display: inline-block;
        border-bottom: 1px solid rgba(0, 0, 0, 0.6);
        color: rgba(0, 0, 0, 0.6);
    }
    @media screen and (max-width: 1080px) {
        .main .copyright {
            padding: 24px 0;
            font-size: 12px;
        }
    }
</style>
