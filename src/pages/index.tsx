// 컴포넌트
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

export default function Index () {
    return (
        <>
            <Header/>
            <div className="w-[100%] h-[100%] absolute left-0 top-0 pt-[120px] tlg:pt-[100px] tsm:pt-[80px]">
                <span className="square-spinner"></span>
                <span className="circle-spinner"></span>
                <span className="code-spinner"></span>
                <span className="bar-spinner"></span>
                <Spinner/>
            </div>
        </>
    );
}