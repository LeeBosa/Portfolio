<template>
    <div class="main">
        <MainPageNav/>
        <div class="project_list product"></div>
        <div class="copyright">
            {{'Copyright ' + new Date().getFullYear() + '. taedonn, all rights reserved.'}}
            <a href="https://github.com/taedonn/portfolio" target="_blank">Check this repository on GitHub</a>
        </div>
    </div>
</template>

<script>
    import MainPageNav from './MainPageNav.vue'

    export default {
        name: 'ProductPage',
        components: {
            MainPageNav
        },
        created() {
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
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

<style scoped>
    .product .project_img img {
        width: 80%;
    }
</style>