// 훅
import { useRef, useState, useEffect } from "react";

// 컴포넌트
import Header from "@/components/Header";

const Index = ({params}: any) => {
    return (
        <>
            <Header/>
            <div className="w-[100%]">
            </div>
        </>
    );
}

export async function getStaticProps(ctx: any) {
    try {
        return {
            props: { 
                
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default Index;