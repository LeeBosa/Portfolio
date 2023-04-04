$(document).ready(function(){
    // 도메인
        const url = window.location.href;

    // 페이지 설정
        // 페이지 분류
        const project = $(".project_wrap"); // 포트폴리오 페이지
        const skill = $(".skill_wrap"); // 스킬 페이지

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

            // Spoqa Han Sans Neo
            '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/SpoqaHanSansNeo/SpoqaHanSansNeo.css" type="text/css"/>'
        ]
        for (let i = 0; i < fonts.length; i++) { document.getElementsByTagName("head")[0].innerHTML += fonts[i]; }

    // 헤더 설정
        // 헤더 생성
        $("body").prepend(
            '<header>'
                +'<div class="header_inner">'
                    +'<ul class="gnb">'
                        +'<li><a class="gnb_menu" href="/index.html">프로젝트</a></li>'
                        +'<li><a class="gnb_menu" href="/sub/skill.html">스킬</a></li>'
                        +'<li><a class="gnb_menu" href="https://resume.taedonn.com" target="_blank">이력서</a></li>'
                        +'<li><a class="gnb_menu" href="https://taedonn.tistory.com" target="_blank">블로그</a></li>'
                        +'<li><a class="gnb_menu" href="/sub/contacts.html">연락처</a></li>'
                    +'</ul>'
                +'</div>'
                +'<div class="header_inner_m">'
                    +'<a href="/index.html"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path class="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>'
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
                                +'<h2><a href="/sub/skill.html">스킬</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="https://resume.taedonn.com" target="_blank">이력서</a></h2>'
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

        // 스킬 페이지
        else if(url.includes("skill.html")) {
            // Body 태그 배경색 변경
            $("body").css("background-color","#000");

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
                    })
                    .then(() => { // Slick Slider 실행
                        $("."+divName)
                        .show()
                        .slick({
                            slidesToShow:3,
                            slidesToScroll: 1,
                            infinite: true,
                            arrows: false,
                            autoplay: true,
                            autoplayspeed: 200,
                            responsive: [
                                {
                                    breakpoint: 1080,
                                    settings: {
                                        slidesToShow: 2,
                                        autoplay: false
                                    }
                                },
                                {
                                    breakpoint: 720,
                                    settings: {
                                        slidesToShow: 1,
                                        autoplay: false
                                    }
                                }
                            ]
                        });
                    });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
    
            function dataInit(name, item) { // 데이터 로딩
                for(let i = item.length-1; i >= 0; i--) { // loop
                    $("."+name).append(
                        '<a href="'+item[i].c[6].v+'" target="_blank">'
                            +'<div class="skill_slide_item">'
                                +'<img src="'+item[i].c[5].v+'" loading="lazy" alt="skill page '+name+' image '+i+'"/>'
                            +'</div>'
                            +'<h2>'+item[i].c[1].v+'</h2>'
                            +'<h3>'+item[i].c[3].v+'</h3>'
                            +'<span></span>'
                        +'</a>'
                    );
                }
            }

            $(window).resize(function() { skill_scrollAnimCheck(); skill_itemMargin(); });
            $(window).scroll(function() { skill_scrollSetting(); });

            // '스크롤하기' 숨기기
            skill_scrollAnimCheck();

            // 스크롤하기 숨김 위치 설정
            skill_scrollSetting();

            // 아이템 마진값 설정
            skill_itemMargin();
        }

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

            // 스킬 페이지
                function skill_scrollAnimCheck() { // '스크롤하기' 숨기기
                    if(window.innerWidth > 1080) { $(".scroll_animation").show(); }
                    else { $(".scroll_animation").hide(); }
                }

                function skill_scrollSetting() { // 스크롤하기 숨김 위치 설정
                    scrollTop = $(window).scrollTop();
                    
                    if(scrollTop <= 0) { skill.find(".scroll_animation").removeClass("hide"); } // 맨위
                    else { skill.find(".scroll_animation").addClass("hide"); } // 맨위가 아닐 때
                }

                function skill_itemMargin() { // 아이템 마진값 설정
                    vw = skill.find(".skill_list").width() / 100;
    
                    if(window.innerWidth > 1080) { skill.find(".skill_web_box").css("margin-bottom",vw * 1.25); }
                    else { skill.find(".skill_web_box").css("margin-bottom",vw * 2.5); }
                }
});