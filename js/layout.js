$(document).ready(function(){
    // 도메인
        const url = window.location.href;

    // 페이지 설정
        // 페이지 분류
        const project = $(".project_wrap"); // 포트폴리오 페이지

    // vh값 업데이트 (모바일 주소창 대응)
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        window.addEventListener("resize", () => {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });

    // 폰트 로딩
        const fonts = [
            // Google Fonts API
            '<link rel="preconnect" href="https://fonts.googleapis.com">',
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',

            // Roboto
            '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="preload" type="text/css">',

            // Noto Sans KR
            '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="preload" type="text/css">',
        ]
        for (let i = 0; i < fonts.length; i++) { document.getElementsByTagName("head")[0].innerHTML += fonts[i]; }

    // 헤더 설정
        // 헤더 생성
        $("body").prepend(
            '<header>'
                +'<div class="header_inner">'
                    +'<ul class="gnb">'
                        +'<li><a class="gnb_menu" href="/index.html">프로젝트</a></li>'
                        +'<li><a class="gnb_menu" href="https://resume.taedonn.com" target="_blank">이력서</a></li>'
                        +'<li><a class="gnb_menu" href="https://github.com/taedonn" target="_blank">깃허브</a></li>'
                        +'<li><a class="gnb_menu" href="https://taedonn.tistory.com" target="_blank">블로그</a></li>'
                        +'<li><a class="gnb_menu" href="/sub/contacts.html">연락처</a></li>'
                    +'</ul>'
                +'</div>'
                +'<div class="header_inner_m">'
                    +'<div class="header_menu_btn">'
                        +'<input type="checkbox" id="header_menu_btn"/>'
                        +'<label for="header_menu_btn">'
                            +'<span></span>'
                            +'<span></span>'
                            +'<span></span>'
                        +'</label>'
                        +'<div class="header_menu_wrap">'
                            +'<div class="header_menu">'
                                +'<h2><a href="/index.html">프로젝트</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="https://resume.taedonn.com" target="_blank">이력서</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="https://github.com/taedonn" target="_blank">깃허브</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="https://taedonn.tistory.com" target="_blank">블로그</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/sub/contacts.html">연락처</a></h2>'
                                +'<span></span>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
            +'</header>'
        );

        // 헤더 - 모바일 메뉴 클릭 이벤트
        $("#header_menu_btn").on("click",function(){
            scrollTop = $(window).scrollTop();

            if($(this).is(":checked")){ // 펼치기
                $(".header_menu_wrap")
                .css("display","flex")
                .animate({"opacity":1});

                // 헤더 - 1080px 이하일 때 뒷배경 고정
                $("html")
                .addClass('hidden')
                .scrollTop(scrollTop);
            }
            else{ // 접기
                $(".header_menu_wrap").animate({"opacity":0},function(){
                    $(".header_menu_wrap").css("display","none");
                });

                // 헤더 - 1080px 이하일 때 뒷배경 고정 해제
                $("html")
                .removeClass('hidden')
                .scrollTop(scrollTop);
            }
        });

    // URL에 따라 다른 함수 실행
        // 메인 페이지
        if(url.includes("index.html")) {
            // 프로젝트 데이터 연동
            function init(sheetId, sheetName, divName) {
                let base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
                let query = encodeURIComponent('Select A,B,C,D,E,F,G');
                let url = `${base}&sheet=${sheetName}&tq=${query}`;
                let data = [];
    
                fetch(url)
                    .then(res => res.text())
                    .then(rep => {
                        // JSON만 추출
                        let jsonData = JSON.parse(rep.substring(47).slice(0, -2));
                        let jsonItem = jsonData.table.rows;
    
                        dataInit(divName, jsonItem);
                        dataLink(divName);
                    });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
    
            function dataInit(name, item) { // 데이터 로딩
                for(let i = item.length-1; i >= 0; i--) { // loop
                    $("."+name).append(
                        '<a href="'+item[i].c[6].v+'" target="_blank">'
                            +'<div class="project_item">'
                                +'<div class="img_wrap">'
                                    +'<img src="'+item[i].c[5].v+'" loading="lazy" alt="project '+name+' image '+i+'"/>'
                                +'</div>'
                                +'<div class="project_txt">'
                                    +'<h2>'+item[i].c[1].v+'</h2>'
                                    +'<h3>'+item[i].c[3].v+'</h3>'
                                    +'<span></span>'
                                +'</div>'
                            +'</div>'
                        +'</a>'
                    );
                }

                // 홀수인 경우 왼쪽 정렬
                if(item.length % 2 === 0){ $("."+name).append('<a></a>'); }
            }

            function dataLink(name) { // 링크가 없을 경우 현재창 유지
                $("."+name).find("a").each(function() {
                    if($(this).attr("href") == "#") {
                        $(this).attr("target","_self");
                    }
                });
            }

            $(window).resize(function(){ itemMargin(); });

            // 아이템 마진값 설정
            itemMargin();

            // 파라미터 값 반환
            pageType = getParameterByName("pageType");

            if(pageType == "1") { // "웹 디자인 / 개발" 클릭 시
                project.find(".web").show();
                project.find(".product").hide();
            }
            else if(pageType == "2") { // "제품 디자인" 클릭 시
                project.find(".web").hide();
                project.find(".product").show();
            }
            else { // 디폴트
                project.find(".web").show();
                project.find(".product").hide();
            }
        }

        // 연락처 페이지
        else if (url.includes("contacts.html")) { return; }

        // 메인 페이지
        else {
            // 프로젝트 데이터 연동
            function init(sheetId, sheetName, divName) {
                let base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
                let query = encodeURIComponent('Select A,B,C,D,E,F,G');
                let url = `${base}&sheet=${sheetName}&tq=${query}`;
                let data = [];
    
                fetch(url)
                    .then(res => res.text())
                    .then(rep => {
                        // JSON만 추출
                        let jsonData = JSON.parse(rep.substring(47).slice(0, -2));
                        let jsonItem = jsonData.table.rows;
    
                        dataInit(divName, jsonItem);
                        dataLink(divName);
                    });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
    
            function dataInit(name, item) { // 데이터 로딩
                for(let i = item.length-1; i >= 0; i--) { // loop
                    $("."+name).append(
                        '<a href="'+item[i].c[6].v+'" target="_blank">'
                            +'<div class="project_item">'
                                +'<div class="img_wrap">'
                                    +'<img src="'+item[i].c[5].v+'" loading="lazy" alt="project '+name+' image '+i+'"/>'
                                +'</div>'
                                +'<div class="project_txt">'
                                    +'<h2>'+item[i].c[1].v+'</h2>'
                                    +'<h3>'+item[i].c[3].v+'</h3>'
                                    +'<span></span>'
                                +'</div>'
                            +'</div>'
                        +'</a>'
                    );
                }

                // 홀수인 경우 왼쪽 정렬
                if(item.length % 2 === 0){ $("."+name).append('<a></a>'); }
            }

            function dataLink(name) { // 링크가 없을 경우 현재창 유지
                $("."+name).find("a").each(function() {
                    if($(this).attr("href") == "#") {
                        $(this).attr("target","_self");
                    }
                });
            }

            $(window).resize(function(){ itemMargin(); });

            // 아이템 마진값 설정
            itemMargin();

            // 파라미터 값 반환
            pageType = getParameterByName("pageType");

            if(pageType == "1") { // "웹 디자인 / 개발" 클릭 시
                project.find(".web").show();
                project.find(".product").hide();
            }
            else if(pageType == "2") { // "제품 디자인" 클릭 시
                project.find(".web").hide();
                project.find(".product").show();
            }
            else { // 디폴트
                project.find(".web").show();
                project.find(".product").hide();
            }
        }

        // 함수

            // 프로젝트 페이지
                function itemMargin() { // 아이템 마진값 설정
                    vw = project.find(".project_list").width() / 100;
                    if(window.innerWidth > 1080) { project.find(".project_item").parent("a").css("margin-bottom",vw * 0.5); }
                    else { project.find(".project_item").parent("a").css("margin-bottom",vw * 2); }
                }

                function getParameterByName(name) { // 파라미터 값 반환
                    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                }
});