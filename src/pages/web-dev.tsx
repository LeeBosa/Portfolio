/* eslint-disable @next/next/no-img-element */
// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

// 데이터
import { FetchData } from "./api/data";

const WebDev = ({params}: any) => {
    // 데이터 불러오기
    const data = params.data;

    return (
        <>
            <NextSeo title={"T A E D O N N · 웹 개발"}/>
            <Header theme={"light"}/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-stretch pt-[100px] tlg:pt-[80px] tsm:pt-[60px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                {
                    data.map((dataMap: any) => {
                        return (
                            <>
                                <div key={dataMap.name} className="data-box w-[calc(25%-0.63vw)] txl:w-[calc(33.3%-0.7vw)] tlg:w-[calc(50%-0.78vw)] tsm:w-[100%] mt-[0.8vw] txl:mt-[1.05vw] tlg:mt-[1.5vw] tsm:mt-[2.2vw] flex flex-col border border-theme-3">
                                    <div className="w-[100%] pt-[1.46vw] txl:pt-[2.19vw] tlg:pt-[2.74vw] tsm:pt-[4.38vw] pb-0 px-[4.17vw] txl:px-[6.23vw] tlg:px-[7.82vw] tsm:px-[12.51vw] bg-theme-2">
                                        <img src={dataMap.img} alt={dataMap.name} className="w-[100%]"/>
                                    </div>
                                    <div className="w-[100%] px-[1.04vw] txl:px-[1.56vw] tlg:px-[1.95vw] tsm:px-[3.12vw] py-[1.46vw] txl:py-[2.19vw] tlg:py-[2.74vw] tsm:py-[4.38vw]">
                                        <div className="w-content border-b border-theme-7 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-7">PROJECT</div>
                                        <div className="text-[0.94vw] txl:text-[1.41vw] tlg:text-[1.76vw] tsm:text-[2.81vw] text-theme-10 font-bold mt-[0.4vw] txl:mt-[0.6vw] tlg:mt-[0.75vw] tsm:mt-[1.2vw]">{dataMap.name}</div>
                                        <div className="description text-[0.83vw] txl:text-[1.25vw] tlg:text-[1.56vw] tsm:text-[2.49vw] text-theme-9 font-medium">{dataMap.description}</div>
                                        {
                                            dataMap.github_link_yn === true
                                            ? <a href={dataMap.github_link} target="_blank" className="block text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-blue mt-[0.28vw] txl:mt-[0.42vw] tlg:mt-[0.53vw] tsm:mt-[0.84vw] hover:underline tlg:underline">MORE</a>
                                            : <></>
                                        }
                                        <div className="w-content border-b border-theme-7 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-7 mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] mb-[0.4vw] txl:mb-[0.6vw] tlg:mb-[0.75vw] tsm:mb-[1.2vw]">STACKS</div>
                                        <div className="flex flex-wrap mt-[0.5vw] txl:mt-[0.75vw] tlg:mt-[0.94vw] tsm:mt-[1.5vw]">
                                            {
                                                dataMap.stacks && dataMap.stacks.map((stack: any) => {
                                                    return (
                                                        <div key={`${dataMap.name}-${stack.stack}`} style={{backgroundColor: stack.bgColor, color: stack.txtColor}} className="text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] font-bold rounded-full px-[0.63vw] txl:px-[0.94vw] tlg:px-[1.18vw] tsm:px-[1.89vw] py-[0.2vw] txl:py-[0.3vw] tlg:py-[0.38vw] tsm:py-[0.6vw] mb-[0.28vw] txl:mb-[0.42vw] tlg:mb-[0.53vw] tsm:mb-[0.84vw] mr-[0.28vw] txl:mr-[0.42vw] tlg:mr-[0.53vw] tsm:mr-[0.84vw]">{stack.stack}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="w-content border-b border-theme-7 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-7 mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] mb-[0.4vw] txl:mb-[0.6vw] tlg:mb-[0.75vw] tsm:mb-[1.2vw]">LINK</div>
                                        <div className="flex items-center">
                                            <a href={dataMap.url} target="_blank" className="block text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-blue hover:underline tlg:underline">VISIT WEBSITE</a>
                                            {
                                                dataMap.github_link_yn === true
                                                ? <>
                                                    <div className="mx-[0.2vw] txl:mx-[0.3vw] tlg:mx-[0.38vw] tsm:mx-[0.6vw]">·</div>
                                                    <a href={dataMap.github_link} target="_blank" className="block text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-blue hover:underline tlg:underline">VIEW IN GITHUB</a>
                                                </> : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
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