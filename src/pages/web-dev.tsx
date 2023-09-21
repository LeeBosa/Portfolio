/* eslint-disable @next/next/no-img-element */
// 훅
import Link from "next/link";
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function WebDev () {
    const data: any = [
        {
            name: "NEXTJS-AWS-TEST",
            url: "https://nextjs-aws-test.vercel.app",
            img: "/web-nextjs-aws-test.png"
        },
        {
            name: "FONTS ARCHIVE",
            url: "https://fonts.taedonn.com",
            img: "/web-fonts-archive.png"
        },
        {
            name: "GDRIVE IMAGE CONVERTER",
            url: "https://gdrive-img-converter.taedonn.com",
            img: "/web-google-drive-image-converter.png"
        },
        {
            name: "GITBOOK TEMPLATE",
            url: "https://gitbook.taedonn.com",
            img: "/web-gitbook-theme.png"
        },
        {
            name: "WEB RESUME",
            url: "https://resume.taedonn.com",
            img: "/web-resume.png"
        },
        {
            name: "ROBOMD CLONE",
            url: "https://clone-robomd.taedonn.com",
            img: "/web-robomd.png"
        },
        {
            name: "ASTELL&KERN CLONE",
            url: "https://clone-astellnkern.taedonn.com",
            img: "/web-astellnkern.png"
        },
        {
            name: "SOLASEADO CLONE",
            url: "https://clone-solaseado.taedonn.com",
            img: "/web-solaseado.png"
        },
        {
            name: "JEJU AIR CLONE",
            url: "https://clone-jejuair.taedonn.com",
            img: "/web-jejuair.png"
        },
    ]

    return (
        <>
            <NextSeo title={"T A E D O N N · 웹 개발"}/>
            <Header theme={"light"}/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[120px] tlg:pt-[100px] tsm:pt-[80px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                {
                    data.map((dataMap: any) => {
                        return (
                            <Link key={dataMap.name} href={dataMap.url} target="_blank" className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-white-2 mt-[16px] tsm:mt-[12px] group">
                                <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-white-2/0 group-hover:bg-theme-white-2/80 tlg:group-hover:bg-transparent duration-300">
                                    <p className="text-[1.04vw] text-theme-dark-2/0 group-hover:text-theme-dark-2 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">{dataMap.name}</p>
                                    <p className="text-[0.83vw] text-theme-dark-2/0 group-hover:text-theme-dark-2/60 tlg:group-hover:text-transparent font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">{dataMap.url}</p>
                                </div>
                                <img src={dataMap.img} alt={dataMap.name} className="h-[95%] object-contain translate-x-[0.5vw] translate-y-[1vw] tlg:translate-y-[2vw] tsm:translate-y-[3.5vw]"/>
                            </Link>
                        )
                    })
                }
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
                <div className="w-[calc(25%-12px)]"></div>
            </div>
        </>
    );
}