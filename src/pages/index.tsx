// 훅
import { useRef, useState, useEffect } from "react";

const Index = ({params}: any) => {
    return (
        <>
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