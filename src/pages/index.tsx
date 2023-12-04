// 컴포넌트
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

export default function Index () {
    return (
        <>
            <Header/>
            <div className="w-[100%] h-[100%] absolute left-0 top-0 pt-[100px] tlg:pt-[60px]">
                <span className="square-spinner"></span>
                <span className="circle-spinner"></span>
                <span className="code-spinner"></span>
                <span className="bar-spinner"></span>
                <Spinner/>
            </div>
        </>
    );
}