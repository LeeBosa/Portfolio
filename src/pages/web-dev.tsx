/* eslint-disable @next/next/no-img-element */
// 훅
import Link from "next/link";
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

// 데이터
import { FetchData } from "./api/data";

const WebDev = ({params}: any) => {
    const data = params.data;

    return (
        <>
            <NextSeo title={"T A E D O N N · 웹 개발"}/>
            <Header theme={"light"}/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[100px] tlg:pt-[80px] tsm:pt-[60px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                {
                    data.map((dataMap: any) => {
                        return (
                            <div key={dataMap.name} className="data-box w-[calc(25%-0.63vw)] txl:w-[calc(33.3%-0.63vw)] tlg:w-[calc(50%-0.42vw)] tsm:w-[100%] mt-[2.8vw] flex flex-col">
                                <div className="w-[100%] pt-[1.46vw] pb-0 px-[4.17vw] bg-theme-2">
                                    <img src={dataMap.img} alt={dataMap.name} className="w-[100%]"/>
                                </div>
                                <div className="text-[0.63vw] text-theme-7 mt-[0.63vw]">TITLE</div>
                                <div className="text-[0.83vw] text-theme-10 font-bold mt-[0.2vw]">{dataMap.name}</div>
                                <div className="text-[0.63vw] text-theme-7 mt-[1.46vw]">DESCRIPTION</div>
                                <div className="description text-[0.83vw] text-theme-10 font-medium mt-[0.2vw]">{dataMap.description}</div>
                                {
                                    dataMap.github_link_yn === true
                                    ? <a href={dataMap.github_link} target="_blank" className="text-[0.63vw] text-theme-blue mt-[0.28vw] hover:underline tlg:underline">MORE</a>
                                    : <></>
                                }
                                <div className="text-[0.63vw] text-theme-7 mt-[1.46vw]">STACKS</div>
                                <div className="flex flex-wrap mt-[0.2vw]">
                                    {
                                        dataMap.stacks && dataMap.stacks.map((stack: any) => {
                                            return (
                                                <>
                                                    <div style={{backgroundColor: stack.bgColor, color: stack.txtColor}} className="text-[0.63vw] font-bold rounded-full px-[0.63vw] py-[0.2vw] mb-[0.28vw] mr-[0.28vw]">{stack.stack}</div>  
                                                </>  
                                            )
                                        })
                                    }
                                </div>
                                <div className="text-[0.63vw] text-theme-7 mt-[1.46vw]">LINK</div>
                                <div className="flex items-center mt-[0.2vw]">
                                    {
                                        dataMap.github_link_yn === true
                                        ? <>
                                            <a href={dataMap.github_link} target="_blank" className="text-[0.63vw] text-theme-blue hover:underline tlg:underline">VIEW IN GITHUB</a>
                                            <div className="mx-[0.2vw]">·</div>
                                        </> : <></>
                                    }
                                    <a href={dataMap.url} target="_blank" className="text-[0.63vw] text-theme-blue hover:underline tlg:underline">VISIT WEBSITE</a>
                                </div>
                                <div className="w-[1.04vw] h-[2px] bg-theme-5 mt-[0.63vw]"></div>
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

export async function getServerSideProps(ctx: any) {
    try {
        // 데이터 불러오기
        const data = await FetchData('web-dev');
        
        return {
            props: {
                params: {
                    data: data
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default WebDev;