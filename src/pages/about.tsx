// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function About () {
    return (
        <>
            <NextSeo title={"T A E D O N N · 연락처"}/>
            <Header/>
        </>
    );
}