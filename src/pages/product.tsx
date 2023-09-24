/* eslint-disable @next/next/no-img-element */
// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

export default function Product () {
    const data: any = [
        {
            name: "UD CHAIR V2",
            description: "DIY Furniture Project - Chair",
            img: "/product-ud-chair-2.png"
        },
        {
            name: "UD CHAIR V1",
            description: "DIY Furniture Project - Chair",
            img: "/product-ud-chair-1.png"
        },
        {
            name: "STACK UP - TABLE",
            description: "DIY Furniture Project - Table",
            img: "/product-stack-table.png"
        },
        {
            name: "STACK UP - STOOL",
            description: "DIY Furniture Project - Stool",
            img: "/product-stack-stool.png"
        },
        {
            name: "SLIDE'M",
            description: "DIY Furniture Project - Desk",
            img: "/product-slide-m.png"
        },
        {
            name: "PATH",
            description: "DIY Furniture Project - Shelf",
            img: "/product-shelf.png"
        },
        {
            name: "CUSTABLE",
            description: "DIY Furniture Project - Table",
            img: "/product-custable.png"
        },
        {
            name: "FORMATT",
            description: "DIY Furniture Project - Mattress",
            img: "/product-formatt.png"
        },
        {
            name: "COSMO",
            description: "Johnson Controls' Smart Home Assistant",
            img: "/product-cosmo.png"
        },
        {
            name: "CARDBOARD LIGHT",
            description: "Cardboard Upcycling Project V3",
            img: "/product-cardboard-light.png"
        },
        {
            name: "CARDBOARD TABLE",
            description: "Cardboard Upcycling Project V2",
            img: "/product-cardboard-table.png"
        },
        {
            name: "CARDBOARD CHAIR",
            description: "Cardboard Upcycling Project V1",
            img: "/product-cardboard-chair.png"
        },
    ];

    return (
        <>
            <NextSeo title={"T A E D O N N · 제품 디자인"}/>
            <Header theme={"light"}/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[100px] tlg:pt-[80px] tsm:pt-[60px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                {
                    data.map((dataMap: any) => {
                        return (
                            <div key={dataMap.name} className="portfolio-box w-[calc(25%-12px)] tlg:w-[calc(50%-8px)] tsm:w-[100%] h-[16vw] tlg:h-[28vw] tsm:h-[50vw] relative flex flex-row justify-center items-center bg-theme-2 mt-[16px] tsm:mt-[12px] group cursor-pointer">
                                <div className="w-[100%] h-[100%] absolute z-10 left-0 top-0 flex flex-col justify-center items-center bg-theme-2/0 group-hover:bg-theme-2/80 tlg:group-hover:bg-transparent duration-300">
                                    <p className="text-[1.04vw] text-theme-10/0 group-hover:text-theme-10 tlg:group-hover:text-transparent font-extrabold tracking-widest translate-y-[1vw] group-hover:translate-y-0 duration-200">{dataMap.name}</p>
                                    <p className="text-[0.83vw] text-theme-10/0 group-hover:text-theme-10/60 tlg:group-hover:text-transparent text-center font-normal tracking-tight mt-[0.21vw] translate-y-[1vw] group-hover:translate-y-0 duration-200 delay-100">{dataMap.description}</p>
                                </div>
                                <img src={dataMap.img} alt={dataMap.name} className="h-[80%] max-w-[80%] object-contain"/>
                            </div>
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