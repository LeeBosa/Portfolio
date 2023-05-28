// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function WebDev () {
    return (
        <>
            <NextSeo title={"T A E D O N N · 웹 개발"}/>
            <Header/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[120px] tlg:pt-[100px] tsm:pt-[80px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                <a href="https://fonts.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">FONTS ARCHIVE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://fonts.taedonn.com</p>
                    </div>
                    <img src="/web-fonts-archive.png" alt="상업용 무료 한글 폰트 아카이빙 웹사이트" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://gdrive-img-converter.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">GDRIVE IMG CONVERTER</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://gdrive-img-converter.taedonn.com</p>
                    </div>
                    <img src="/web-google-drive-image-converter.png" alt="구글 드라이브 이미지 변환기" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://gitbook.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">GITBOOK TEMPLATE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://gitbook.taedonn.com</p>
                    </div>
                    <img src="/web-gitbook-theme.png" alt="깃북 템플릿" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://resume.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">WEB RESUME</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://resume.taedonn.com</p>
                    </div>
                    <img src="/web-resume.png" alt="웹 이력서" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://clone-robomd.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">ROBOMD CLONE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://clone-robomd.taedonn.com</p>
                    </div>
                    <img src="/web-robomd.png" alt="RoboMD 클론 코딩" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://clone-astellnkern.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">ASTELL&KERN CLONE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://clone-astellnkern.taedonn.com</p>
                    </div>
                    <img src="/web-astellnkern.png" alt="Astell&Kern 클론 코딩" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://clone-solaseado.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">SOLASEADO CLONE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://clone-solaseado.taedonn.com</p>
                    </div>
                    <img src="/web-solaseado.png" alt="솔라시도 클론 코딩" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <a href="https://clone-jejuair.taedonn.com" target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">JEJU AIR CLONE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">https://clone-jejuair.taedonn.com</p>
                    </div>
                    <img src="/web-jejuair.png" alt="제주항공 클론 코딩" className="h-[95%] translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                </a>
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
            </div>
        </>
    );
}