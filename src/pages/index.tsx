// 컴포넌트
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";

export default function Index () {
    return (
        <>
            <Header theme={"dark"}/>
            <div className="w-[100%] h-[100vh] relative pt-[120px] tlg:pt-[100px] tsm:pt-[80px] bg-theme-11">
                <span className="square-spinner"></span>
                <span className="circle-spinner"></span>
                <span className="code-spinner"></span>
                <span className="bar-spinner"></span>
                <Spinner/>
            </div>
        </>
    );
}