$(document).ready(function(){
    // 도메인
        const url = window.location.href;
        const domain = window.location.host;

    // 페이지 설정
        // 페이지 분류
        const index = $(".index_wrap"); // 메인 페이지
        const career = $(".career_wrap"); // 커리어 페이지
        const portfolio = $(".portfolio_wrap"); // 포트폴리오 페이지
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
                        +'<li><a class="gnb_menu" href="/portfolio/sub/portfolio.html">포트폴리오</a></li>'
                        +'<li><a class="gnb_menu" href="/portfolio/sub/skill.html">스킬</a></li>'
                    +'</ul>'
                    +'<a href="/index.html"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path class="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>'
                    +'<ul class="gnb gnb_right">'
                        +'<li><a class="gnb_menu" href="/portfolio/sub/career.html">커리어</a></li>'
                        +'<li><a class="gnb_menu" href="/portfolio/sub/contacts.html">연락처</a></li>'
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
                                +'<h2><a href="/portfolio/sub/portfolio.html">포트폴리오</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/portfolio/sub/skill.html">스킬</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/portfolio/sub/career.html">커리어</a></h2>'
                                +'<span></span>'
                            +'</div>'
                            +'<div class="header_menu">'
                                +'<h2><a href="/portfolio/sub/contacts.html">연락처</a></h2>'
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
            return;
        });

    // URL에 따라 다른 함수 실행
        // 메인 페이지
        if(url.includes("index.html")) {
            $(window).resize(function(){ // 윈도우 리사이징
                portfolioCheck();
                return;
            });

            function visionFadeIn(){ // 로딩 완료 시 VISION 페이드인
                index.find(".opacity_wrap").animate({
                    opacity:0
                },1000,function(){index.find(".opacity_wrap").css("z-index","-1");});
                return;
            }
            visionFadeIn();

            // 포트폴리오 데이터 연동
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
                    .then(() => { portfolioCheck(); });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','illustration', 'ai');
    
            function dataInit(name, item) {
                for(let i = item.length-1; i >= item.length-3; i--) { // 마지막에서 3번째까지 loop
                    if(item[i].c[4].v == "null") { item[i].c[4].v = ""; }
                    $('.index_portfolio_'+name).append(
                        '<div class="index_portfolio_web_1">'
                            +'<div class="index_portfolio_web_left">'
                                +'<img src='+item[i].c[5].v+'>'
                            +'</div>'
                            +'<div class="index_portfolio_web_right">'
                                +'<h2 style="color:'+item[i].c[2].v+'">'+item[i].c[1].v+'</h2>'
                                +'<h3>'+item[i].c[3].v+'</h3>'
                                +'<span></span>'
                                +'<h4>'+item[i].c[4].v+'</h4>'
                            +'</div>'
                        +'</div>'
                    );
                }
            }

            function dataBtn(name) {
                if(name == "web") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=1">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "product") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=2">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "ai") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=3">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
            }

            function portfolioCheck(){ // 포트폴리오 라디오버튼 체크 이벤트
                indexPortfolioHeight = index.find(".index_portfolio_web").outerHeight();

                index.find(".index_portfolio_web").removeClass("zoom_in").addClass("zoom_out");
                index.find(".index_portfolio_product").removeClass("zoom_in").addClass("zoom_out");
                index.find(".index_portfolio_ai").removeClass("zoom_in").addClass("zoom_out");

                if(index.find("input[id=portfolio_skill_1]").is(":checked")){
                    // // 포트폴리오 종류에 따라 높이 변경
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);

                    // 포트폴리오 투명도 애니메이션 이벤트
                    index.find(".index_portfolio_web").removeClass("zoom_out").addClass("zoom_in");
                }
                else if($("input[id=portfolio_skill_2]").is(":checked")){
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);
                    index.find(".index_portfolio_product").removeClass("zoom_out").addClass("zoom_in");
                }
                else if($("input[id=portfolio_skill_3]").is(":checked")){
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);
                    index.find(".index_portfolio_ai").removeClass("zoom_out").addClass("zoom_in");
                }
                return;
            }

            $("input[name=portfolio_skill]").on("click",function(){ // 포트폴리오 라디오버튼 클릭 이벤트
                portfolioCheck();
                return;
            });
        }
        // 커리어 페이지
        else if(url.includes("career.html")) {
            $(window).resize(function(){ // 윈도우 리사이징
                scrollAnimCheck();
                return;
            });

            $(window).scroll(function() { // 윈도우 스크롤
                scrollSetting();
                return;
            });

            function scrollAnimCheck() { // "스크롤하기" 숨기기
                if(window.innerWidth > 1080) {
                    $(".scroll_animation").show();
                }
                else {
                    $(".scroll_animation").hide();
                }
                return;
            }
            scrollAnimCheck();

            function scrollSetting() { // 스크롤하기 숨김 설정
                scrollTop = $(window).scrollTop();
                scrollBottom = scrollTop + window.innerHeight;
                profileTop = $(".profile").offset().top;
                careerTop = $(".career").offset().top;

                if(window.innerWidth > 1080) { // PC에서
                    if(scrollTop <= 0) { // 맨위
                        career.find(".scroll_animation").removeClass("hide");
                        career.find(".profile").removeClass("show");
                    }
                    else { // 맨위가 아닐 때
                        career.find(".scroll_animation").addClass("hide");
                        career.find(".profile").addClass("show");
                    }
        
                    if(profileTop > scrollTop) { // 프로필이 화면보다 위에 있을 때
                        career.find(".profile_img_wrap")
                        .removeClass("fixed")
                        .removeClass("bottom");
                    }
                    else if(profileTop <= scrollTop && careerTop > scrollBottom) { // 프로필이 화면보다 아래고, 커리어보다 위에 있을 때
                        career.find(".profile_img_wrap")
                        .removeClass("bottom")
                        .addClass("fixed");
                    }
                    else { // 그 외에
                        career.find(".profile_img_wrap")
                        .removeClass("fixed")
                        .addClass("bottom");
                    }
                }
                else { // PC 이외에
                    career.find(".profile_img_wrap")
                    .removeClass("fixed")
                    .removeClass("bottom");
                }

                return;
            }
            scrollSetting();
        }
        // 스킬 페이지
        else if(url.includes("skill.html")) {
            // 포트폴리오 데이터 연동
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

            $(window).resize(function(){ // 윈도우 리사이징
                scrollAnimCheck();
                itemMargin();
                return;
            });

            $(window).scroll(function() { // 윈도우 스크롤
                scrollSetting();
                return;
            });

            function scrollAnimCheck() { // "스크롤하기" 숨기기
                if(window.innerWidth > 1080) {
                    $(".scroll_animation").show();
                }
                else {
                    $(".scroll_animation").hide();
                }
                return;
            }
            scrollAnimCheck();

            function scrollSetting() { // 스크롤하기 숨김 설정
                scrollTop = $(window).scrollTop();

                if(scrollTop <= 0) { // 맨위
                    skill.find(".scroll_animation").removeClass("hide");
                }
                else { // 맨위가 아닐 때
                    skill.find(".scroll_animation").addClass("hide");
                }
                return;
            }
            scrollSetting();

            function itemMargin() { // 아이템 마진값 설정
                vw = skill.find(".skill_list").width() / 100;

                if(window.innerWidth > 1080) {
                    skill.find(".skill_web_box").css("margin-bottom",vw * 1.25);
                }
                else {
                    skill.find(".skill_web_box").css("margin-bottom",vw * 2.5);
                }
                return;
            }
            itemMargin();
        }
        // 포트폴리오 페이지
        else if(url.includes("portfolio.html")) {
            // 포트폴리오 데이터 연동
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
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','illustration', 'ai');
    
            function dataInit(name, item) { // 데이터 로딩
                for(let i = item.length-1; i >= 0; i--) { // loop
                    $("."+name).append(
                        '<a href="'+item[i].c[6].v+'" target="_blank">'
                            +'<div class="portfolio_item">'
                                +'<div class="img_wrap">'
                                    +'<img src="'+item[i].c[5].v+'"/>'
                                +'</div>'
                                +'<div class="portfolio_txt">'
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
                    console.log("Y");
                    if($(this).attr("href") == "#") {
                        $(this).attr("target","_self");
                    }
                });
            }

            $(window).resize(function(){ // 윈도우 리사이징
                itemMargin();
                return;
            });

            function itemMargin() { // 아이템 마진값 설정
                vw = portfolio.find(".portfolio_list").width() / 100;

                if(window.innerWidth > 1080) {
                    portfolio.find(".portfolio_item").parent("a").css("margin-bottom",vw * 0.5);
                }
                else {
                    portfolio.find(".portfolio_item").parent("a").css("margin-bottom",vw * 2);
                }
                return;
            }
            itemMargin();

            function getParameterByName(name) { // 파라미터 값 반환
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
                return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            pageType = getParameterByName("pageType");

            if(pageType == "1") { // "웹 디자인 / 개발" 클릭 시
                portfolio.find(".web").show();
                portfolio.find(".product").hide();
                portfolio.find(".ai").hide();
            }
            else if(pageType == "2") { // "제품 디자인" 클릭 시
                portfolio.find(".web").hide();
                portfolio.find(".product").show();
                portfolio.find(".ai").hide();
            }
            else if(pageType == "3") { // "일러스트 / 사진" 클릭 시
                portfolio.find(".web").hide();
                portfolio.find(".product").hide();
                portfolio.find(".ai").show();
            }
            else { // 디폴트
                portfolio.find(".web").show();
                portfolio.find(".product").hide();
                portfolio.find(".ai").hide();
            }
        }
        else { // 메인 페이지
            $(window).resize(function(){ // 윈도우 리사이징
                portfolioCheck();
                return;
            });

            function visionFadeIn(){ // 로딩 완료 시 VISION 페이드인
                index.find(".opacity_wrap").animate({
                    opacity:0
                },1000,function(){index.find(".opacity_wrap").css("z-index","-1");});
                return;
            }
            visionFadeIn();

            // 포트폴리오 데이터 연동
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
                    .then(() => { portfolioCheck(); });
            }
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','web_design', 'web');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','product_design', 'product');
            init('1sHnd5DHJK1yI5YiPhJwPzL5VKDxGdtdLe4O8MTrHoo4','illustration', 'ai');
    
            function dataInit(name, item) {
                for(let i = item.length-1; i >= item.length-3; i--) { // 마지막에서 3번째까지 loop
                    if(item[i].c[4].v == "null") { item[i].c[4].v = ""; }
                    $('.index_portfolio_'+name).append(
                        '<div class="index_portfolio_web_1">'
                            +'<div class="index_portfolio_web_left">'
                                +'<img src='+item[i].c[5].v+'>'
                            +'</div>'
                            +'<div class="index_portfolio_web_right">'
                                +'<h2 style="color:'+item[i].c[2].v+'">'+item[i].c[1].v+'</h2>'
                                +'<h3>'+item[i].c[3].v+'</h3>'
                                +'<span></span>'
                                +'<h4>'+item[i].c[4].v+'</h4>'
                            +'</div>'
                        +'</div>'
                    );
                }
            }

            function dataBtn(name) {
                if(name == "web") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=1">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "product") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=2">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
                else if(name == "ai") {
                    $(".index_portfolio_"+name).append(
                        '<a class="btn_two" href="./sub/portfolio.html?pageType=3">'
                            +'<span>포트폴리오 더보기</span>'
                        +'</a>'
                    );
                }
            }

            function portfolioCheck(){ // 포트폴리오 라디오버튼 체크 이벤트
                indexPortfolioHeight = index.find(".index_portfolio_web").outerHeight();

                index.find(".index_portfolio_web").removeClass("zoom_in").addClass("zoom_out");
                index.find(".index_portfolio_product").removeClass("zoom_in").addClass("zoom_out");
                index.find(".index_portfolio_ai").removeClass("zoom_in").addClass("zoom_out");

                if(index.find("input[id=portfolio_skill_1]").is(":checked")){
                    // 포트폴리오 종류에 따라 높이 변경
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);

                    // 포트폴리오 투명도 애니메이션 이벤트
                    index.find(".index_portfolio_web").removeClass("zoom_out").addClass("zoom_in");
                }
                else if($("input[id=portfolio_skill_2]").is(":checked")){
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);
                    index.find(".index_portfolio_product").removeClass("zoom_out").addClass("zoom_in");
                }
                else if($("input[id=portfolio_skill_3]").is(":checked")){
                    index.find(".index_portfolio_1").css("height",indexPortfolioHeight);
                    index.find(".index_portfolio_ai").removeClass("zoom_out").addClass("zoom_in");
                }
                return;
            }

            $("input[name=portfolio_skill]").on("click",function(){ // 포트폴리오 라디오버튼 클릭 이벤트
                portfolioCheck();
                return;
            });
        }
});