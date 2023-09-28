/* eslint-disable @next/next/no-img-element */
// 훅
import { NextSeo } from "next-seo";

// 컴포넌트
import Header from "@/components/Header";

// 데이터
import { FetchData } from "./api/data";

const Product = ({params}: any) => {
    // 데이터 불러오기
    const data = params.data;

    return (
        <>
            <NextSeo title={"T A E D O N N · 제품 디자인"}/>
            <Header theme={"light"}/>
            <div className="portfolio w-[100%] flex flex-row flex-wrap justify-between items-start pt-[100px] tlg:pt-[80px] tsm:pt-[60px] pb-[60px] tlg:pb-[48px] tsm:pb-[24px] px-[60px] tlg:px-[48px] tsm:px-[24px]">
                {
                    data.map((dataMap: any) => {
                        return (
                            <div key={`parent-${dataMap.id}`} className="data-box relative rounded-[0.63vw] txl:rounded-[0.95vw] tlg:rounded-[1.18vw] tsm:rounded-[1.89vw] w-[calc(25%-0.63vw)] txl:w-[calc(33.3%-0.7vw)] tlg:w-[calc(50%-0.78vw)] tsm:w-[100%] mt-[0.8vw] txl:mt-[1.05vw] tlg:mt-[1.5vw] tsm:mt-[2.4vw] flex flex-col border border-theme-4 overflow-hidden">
                                <div className="w-[100%] h-[14.58vw] txl:h-[21.88vw] tlg:h-[27.34vw] tsm:h-[43.75vw] flex justify-center py-[1.46vw] txl:py-[2.19vw] tlg:py-[2.74vw] tsm:py-[4.38vw] px-[4.17vw] txl:px-[6.23vw] tlg:px-[7.82vw] tsm:px-[12.51vw] bg-theme-2">
                                    <img src={dataMap.img} alt={dataMap.name} className="h-[100%] object-contain"/>
                                </div>
                                <div className="w-[100%] p-[1.46vw] txl:p-[2.19vw] tlg:p-[2.74vw] tsm:p-[4.38vw]">
                                    <div className="w-content border-b border-theme-9 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-9">PROJECT</div>
                                    <div className="text-[0.94vw] txl:text-[1.41vw] tlg:text-[1.76vw] tsm:text-[2.81vw] text-theme-10 font-bold mt-[0.4vw] txl:mt-[0.6vw] tlg:mt-[0.75vw] tsm:mt-[1.2vw]">{dataMap.name}</div>
                                    <div className="description text-[0.83vw] txl:text-[1.25vw] tlg:text-[1.56vw] tsm:text-[2.49vw] text-theme-9">{dataMap.subtitle}</div>
                                    <div className="w-content border-b border-theme-9 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-9 mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] mb-[0.4vw] txl:mb-[0.6vw] tlg:mb-[0.75vw] tsm:mb-[1.2vw]">DESCRIPTION</div>
                                    <div className="h-[4.9vw] txl:h-[7.35vw] tlg:h-[9.19vw] tsm:h-[14.7vw] bg-theme-2 border border-theme-4 text-theme-8 break-all leading-tight text-[0.83vw] txl:text-[1.25vw] tlg:text-[1.56vw] tsm:text-[2.49vw] rounded-[0.42vw] txl:rounded-[0.63vw] tlg:rounded-[0.78vw] tsm:rounded-[1.25vw] p-[0.83vw] txl:p-[1.25vw] tlg:p-[1.56vw] tsm:p-[2.5vw]">
                                        <div className="product-description">{dataMap.description}</div>
                                    </div>
                                    <div className="w-content border-b border-theme-9 text-[0.63vw] txl:text-[0.95vw] tlg:text-[1.18vw] tsm:text-[1.89vw] text-theme-9 mt-[1.46vw] txl:mt-[2.19vw] tlg:mt-[2.74vw] tsm:mt-[4.38vw] mb-[0.4vw] txl:mb-[0.6vw] tlg:mb-[0.75vw] tsm:mb-[1.2vw]">PROGRAMS</div>
                                    <div className={`w-[100%] flex flex-wrap px-[1.46vw] txl:px-[2.19vw] tlg:px-[2.73vw] tsm:px-[4.38vw] pt-[0.83vw] txl:pt-[1.25vw] tlg:pt-[1.56vw] tsm:pt-[2.5vw] pb-0 rounded-[0.42vw] txl:rounded-[0.63vw] tlg:rounded-[0.78vw] tsm:rounded-[1.25vw] border border-theme-4`}>
                                        {
                                            dataMap.programs && dataMap.programs.map((program: any) => {
                                                return(
                                                    <div key={program.id} className="w-[20%] flex flex-col items-center mb-[0.83vw] txl:mb-[1.25vw] tlg:mb-[1.56vw] tsm:mb-[2.49vw] mr-[0.31vw]">
                                                        <img src={program.img} alt={program.name} className="w-[1.67vw] txl:w-[2.5vw] tlg:w-[3.13vw] tsm:w-[5vw] h-[1.67vw] txl:h-[2.5vw] tlg:h-[3.13vw] tsm:h-[5vw] rounded-full"/>
                                                        <div className="text-[0.63vw] txl:text-[0.94vw] tlg:text-[1.17vw] tsm:text-[1.88vw] text-theme-9 font-bold mt-[0.31vw] txl:mt-[0.47vw] tlg:mt-[0.59vw] tsm:mt-[0.94vw]">{program.name}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
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
        const data = await FetchData('product');
        
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

export default Product;