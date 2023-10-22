// 서버로 요청이 들어왔을 때 _app.tsx 다음으로 실행되는 component

// 훅
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/SUIT/SUIT.css" type="text/css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
                </Head>
                <body style={{fontFamily: "SUIT"}}>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;