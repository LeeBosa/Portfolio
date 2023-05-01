<template>
    <div class="contacts">
        <div class="bg">
            <div class="img">
                <div class="img_color"></div>
                <img src="https://i.ibb.co/3Fd8vS0/bg-contacts.jpg" alt="연락처 배경이미지"/>
            </div>
            <div class="bg_wrap">
                <div class="bg_profile">
                    <div class="bg_profile_txt">
                        <h3>이태호<span class="line"></span><span class="en">TAE HO LEE</span></h3>
                        <h4>
                            E-MAIL :
                            <p>taedonn@outlook.com</p>
                        </h4>
                        <h4>
                            <p>
                                <a href="https://github.com/taedonn" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                                </a>
                                <a href="https://taedonn.tistory.com" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><g><path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"/></g></svg>
                                </a>
                            </p>
                        </h4>
                    </div>
                </div>
                <form class="bg_txt gform" method="post" action="https://script.google.com/macros/s/AKfycbypVBkBaOgyw7W0khmi1tEB_3ZYurQ8r5r6ERU0Ol6XAax7_VP-ykFxdX-i07nmHc7nmQ/exec">
                    <h2>문의하기</h2>
                    <fieldset>
                        <ul>
                            <li>
                                <input id="contacts_name" type="text" name="name" placeholder="이름" autocomplete="off"/>
                            </li>
                            <li>
                                <input id="contacts_phone" type="text" name="phone" placeholder="핸드폰" autocomplete="off"/>
                            </li>
                            <li>
                                <input id="contacts_email" type="text" name="email" placeholder="이메일" autocomplete="off"/>
                            </li>
                            <li>
                                <textarea id="contacts_msg" @keydown="textAreaHandler" @keyup="textAreaHandler" maxlength="500" rows="1" name="message" placeholder="남기실 말" autocomplete="off"></textarea>
                            </li>
                        </ul>
                        <button class="contacts_submit" v-on:click="contactsSUbmitClick" type="submit"><span>문의하기</span></button>
                    </fieldset>
                    <div class="thankyou_message">
                        <span>
                            문의해주셔서 감사합니다.<br/>
                            빠른 시일 내에 연락드리겠습니다.
                        </span>
                    </div>
                </form>
            </div>
            <div class="copyright">
                {{'Copyright ' + new Date().getFullYear() + '. taedonn, all rights reserved.'}}
                <a href="https://github.com/taedonn/portfolio" target="_blank">Check this repository on GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactsPage',
        methods: {
            textAreaHandler: function(e) {
                e.target.style.height = "1px";
                e.target.style.height = (2 + e.target.scrollHeight) + "px";
            },
            contactsSUbmitClick: function(e) {
                e.target.getElementsByTagName("span")[0].innerText = "";
                e.target.getElementsByTagName("span")[0].classList.add("spinner");
            }
        },
        mounted() {
            // 폼 데이터 보내기
            function getFormData(form) {
                var elements = form.elements;
                var honeypot;

                var fields = Object.keys(elements).filter(function(k) {
                    if (elements[k].name === "honeypot") {
                        honeypot = elements[k].value;
                        return false;
                    }
                    return true;
                    }).map(function(k) {
                        if(elements[k].name !== undefined) {
                            return elements[k].name;
                            // special case for Edge's html collection
                        } else if(elements[k].length > 0){
                            return elements[k].item(0).name;
                        }
                    }).filter(function(item, pos, self) {
                        return self.indexOf(item) == pos && item;
                    });

                    var formData = {};
                    fields.forEach(function(name) {
                        var element = elements[name];
                        
                        // singular form elements just have one value
                        formData[name] = element.value;

                        // when our element has multiple items, get their values
                        if (element.length) {
                            var data = [];
                            for (var i = 0; i < element.length; i++) {
                                var item = element.item(i);
                                if (item.checked || item.selected) {
                                    data.push(item.value);
                                }
                            }
                            formData[name] = data.join(', ');
                        }
                    });

                    // add form-specific values into the data
                    formData.formDataNameOrder = JSON.stringify(fields);
                    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
                    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
                    return {data: formData, honeypot: honeypot};
                }

                // 문의하기 버튼 클릭 이벤트
                function handleFormSubmit(event) {  // handles form submit without any jquery
                    event.preventDefault();           // we are submitting via xhr below
                    var form = event.target;
                    var formData = getFormData(form);
                    var data = formData.data;

                    // If a honeypot field is filled, assume it was done so by a spam bot.
                    if (formData.honeypot) {
                        return false;
                    }

                    var url = form.action;
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', url);
                    // xhr.withCredentials = true;
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        form.reset();
                        var formElements = form.querySelector(".form-elements")
                        if (formElements) {
                            formElements.style.display = "none"; // hide form
                        }
                        var thankYouMessage = form.querySelector(".thankyou_message");
                        if (thankYouMessage) {
                            thankYouMessage.classList.add("success");
                            setTimeout(function() {
                                thankYouMessage.classList.remove("success");
                            },2000);
                            document.getElementsByClassName("contacts_submit")[0].getElementsByTagName("span")[0].innerText = "문의하기";
                            document.getElementsByClassName("contacts_submit")[0].getElementsByTagName("span")[0].classList.remove("spinner");
                        }
                    }
                }

                // url encode form data for sending as post data
                var encoded = Object.keys(data).map(function(k) {
                        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                    }).join('&');
                    xhr.send(encoded);
                }

                function loaded() {
                    // bind to the submit event of our form
                    var forms = document.querySelectorAll("form.gform");
                    for (var i = 0; i < forms.length; i++) {
                        forms[i].addEventListener("submit", handleFormSubmit, false);
                    }
                }
                document.addEventListener("DOMContentLoaded", loaded, false);
            }
        }
