// 훅
import Image from "next/image";
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function Product () {
    return (
        <>
            <NextSeo title={"T A E D O N N · 제품 디자인"}/>
            <Header/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[120px] tlg:pt-[100px] tsm:pt-[80px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">UD CHAIR V2</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Chair</p>
                    </div>
                    <Image src="/product-ud-chair-2.png" alt="UD 의자 2" width="400" height="400" className="h-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">UD CHAIR V1</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Chair</p>
                    </div>
                    <Image src="/product-ud-chair-1.png" alt="UD 의자 1" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">STACK UP - TABLE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Table</p>
                    </div>
                    <Image src="/product-stack-table.png" alt="스택업 - 책상" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">STACK UP - STOOL</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Stool</p>
                    </div>
                    <Image src="/product-stack-stool.png" alt="스택업 - 의자" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">SLIDE&#39;M</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Desk</p>
                    </div>
                    <Image src="/product-slide-m.png" alt="슬라이뎀" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">PATH</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Shelf</p>
                    </div>
                    <Image src="/product-shelf.png" alt="패스" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">CUSTABLE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Table</p>
                    </div>
                    <Image src="/product-custable.png" alt="커스터블" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">FORMATT</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">DIY Furniture Project - Mattress</p>
                    </div>
                    <Image src="/product-formatt.png" alt="포멧" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">COSMO</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">Johnson Controls&#39; Smart Home Assistant</p>
                    </div>
                    <Image src="/product-cosmo.png" alt="코스모" width="400" height="400" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent text-center font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">CARDBOARD LIGHT</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">Cardboard Upcycling Project V3</p>
                    </div>
                    <Image src="/product-cardboard-light.png" width="400" height="400" alt="카드보드 샹들리에" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent text-center font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">CARDBOARD TABLE</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">Cardboard Upcycling Project V2</p>
                    </div>
                    <Image src="/product-cardboard-table.png" width="400" height="400" alt="카드보드 책상" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                    <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                        <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent text-center font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">CARDBOARD CHAIR</p>
                        <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">Cardboard Upcycling Project V1</p>
                    </div>
                    <Image src="/product-cardboard-chair.png" width="400" height="400" alt="카드보드 의자" className="h-[80%] max-w-[80%] object-contain"/>
                </div>
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
            </div>
        </>
    );
}