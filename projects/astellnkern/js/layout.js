$(function(){
    //비디오 로딩 이벤트
    $(window).on("load",function(){
        let mainVideo = $("#yt_player").get(0);
        let barSize = $(window).width();
        let progressbar = document.getElementById("progressbar");
        let updateBar;

        //윈도우 로드 시 비디오 실행
        if(!mainVideo.paused && !mainVideo.ended){
            $("#yt_player").each(function(){
                this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            });
            window.clearInterval(updateBar);
        }
        else{
            $("#yt_player").each(function(){
                this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            });
            updateBar = setInterval(update,50);
        }

        //Progress Bar 비디오에 연결
        function update(){
            if(!mainVideo.ended){
                let size = parseInt(mainVideo.currentTime*barSize/mainVideo.duration);
                progressbar.style.width = size+"px"
            }
            else{
                progressbar.style.width = "0px"
                window.clearInterval(updateBar);
            }
        }
    });

    //버튼 클릭 시 비디오 제어
    $(".content1-2>div:nth-of-type(1)").on("click",function(){
        $("#yt_player").each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        });
    });
    $(".content1-2>div:nth-of-type(2)").on("click",function(){
        $("#yt_player").each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });

    //헤더 gnb 호버 이벤트
    $(".menu>div>ul:nth-of-type(1)>a").hover(
        function(){
            $(".menu>div>span:nth-of-type(1)").css({
                "background":"black"
            });
        },
        function(){
            $(".menu>div>span:nth-of-type(1)").css({
                "background":"white"
            });
        }
    );
    $(".menu>div>ul:nth-of-type(2)>a").hover(
        function(){
            $(".menu>div>span:nth-of-type(2)").css({
                "background":"black"
            });
        },
        function(){
            $(".menu>div>span:nth-of-type(2)").css({
                "background":"white"
            });
        }
    );
    $(".menu>div>ul:nth-of-type(3)>a").hover(
        function(){
            $(".menu>div>span:nth-of-type(3)").css({
                "background":"black"
            });
        },
        function(){
            $(".menu>div>span:nth-of-type(3)").css({
                "background":"white"
            });
        }
    );
    $(".menu>div>ul:nth-of-type(4)>a").hover(
        function(){
            $(".menu>div>span:nth-of-type(4)").css({
                "background":"black"
            });
        },
        function(){
            $(".menu>div>span:nth-of-type(4)").css({
                "background":"white"
            });
        }
    );
    $(".menu>div>ul:nth-of-type(5)>a").hover(
        function(){
            $(".menu>div>span:nth-of-type(5)").css({
                "background":"black"
            });
        },
        function(){
            $(".menu>div>span:nth-of-type(5)").css({
                "background":"white"
            });
        }
    );

    //헤더 호버시 이벤트
    $(".gnb-menu>li").hover(
        function(){
            $("header").css({
                "background":"white",
                "border-bottom":"1px solid #ddd"
            }),
            $(".gnb-menu>li>a").css({
                "border-bottom":"2px solid white",
                "color":"black"
            }),
            $(".gnb-menu>li:hover .gnb-main").css({
                "color":"#d81334",
                "border-bottom":"2px solid #d81334"
            }),
            $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                "background":"black"
            }),
            $("#searchbar .cls-1").css({
                "fill":"black"
            }),
            $("#logo .cls-1").css({
                "fill":"black"
            })
        },
        function(){
            $("header").css({
                "background":"black",
                "border-bottom":"1px solid black"
            }),
            $(".gnb-menu>li>a").css({
                "border-bottom":"2px solid black",
                "color":"white"
            }),
            $(".gnb-menu>li:hover .gnb-main").css({
                "color":"white",
                "border-bottom":"2px solid black"
            }),
            $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                "background":"white"
            }),
            $("#searchbar .cls-1").css({
                "fill":"white"
            }),
            $("#logo .cls-1").css({
                "fill":"white"
            })
        }
    );

    //헤더 스크롤 이벤트
    $(window).scroll(function(event){
        let windowTop = $(window).scrollTop();
        let contentTop = $(".content1").scrollTop();

        if(windowTop == contentTop){ //스크롤이 맨위에 있을 때
            $("header").css({
                "background":"black",
                "border-bottom":"1px solid black"
            }),
            $(".gnb-menu>li>a").css({
                "border-bottom":"2px solid black",
                "color":"white"
            }),
            $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                "background":"white"
            }),
            $("input[id='menu']:checked+label span:nth-of-type(3)").css({
                "background":"black"
            }),
            $("#searchbar .cls-1").css({
                "fill":"white"
            }),
            $("#logo .cls-1").css({
                "fill":"white"
            })

            //스크롤이 맨위에 있을 때 헤더 gnb 메뉴 호버 이벤트
            $(".gnb-menu>li").hover(
                function(){
                    $("header").css({
                        "background":"white",
                        "border-bottom":"1px solid #ddd"
                    }),
                    $(".gnb-menu>li>a").css({
                        "border-bottom":"2px solid white",
                        "color":"black"
                    }),
                    $(".gnb-menu>li:hover .gnb-main").css({
                        "color":"#d81334",
                        "border-bottom":"2px solid #d81334"
                    }),
                    $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                        "background":"black"
                    }),
                    $("#searchbar .cls-1").css({
                        "fill":"black"
                    }),
                    $("#logo .cls-1").css({
                        "fill":"black"
                    })
                },
                function(){
                    $("header").css({
                        "background":"black",
                        "border-bottom":"1px solid black"
                    }),
                    $(".gnb-menu>li>a").css({
                        "border-bottom":"2px solid black",
                        "color":"white"
                    }),
                    $(".gnb-menu>li:hover .gnb-main").css({
                        "color":"white",
                        "border-bottom":"2px solid black"
                    }),
                    $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                        "background":"white"
                    }),
                    $("#searchbar .cls-1").css({
                        "fill":"white"
                    }),
                    $("#logo .cls-1").css({
                        "fill":"white"
                    })
                }
            );
        }
        else if(windowTop > contentTop){ //스크롤을 내렸을 때
            $("header").css({
                "background":"white",
                "border-bottom":"1px solid #ddd"
            }),
            $(".gnb-menu>li>a").css({
                "border-bottom":"2px solid white",
                "color":"black"
            }),
            $(".gnb-menu>li:hover .gnb-main").css({
                "color":"#d81334",
                "border-bottom":"2px solid #d81334"
            }),
            $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                "background":"black"
            }),
            $("#searchbar .cls-1").css({
                "fill":"black"
            }),
            $("#logo .cls-1").css({
                "fill":"black"
            })

            //스크롤이 내려왔을 때 헤더 gnb 메뉴 호버 이벤트
            $(".gnb-menu>li").hover(
                function(){
                    $("header").css({
                        "background":"white",
                        "border-bottom":"1px solid #ddd"
                    }),
                    $(".gnb-menu>li>a").css({
                        "border-bottom":"2px solid white",
                        "color":"black"
                    }),
                    $(".gnb-menu>li:hover .gnb-main").css({
                        "color":"#d81334",
                        "border-bottom":"2px solid #d81334"
                    }),
                    $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                        "background":"black"
                    }),
                    $("#searchbar .cls-1").css({
                        "fill":"black"
                    }),
                    $("#logo .cls-1").css({
                        "fill":"black"
                    })
                },
                function(){
                    $("header").css({
                        "background":"white",
                        "border-bottom":"1px solid #ddd"
                    }),
                    $(".gnb-menu>li>a").css({
                        "border-bottom":"2px solid white",
                        "color":"black"
                    }),
                    $(".gnb-menu>li:hover .gnb-main").css({
                        "color":"#d81334",
                        "border-bottom":"2px solid #d81334"
                    }),
                    $("input[id='menu']+label span:nth-of-type(2),input[id='menu']+label span:nth-of-type(3)").css({
                        "background":"black"
                    }),
                    $("#searchbar .cls-1").css({
                        "fill":"black"
                    }),
                    $("#logo .cls-1").css({
                        "fill":"black"
                    })
                }
            );
        }
    });
});