</script>

<style scoped>
    .contacts :deep(.bg) {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .contacts :deep(.img) {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .contacts :deep(.img_copyright) {
        position: absolute;
        z-index: 2;
        left: 14px;
        bottom: 14px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0;
        color: rgba(255, 255, 255, 0.4);
    }
    .contacts :deep(.img .img_color) {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .contacts :deep(.img img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
    .contacts :deep(.bg_wrap) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    /* 프로필 */
    .contacts :deep(.bg_profile) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .contacts :deep(.bg_profile_txt) {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .contacts :deep(.bg_profile_txt h3) {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 40px;
    }
    .contacts :deep(.bg_profile_txt h3 .line) {
        display: inline-block;
        width: 1px;
        height: 18px;
        background-color: #fff;
        margin: 0 18px;
    }
    .contacts :deep(.bg_profile_txt h3 .en) {
        letter-spacing: 0.5px;
    }
    .contacts :deep(.bg_profile_txt h4) {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: #fff;
    }
    .contacts :deep(.bg_profile_txt h4:last-of-type) {
        margin-top: 40px;
    }
    .contacts :deep(.bg_profile_txt h4 p) {
        font-size: 16px;
        font-weight: 400;
    }
    .contacts :deep(.bg_profile_txt h4 svg) {
        width: 24px;
        height: 24px;
        fill: #fff;
        margin-right: 12px;
        margin-top: 12px;
    }

    /* 문의하기 FORM */
    .contacts :deep(.bg_txt) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .contacts :deep(.bg_txt h2) {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: #fff;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    }
    .contacts :deep(.bg_txt h2 .line) {
        display: inline-block;
        font-size: 28px;
        font-weight: 300;
        line-height: 1;
        margin: 0 20px;
    }
    .contacts :deep(.bg_txt fieldset) {
        width: 500px;
        border: none;
    }
    .contacts :deep(.bg_txt fieldset li) {
        margin-bottom: 32px;
    }
    .contacts :deep(.bg_txt input) {
        width: 100%;
        height: 48px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        padding: 16px;
        margin-bottom: 8px;
        border-bottom: 1px solid #fff;
        color: #fff;
    }
    .contacts :deep(.bg_txt input::placeholder) {
        color: #fff;
    }
    .contacts :deep(.bg_txt input:focus::placeholder) {
        color: transparent;
    }
    .contacts :deep(.bg_txt input:focus) {
        border-color: #86a3c3;
    }
    .contacts :deep(.bg_txt textarea) {
        width: 100%;
        min-height: 48px;
        font-family: "Spoqa Han Sans Neo";
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        background-color: transparent;
        padding: 16px;
        resize: none;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
    }
    .contacts :deep(.bg_txt textarea::placeholder) {
        color: #fff;
    }
    .contacts :deep(.bg_txt textarea:focus::placeholder) {
        color: transparent;
    }
    .contacts :deep(.bg_txt textarea:focus) {
        outline: none;
        border-color: #86a3c3;
    }
    .contacts :deep(.bg_txt textarea::-webkit-scrollbar) {
        display: none;
    }
    .contacts :deep(.bg_txt button) {
        width: 100%;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 1px;
        transition: 0.2s;
    }
    @media (hover: hover) and (pointer: fine) {
        .contacts :deep(.bg_txt input:hover) {
            border-color: #86a3c3;
        }
        .contacts :deep(.bg_txt textarea:hover) {
            border-color: #86a3c3;
        }
        .contacts :deep(.bg_txt button:hover) {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }

    /* 로딩 스피너 */
    .spinner {
        width: 28px;
        height: 28px;
        border: 3px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 

    /* 토스트 메세지 */
    .contacts :deep(.bg_txt .thankyou_message) {
        position: fixed;
        z-index: 100;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.95);
    }
    .contacts :deep(.bg_txt .thankyou_message.success) {
        display: flex;
        animation: toast_fade_in 2s both;
    }
    @keyframes toast_fade_in {
        0% {
            opacity: 0;
            top: 56px;
        }
        30% {
            opacity: 1;
            top: 68px;
        }
        70% {
            opacity: 1;
            top: 68px;
        }
        100% {
            opacity: 0;
            top: 56px;
        }
    }
    .contacts :deep(.bg_txt .thankyou_message span) {
        font-size: 14px;
        font-weight: 400;
        color: #FFF;
        padding: 14px 24px;
    }

    /* Copyright */
    .contacts :deep(.copyright) {
        width: 100%;
        position: absolute;
        left: 50%;
        bottom: 32px;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
        color: rgba(255, 255, 255, 0.6);
    }
    .contacts :deep(.copyright a) {
        display: inline-block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        color: rgba(255, 255, 255, 0.6);
    }

    @media screen and (max-width: 1080px) {
        .contacts :deep(.bg) {
            height: auto;
            min-height: 100vh;
            justify-content: flex-start;
        }
        .contacts :deep(.bg_wrap) {
            flex-direction: column;
            padding-top: 100px;
            padding-bottom: 120px;
        }
        .contacts :deep(.img_copyright) {
            left: 10px;
            bottom: 10px;
            font-size: 12px;
        }

        /* 프로필 */
        .contacts :deep(.bg_profile) {
            width: 100%;
            align-items: flex-start;
            padding: 0 5vw;
        }
        .contacts :deep(.bg_profile_txt) {
            width: 100%;
        }
        .contacts :deep(.bg_profile_txt h3) {
            margin-bottom: 20px;
        }
        .contacts :deep(.bg_profile_txt h4:last-of-type) {
            margin-top: 20px;
        }

        /* 문의하기 */
        .contacts :deep(.bg_txt) {
            width: calc(100% - 10vw);
            margin-top: 5vh;
            padding: 28px;
            background-color: rgba(255, 255, 255, 0.9);
        }
        .contacts :deep(.bg_txt fieldset) {
            width: 100%;
        }
        .contacts :deep(.bg_txt h2) {
            font-size: 24px;
            color: #333;
        }
        .contacts :deep(.bg_txt input) {
            color: #333;
            border-color: #333;
        }
        .contacts :deep(.bg_txt input::placeholder) {
            color: #333;
        }
        .contacts :deep(.bg_txt textarea) {
            color: #333;
            border-color: #333;
        }
        .contacts :deep(.bg_txt textarea::placeholder) {
            color: #333;
        }
    }
</style>