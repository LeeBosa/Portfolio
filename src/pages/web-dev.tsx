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
                    data && data.map((dataMap: any, index: string | number) => {
                        return (
                            <>
                                <div key={`${index}-${dataMap.id}`} className="data-box relative rounded-[0.63vw] txl:rounded-[0.95vw] tlg:rounded-[1.18vw] tsm:rounded-[1.89vw] w-[calc(25%-0.63vw)] txl:w-[calc(33.3%-0.7vw)] tlg:w-[calc(50%-0.78vw)] tsm:w-[100%] pb-[1.46vw] txl:pb-[2.19vw] tlg:pb-[2.74vw] tsm:pb-[4.38vw] mt-[0.8vw] txl:mt-[1.05vw] tlg:mt-[1.5vw] tsm:mt-[2.4vw] flex flex-col border border-theme-4 overflow-hidden">
                                    <div className="w-[100%] pt-[1.46vw] txl:pt-[2.19vw] tlg:pt-[2.74vw] tsm:pt-[4.38vw] pb-0 px-[4.17vw] txl:px-[6.23vw] tlg:px-[7.82vw] tsm:px-[12.51vw] bg-theme-2">
                                        <img src={dataMap.img} alt={dataMap.name} className="w-[100%]"/>
                                    </div>
                                    <div className="w-[100%] p-[1.46vw] txl:p-[2.19vw] tlg:p-[2.74vw] tsm:p-[4.38vw] pb-[2.71vw] txl:pb-[4.06vw] tlg:pb-[5.08vw] tsm:pb-[8.13vw]">
                                        <div className="w-content border-b border-theme-8 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-8">PROJECT</div>
                                        <div className="text-[0.94vw] txl:text-[1.41vw] tlg:text-[1.76vw] tsm:text-[2.81vw] text-theme-10 font-bold mt-[0.4vw] txl:mt-[0.6vw] tlg:mt-[0.75vw] tsm:mt-[1.2vw]">{dataMap.name}</div>
                                        <div className="description text-[0.83vw] txl:text-[1.25vw] tlg:text-[1.56vw] tsm:text-[2.49vw] text-theme-9">{dataMap.description}</div>
                                        <div className="w-content border-b border-theme-8 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-8 mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] mb-[0.4vw] txl:mb-[0.6vw] tlg:mb-[0.75vw] tsm:mb-[1.2vw]">STACKS</div>
                                        <div className="flex flex-wrap mt-[0.5vw] txl:mt-[0.75vw] tlg:mt-[0.94vw] tsm:mt-[1.5vw]">
                                            {
                                                dataMap.stacks && dataMap.stacks.map((stack: any, index: string | number) => {
                                                    return (
                                                        <div key={`${index}-${stack.id}`} style={{backgroundColor: stack.bgColor, color: stack.txtColor}} className="text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] font-bold rounded-full px-[0.63vw] txl:px-[0.94vw] tlg:px-[1.18vw] tsm:px-[1.89vw] py-[0.2vw] txl:py-[0.3vw] tlg:py-[0.38vw] tsm:py-[0.6vw] mb-[0.28vw] txl:mb-[0.42vw] tlg:mb-[0.53vw] tsm:mb-[0.84vw] mr-[0.28vw] txl:mr-[0.42vw] tlg:mr-[0.53vw] tsm:mr-[0.84vw]">{stack.stack}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="flex items-center absolute left-[1.46vw] txl:left-[2.19vw] tlg:left-[2.74vw] tsm:left-[4.38vw] bottom-[1.46vw] txl:bottom-[2.19vw] tlg:bottom-[2.74vw] tsm:bottom-[4.38vw] text-theme-blue text-[0.83vw] txl:text-[1.25vw] tlg:text-[1.56vw] tsm:text-[2.49vw] mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] cursor-pointer">
                                            <a href={dataMap.url} className="group flex items-center mr-[0.83vw] txl:mr-[1.25vw] tlg:mr-[1.56vw] tsm:mr-[2.5vw]">
                                                <svg className="w-[0.83vw] txl:w-[1.17vw] tlg:w-[1.46vw] tsm:w-[2.34vw] mr-[0.1vw] txl:mr-[0.16vw] tlg:mr-[0.2vw] tsm:mr-[0.31vw] group-hover:rotate-[45deg] tlg:group-hover:rotate-0 group-hover:translate-x-[-0.21vw] tlg:group-hover:translate-x-0 duration-200 tlg:duration-0 fill-theme-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                                                </svg>
                                                <div className="flex flex-col">
                                                    VISIT WEBSITE
                                                    <div className="w-0 tlg:w-[100%] group-hover:w-[100%] h-px bg-theme-blue duration-200 tlg:duration-0"></div>
                                                </div>
                                            </a>
                                            {
                                                dataMap.github_link_yn
                                                ? <a href={dataMap.github_link} className="group flex items-center">
                                                    <svg className="w-[0.83vw] txl:w-[1.17vw] tlg:w-[1.46vw] tsm:w-[2.34vw] mr-[0.1vw] txl:mr-[0.16vw] tlg:mr-[0.2vw] tsm:mr-[0.31vw] group-hover:rotate-[45deg] tlg:group-hover:rotate-0 group-hover:translate-x-[-0.21vw] tlg:group-hover:translate-x-0 duration-200 tlg:duration-0 fill-theme-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                    </svg>
                                                    <div className="flex flex-col">
                                                        VIEW IN GITHUB
                                                        <div className="w-0 tlg:w-[100%] group-hover:w-[100%] h-px bg-theme-blue duration-200 tlg:duration-0"></div>
                                                    </div>
                                                </a> : <></>
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