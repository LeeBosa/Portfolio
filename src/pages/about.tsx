// Components
import Header from "@/components/Header";

export default function About () {
    return (
        <>
            <Header/>
            <div className="about w-full h-full absolute flex flex-col justify-center items-center pt-16 lg:pt-24">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-40 h-40 border border-white rounded-full flex flex-col justify-center items-center">
                        <span className="spinner-square"></span>
                    </div>
                    <div className="text-white text-center tracking-wide">
                        <h2 className="text-xl font-semibold tracking-widest mt-16">TAEHO LEE&#40;TAEDONN&#41;</h2>
                        <div className="text-sm font-light mt-2">taedonn@taedonn.com</div>
                        <div className="flex justify-center items-center mt-16">
                            <h3 className="w-20 text-xs tracking-wider font-light">2021~{new Date().getFullYear()}</h3>
                            <h3 className="text-xs tracking-wider font-light">iCLAVE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}