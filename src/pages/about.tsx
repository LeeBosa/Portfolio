// 훅
import Link from "next/link";
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function About () {
    return (
        <>
            <NextSeo title={"T A E D O N N · 연락처"}/>
            <Header theme={"dark"}/>
            <div className="about w-[100%] h-[100vh] relative flex flex-col justify-center items-center pt-[120px] tlg:pt-[100px] tsm:pt-[80px] bg-theme-dark-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[152px] h-[152px] border border-theme-white-1 rounded-full flex flex-col justify-center items-center">
                        <span className="square-spinner"></span>
                    </div>
                    <h2 className="text-[20px] text-center text-theme-white-1 font-semibold tracking-widest mt-[60px]">TAEHO LEE</h2>
                    <Link href="https://github.com/taedonn" target="_blank" className="text-[14px] text-theme-white-1 font-light tracking-wide mt-[4px] border-b border-theme-dark-1 hover:border-theme-white-1 tlg:hover:border-theme-dark-1 duration-200">taedonn @github</Link>
                    <div className="flex flex-row justify-center items-center mt-[60px]">
                        <h3 className="w-[80px] text-[12px] text-theme-white-1 tracking-wider font-light">2021~2023</h3>
                        <h3 className="text-[12px] text-theme-white-1 tracking-wider font-light">iCLAVE</h3>
                    </div>
                </div>
            </div>
        </>
    );
}