// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function About () {
    const currYear = new Date().getFullYear();

    return (
        <>
            <NextSeo title={"T A E D O N N · 연락처"}/>
            <Header/>
            <div className="about w-[100%] h-[100%] absolute left-0 top-0 flex flex-col justify-center items-center pt-24 tlg:pt-16">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[9.5rem] h-[9.5rem] border border-theme-1 rounded-full flex flex-col justify-center items-center">
                        <span className="square-spinner"></span>
                    </div>
                    <h2 className="text-xl text-center text-theme-1 font-semibold tracking-widest mt-16">TAEHO LEE&#40;TAEDONN&#41;</h2>
                    <div className="text-sm text-theme-1 font-light tracking-wide mt-2">taedonn@taedonn.com</div>
                    <div className="flex flex-row justify-center items-center mt-16">
                        <h3 className="w-20 text-xs text-theme-1 tracking-wider font-light">2021~{currYear}</h3>
                        <h3 className="text-xs text-theme-1 tracking-wider font-light">iCLAVE</h3>
                    </div>
                </div>
            </div>
        </>
    );
}