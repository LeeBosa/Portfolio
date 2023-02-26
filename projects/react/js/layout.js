$(document).ready(function(){
    // 도메인
    const url = window.location.href;
    const domain = window.location.host;

    // 헤더 삽입
    if(url.includes("index.html")) {
        $("body").prepend(
            '<header>'
                +'<a href="./index.html">1. React의 기본</a>'
                +'<a href="./sub/jsx.html">2. JSX(JavaScript XML)</a>'
                +'<a href="./sub/node.html">3. Node.js</a>'
                +'<a href="./sub/react_install.html">4. React 설치</a>'
                +'<a href="./sub/package.html">5. Package.json</a>'
            +'</header>'
        );
    }
    else {
        $("body").prepend(
            '<header>'
                +'<a href="../index.html">1. React의 기본</a>'
                +'<a href="../sub/jsx.html">2. JSX(JavaScript XML)</a>'
                +'<a href="../sub/node.html">3. Node.js</a>'
                +'<a href="../sub/react_install.html">4. React 설치</a>'
                +'<a href="../sub/package.html">5. Package.json</a>'
            +'</header>'
        );
    }

    // CodeMirror 실행
    var code = $(".code_blank");
    function editor(code_num){
        CodeMirror
        .fromTextArea(code_num, {
            lineNumbers: true,
            matchBrackets: true,
            theme: "nord",
            mode: "javascript"
        })
        .setSize("100%","auto");
    }

    for(let i = 0; i < code.length; i++){
        editor(code[i]);
    }

    // Anchor
    const anchor = $(".link");
    const anchorInput = $(".anchor").find("input");
    const anchorLabel = $(".anchor").find("label");

    function anchorID() {
        for(let i = 0; i < anchorInput.length; i++) {
            anchorInput.eq(i).attr("id","anchor"+i);
            anchorLabel.eq(i).attr("for","anchor"+i);
            anchor.eq(i).addClass("anchor"+i);
        }
        anchorInput.eq(0).prop("checked",true);
        return;
    }
    anchorID();

    var anchorName;
    function anchorScroll(scrollTop) {
        anchorInput.each(function(){
            let name = $(this).attr("id");
            let offset = $("."+name).offset().top;

            if(scrollTop > offset) {
                anchorName = name;
            }
        });
        return anchorName;
    }

    anchorInput.on("click",function(e) {
        e.preventDefault();
        name = $(this).attr("id");
        offset = $("."+name).offset().top;

        $("html,body").animate({
            scrollTop: offset - 59
        },400);
        return;
    });

    $(window).scroll(function() {
        scrollTop = $(window).scrollTop() + 60;
        name = anchorScroll(scrollTop);
        offset = $("."+name).offset().top;

        if(scrollTop > offset) {
            $("#"+name).prop("checked",true);
        }
        return;
    });
});