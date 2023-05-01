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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
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
                                <input id="contacts_name" type="text" name="name" placeholder="이름"/>
                            </li>
                            <li>
                                <input id="contacts_phone" type="text" name="phone" placeholder="핸드폰"/>
                            </li>
                            <li>
                                <input id="contacts_email" type="text" name="email" placeholder="이메일"/>
                            </li>
                            <li>
                                <textarea maxlength="500" rows="1" onkeydown="resize(this)" onkeyup="resize(this)" name="message" placeholder="남기실 말"></textarea>
                            </li>
                        </ul>
                        <button class="contacts_submit" type="submit">문의하기</button>
                    </fieldset>
                    <div class="thankyou_message">
                        <div class="thankyou_message_txt">
                            <span>
                                문의해주셔서 감사합니다.<br/>
                                빠른 시일 내에 연락드리겠습니다.
                            </span>
                        </div>
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
        components: {
            
        },
        
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

    /* 연락처 - 프로필 */
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

    /* 연락처 - 문의하기 */
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

    /* 연락처 - 토스트 메세지 */
    .contacts :deep(.bg_txt .thankyou_message) {
        display: none;
    }
    .contacts :deep(.bg_txt .thankyou_message_txt) {
        background-color: rgba(0, 0, 0, 0.95);
        position: fixed;
        z-index: 101;
        left: 50%;
        top: 80px;
        transform: translateX(-50%);
        border-radius: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        top: 60px;
    }
    .contacts :deep(.bg_txt .thankyou_message_txt span) {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        padding: 20px 60px;
    }

    /* 연락처 - Copyright */
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
        letter-spacing: 0;
        color: rgba(255, 255, 255, 0.6);
    }
    .contacts :deep(.copyright a) {
        display: inline-block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        color: rgba(255, 255, 255, 0.6);
    }
</style>