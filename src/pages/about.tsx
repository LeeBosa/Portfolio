// 훅
import Link from "next/link";
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function About () {
    return (
        <>
            <NextSeo title={"T A E D O N N · 연락처"}/>
            <Header/>
            <div className="about w-[100%] h-[100%] absolute left-0 top-0 flex flex-col justify-center items-center pt-[100px] tlg:pt-[60px]">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[152px] h-[152px] border border-theme-1 rounded-full flex flex-col justify-center items-center">
                        <span className="square-spinner"></span>
                    </div>
                    <h2 className="text-[20px] text-center text-theme-1 font-semibold tracking-widest mt-[60px]">TAEHO LEE&#40;TAEDONN&#41;</h2>
                    <div className="text-[14px] text-theme-1 font-light tracking-wide mt-[4px]">taedonn@taedonn.com</div>
                    <div className="flex flex-row justify-center items-center mt-[60px]">
                        <h3 className="w-[80px] text-[12px] text-theme-1 tracking-wider font-light">2021~2023</h3>
                        <h3 className="text-[12px] text-theme-1 tracking-wider font-light">iCLAVE</h3>
                    </div>
                </div>
            </div>
        </>
    );
}