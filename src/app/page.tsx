// Components
import SpinnerMain from "@/components/SpinnerMain";

export default function Index () {
    return (
        <div className="w-full h-full absolute pt-16 lg:pt-24">
            <SpinnerMain/>
            <span className="spinner-square"></span>
            <span className="spinner-circle"></span>
            <span className="spinner-code"></span>
            <span className="spinner-bar"></span>
        </div>
    );
}