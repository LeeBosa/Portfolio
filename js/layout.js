$(document).ready(function(){
    // 도메인
        const url = window.location.href;
        const domain = window.location.host;
        const githubName = "taedonn"
        const repositoryName = "portfolio"

    // 페이지 설정
        // 페이지 분류
        const index = $(".index_wrap"); // 메인 페이지
        const aboutme = $(".aboutme_wrap"); // 소개 페이지
        const project = $(".project_wrap"); // 포트폴리오 페이지
        const skill = $(".skill_wrap"); // 스킬 페이지

    // vh값 업데이트 (모바일 주소창 대응)
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        window.addEventListener("resize", () => {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });

    // 헤더 설정
        // 헤더 생성
        $("body").prepend(
            '<header>'
                +'<div class="header_inner fade_down">'
                    +'<ul class="gnb gnb_left">'
                        +'<li><a class="gnb_menu" href="/'+repositoryName+'/sub/project.html">프로젝트</a></li>'
                        +'<li><a class="gnb_menu" href="/'+repositoryName+'/sub/skill.html">스킬</a></li>'
                    +'</ul>'
                    +'<a href="/'+repositoryName+'/index.html"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path class="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>'
                    +'<ul class="gnb gnb_right">'
                        +'<li><a class="gnb_menu" href="https://'+githubName+'.github.io/resume" target="_blank">이력서</a></li>'
                        +'<li><a class="gnb_menu" href="/'+repositoryName+'/sub/contacts.html">연락처</a></li>'
                    +'</ul>'
                +'</div>'
                +'<div class="header_inner_m">'
                    +'<a href="/'+repositoryName+'/index.html"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path class="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>'
                    +'<div class="header_menu_btn">'
                        +'<input type="checkbox" id="header_menu_btn"/>'
                        +'<label for="header_menu_btn">'
                            +'<span></span>'
                            +'<span></span>'
                            +'<span></span>'
                        +'</label>'
                        +'<div class="header_menu_wrap">'
                            +'<div class="header_menu">'
                                +'<h2><a href="/'+repositoryName+'/sub/project.html">프로젝트</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/'+repositoryName+'/sub/skill.html">스킬</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="https://'+githubName+'.github.io/resume" target="_blank">이력서</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/'+repositoryName+'/sub/contacts.html">연락처</a></h2>'
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
                        dataBtn(divName);
                    })
                    .then(() => { projectCheck(); });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
    
            function dataInit(name, item) {
                var linkTarget;

                for(let i = item.length-1; i >= item.length-3; i--) { // 마지막에서 3번째까지 loop
                    if(item[i].c[4].v == "null") { item[i].c[4].v = ""; }
                    if(item[i].c[6].v != "#") { linkTarget = "_blank"; }
                    else { linkTarget = "_self"; }

                    $('.index_project_'+name).append(
                        '<a href="'+item[i].c[6].v+'" target="'+linkTarget+'">'
                            +'<div class="index_project_web_1">'
                                +'<div class="index_project_web_left">'
                                    +'<img src='+item[i].c[5].v+'>'
                                +'</div>'
                                +'<div class="index_project_web_right">'
                                    +'<h2 style="color:'+item[i].c[2].v+'">'+item[i].c[1].v+'</h2>'
                                    +'<h3>'+item[i].c[3].v+'</h3>'
                                    +'<span></span>'
                                    +'<h4>'+item[i].c[4].v+'</h4>'
                                +'</div>'
                            +'</div>'
                        +'</a>'
                    );
                }
            }

            function dataBtn(name) {
                if(name == "web") {
                    $(".index_project_"+name).append(
                        '<a class="btn_two" href="./sub/project.html?pageType=1">'
                            +'<span>프로젝트 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "product") {
                    $(".index_project_"+name).append(
                        '<a class="btn_two" href="./sub/project.html?pageType=2">'
                            +'<span>프로젝트 더보기</span>'
                        +'</a>'
                    );
                }
            }

            // 윈도우 리사이징
            $(window).resize(function() { projectCheck(); });

            // 스크롤바 가리기
            idxBodyWidth();

            // 로딩 완료 시 인트로 페이드인
            introFadeIn();

            // 프로젝트 라디오버튼 클릭 이벤트
            $("input[name=project_skill]").on("click",function() { projectCheck(); });
        }

        // 프로젝트 페이지
        else if(url.includes("project.html")) {
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
                        dataAlign(divName, jsonItem);
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
                                    +'<img src="'+item[i].c[5].v+'"/>'
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
            }

            function dataAlign(name, item) { // 홀수인 경우 왼쪽 정렬
                if(item.length % 2 != 0){ $("."+name).append('<a></a>'); }
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
                                +'<img src="'+item[i].c[5].v+'"/>'
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

        // 소개 페이지
        else if(url.includes("aboutme.html")) {
            function aboutMe_scrollAnimCheck() { // '스크롤하기' 숨기기
                if(window.innerWidth > 1080) { $(".scroll_animation").show(); }
                else { $(".scroll_animation").hide(); }
            }

            function aboutMe_scrollSetting() { // '스크롤하기' 숨기는 위치 설정
                scrollTop = $(window).scrollTop();
                profileTop = $(".profile").offset().top;

                if(window.innerWidth > 1080) { // PC에서
                    if(scrollTop <= 0) { // 맨위
                        aboutme.find(".scroll_animation").removeClass("hide");
                        aboutme.find(".profile").removeClass("show");
                    }
                    else { // 맨위가 아닐 때
                        aboutme.find(".scroll_animation").addClass("hide");
                        aboutme.find(".profile").addClass("show");
                    }
        
                    if(profileTop > scrollTop) { // 프로필이 화면보다 위에 있을 때
                        aboutme.find(".profile_img_wrap")
                        .removeClass("fixed")
                        .removeClass("bottom");
                    }
                    else if(profileTop <= scrollTop) { // 프로필이 화면보다 아래에 있을 때
                        aboutme.find(".profile_img_wrap")
                        .removeClass("bottom")
                        .addClass("fixed");
                    }
                    else { // 그 외에
                        aboutme.find(".profile_img_wrap")
                        .removeClass("fixed")
                        .addClass("bottom");
                    }
                }
                else { // PC 이외에
                    aboutme.find(".profile_img_wrap")
                    .removeClass("fixed")
                    .removeClass("bottom");
                }
            }

            $(window).resize(function() {  aboutMe_scrollAnimCheck(); });
            $(window).scroll(function() { aboutMe_scrollSetting(); });

            // '스크롤하기' 숨기기
            aboutMe_scrollAnimCheck();

            // '스크롤하기' 숨기는 위치 설정
            aboutMe_scrollSetting();
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
                        dataBtn(divName);
                    })
                    .then(() => { projectCheck(); });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
    
            function dataInit(name, item) {
                var linkTarget;

                for(let i = item.length-1; i >= item.length-3; i--) { // 마지막에서 3번째까지 loop
                    if(item[i].c[4].v == "null") { item[i].c[4].v = ""; }
                    if(item[i].c[6].v != "#") { linkTarget = "_blank"; }
                    else { linkTarget = "_self"; }

                    $('.index_project_'+name).append(
                        '<a href="'+item[i].c[6].v+'" target="'+linkTarget+'">'
                            +'<div class="index_project_web_1">'
                                +'<div class="index_project_web_left">'
                                    +'<img src='+item[i].c[5].v+'>'
                                +'</div>'
                                +'<div class="index_project_web_right">'
                                    +'<h2 style="color:'+item[i].c[2].v+'">'+item[i].c[1].v+'</h2>'
                                    +'<h3>'+item[i].c[3].v+'</h3>'
                                    +'<span></span>'
                                    +'<h4>'+item[i].c[4].v+'</h4>'
                                +'</div>'
                            +'</div>'
                        +'</a>'
                    );
                }
            }

            function dataBtn(name) {
                if(name == "web") {
                    $(".index_project_"+name).append(
                        '<a class="btn_two" href="./sub/project.html?pageType=1">'
                            +'<span>프로젝트 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "product") {
                    $(".index_project_"+name).append(
                        '<a class="btn_two" href="./sub/project.html?pageType=2">'
                            +'<span>프로젝트 더보기</span>'
                        +'</a>'
                    );
                }
            }

            // 윈도우 리사이징
            $(window).resize(function() { projectCheck(); });

            // 스크롤바 가리기
            idxBodyWidth();

            // 로딩 완료 시 인트로 페이드인
            introFadeIn();

            // 포트폴리오 라디오버튼 클릭 이벤트
            $("input[name=project_skill]").on("click",function() { projectCheck(); });
        }

        // 함수

            // 메인 페이지
                function deviceCheck() { // PC/모바일 구분
                    let filter = "win16|win32|win64|mac|macintel";
                    if (0 > filter.indexOf(navigator.platform.toLowerCase())) { return "Mobile"; }
                    else { return "PC"; }
                }

                function idxBodyWidth() { // 스크롤바 가리기
                    if (deviceCheck() == "PC") { document.getElementById("indexBody").style.width = "calc(100% + 18px)"; }
                    else { document.getElementById("indexBody").style.width = "100%" }
                }

                function introFadeIn(){ // 로딩 완료 시 인트로 페이드인
                    index.find(".opacity_wrap").animate({ opacity: 0 },1000,function(){index.find(".opacity_wrap").css("z-index","-1");});
                }

                function projectCheck(){ // 포트폴리오 라디오버튼 체크 이벤트
                    indexProjectHeight = index.find(".index_project_web").outerHeight();

                    index.find(".index_project_web").removeClass("zoom_in").addClass("zoom_out");
                    index.find(".index_project_product").removeClass("zoom_in").addClass("zoom_out");

                    if(index.find("input[id=project_skill_1]").is(":checked")){
                        index.find(".index_project_1").css("height",indexProjectHeight); // 포트폴리오 종류에 따라 높이 변경
                        index.find(".index_project_web").removeClass("zoom_out").addClass("zoom_in"); // 포트폴리오 투명도 애니메이션 이벤트
                    }
                    else if($("input[id=project_skill_2]").is(":checked")){
                        index.find(".index_project_1").css("height",indexProjectHeight);
                        index.find(".index_project_product").removeClass("zoom_out").addClass("zoom_in");
                    }
                }

            // 포트폴리오 페이지
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