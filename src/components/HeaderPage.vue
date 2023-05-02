<template>
    <header>
        <div class="header">
            <nav class="gnb">
                <a class="gnb_menu" href="/">프로젝트</a>
                <a class="gnb_menu" href="/contacts">문의하기</a>
                <a class="gnb_menu" href="https://github.com/taedonn" target="_blank">깃허브</a>
                <a class="gnb_menu" href="https://resume.taedonn.com" target="_blank">이력서</a>
                <a class="gnb_menu" href="https://taedonn.tistory.com" target="_blank">블로그</a>
            </nav>
            <nav class="gnb_m">
                <div class="menu_m">
                    <input type="checkbox" id="gnb_btn" v-on:click="handleGnbBtnClick"/>
                    <label for="gnb_btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div class="gnb_menu_m_wrap">
                        <div class="gnb_menu_m">
                            <h2><a href="/">프로젝트</a></h2>
                            <span></span>
                        </div>
                        <div class="gnb_menu_m">
                            <h2><a href="/contacts">문의하기</a></h2>
                            <span></span>
                        </div>
                        <div class="gnb_menu_m">
                            <h2><a href="https://github.com/taedonn" target="_blank">깃허브</a></h2>
                            <span></span>
                        </div>
                        <div class="gnb_menu_m">
                            <h2><a href="https://resume.taedonn.com" target="_blank">이력서</a></h2>
                            <span></span>
                        </div>
                        <div class="gnb_menu_m">
                            <h2><a href="https://taedonn.tistory.com" target="_blank">블로그</a></h2>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderPage',
        methods: {
            // 모바일 헤더 GNB 클릭 이벤트
            handleGnbBtnClick: function(e) {
                // let scrollTop = window.scrollY;

                if (e.target.checked) {
                    // 1080px 이하일 때 뒷배경 고정
                    document.body.classList.add("hidden");

                    // 1080px 이하일 때 메뉴 팝업
                    document.getElementsByClassName("gnb_menu_m_wrap")[0].classList.add("checked");
                }
                else {
                    // 1080px 이하일 때 뒷배경 고정 해제
                    document.body.classList.remove("hidden");

                    // 1080px 이하일 때 메뉴 팝업 해제
                    document.getElementsByClassName("gnb_menu_m_wrap")[0].classList.remove("checked");
                }
            },

            // 페이지 나가기 전에 gnb 버튼 체크 해제
            unLoadEvent: function () {
                document.body.classList.remove("hidden");
                document.getElementById("gnb_btn").checked = false;
                document.getElementsByClassName("gnb_menu_m_wrap")[0].classList.remove("checked");
            },
        },
        mounted() {
            // 페이지 나가기 전에 gnb 버튼 체크 해제
            window.addEventListener('beforeunload', this.unLoadEvent);
        }
    }

    const fonts = [
        // Spoqa Han Sans Neo
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/SpoqaHanSansNeo/SpoqaHanSansNeo.css" type="text/css"/>',
    ]
    for (let i = 0; i < fonts.length; i++) { document.getElementsByTagName("head")[0].innerHTML += fonts[i]; }
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
    .gnb_m {
        display: none;
    }

    @media screen and (max-width: 1080px) {
        /* 헤더 */
        header {
            height: 48px;
            background-color: rgba(0, 0, 0, 0.8);
        }
        .gnb {
            display: none;
        }
        .gnb_m {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding: 0 24px;
        }
        .menu_m {
            width: 24px;
            height: 16px;
        }
        #gnb_btn {
            display: none;
        }
        #gnb_btn + label {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: 0.2s;
        }
        #gnb_btn + label span {
            width: 100%;
            height: 1px;
            background-color: rgba(255, 255, 255, 1);
            transition: 0.2s;
        }
        #gnb_btn:checked + label {
            transform: rotate(180deg) translateX(8px);
        }
        #gnb_btn:checked + label span:nth-of-type(1) {
            transform: rotate(45deg) translateY(10.5px);
        }
        #gnb_btn:checked + label span:nth-of-type(2) {
            opacity: 0;
        }
        #gnb_btn:checked + label span:nth-of-type(3) {
            transform: rotate(-45deg) translateY(-10.5px);
        }
        .gnb_menu_m_wrap {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 48px;
            background-color: rgba(0, 0, 0, 0.8);
            border-top: 1px solid #fff;
            display: none;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 24px;
            opacity: 0;
        }
        .gnb_menu_m_wrap.checked {
            display: flex;
            animation: fade_in 0.2s both;
        }
        @keyframes fade_in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .gnb_menu_m {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .gnb_menu_m h2 a {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.25;
            color: rgba(255, 255, 255, 1);
        }
        .gnb_menu_m span {
            width: 100%;
            height: 1px;
            margin: 4px 0;
            background-color: rgba(255, 255, 255, 1);
        }
    }
</style>
