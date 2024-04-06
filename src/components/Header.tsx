// Next hooks
import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return (
        <>
            <header className="w-[100%] h-24 tlg:h-16 fixed left-0 top-0 z-20 flex flex-row justify-between items-center px-12 tlg:px-9 tsm:px-5 backdrop-blur">
                <Link href="/" className="group block relative z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 relative">
                            <Image src="/logo.svg" alt="로고" fill className="w-full"/>
                        </div>
                        <h1 className="text-d-g font-semibold">Alding</h1>
                    </div>
                    <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-0.5 tlg:hidden bg-d-g duration-200 mt-0.5"></div>
                </Link>
                <ul className="flex flex-row justify-end items-center tlg:hidden">
                    <li className="relative group/list block p-3 tsm:p-1.5 font-semibold text-xs text-white text-center tracking-widest cursor-pointer">
                        <span className="text-d-g">PROJECTS</span>
                        <i className="fa-solid fa-caret-down w-2 ml-1.5 group-hover/list:rotate-180 group-hover/list:translate-y-0.5 duration-200 text-d-g"></i>
                        <div className="group-hover/list:w-[100%] tlg:group-hover/list:w-0 w-0 h-px bg-d-g duration-200 mt-0.5"></div>
                        <ul className="hidden group-hover/list:block w-content absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[100%] p-1.5 bg-d-2 rounded-lg">
                            <li>
                                <Link href="https://fonts.taedonn.com" target="_blank" rel="noopener noreferrer" className="block group/sublist">
                                    <div className="flex gap-2 items-center text-xs px-2.5 py-1.5 rounded-md group-hover/sublist:bg-d-g duration-200">
                                        <div className="relative w-4 h-4">
                                            <Image src="/logo-fonts-archive.svg" alt="폰트 아카이브 로고" fill sizes="100%" className="object-contain"/>
                                        </div>
                                        폰트 아카이브
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="https://taedonn.tistory.com" target="_blank" rel="noopener noreferrer" className="group block p-3 tsm:p-1.5 font-semibold text-xs text-white text-center tracking-widest">
                            BLOG
                            <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/taedonn" target="_blank" rel="noopener noreferrer" className="group block p-3 tsm:p-1.5 font-semibold text-xs text-white text-center tracking-widest">
                            GITHUB
                            <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="group block p-3 tsm:p-1.5 font-semibold text-white text-xs text-center tracking-widest">
                            ABOUT
                            <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-white duration-200 mt-0.5"></div>
                        </Link>
                    </li>
                </ul>
                <input type="checkbox" id="mobile-menu" className="hidden peer/menu"/>
                <label htmlFor="mobile-menu" className="w-5 h-5 hidden relative z-20 tlg:flex justify-center items-center cursor-pointer">
                    <div className="w-4 h-3.5 flex flex-col justify-between items-center">
                        <div className="menu-bar w-[100%] h-0.5 rounded-0.5 duration-100 bg-white"></div>
                        <div className="menu-bar w-[100%] h-0.5 rounded-0.5 duration-100 bg-white"></div>
                        <div className="menu-bar w-[100%] h-0.5 rounded-0.5 duration-100 bg-white"></div>
                    </div>
                </label>
                <ul className="w-[100%] h-0 peer-checked/menu:h-[calc(100vh-4rem)] absolute left-0 top-0 z-10 hidden tlg:flex flex-col gap-5 font-semibold tracking-widest overflow-hidden duration-200 px-12 tlg:px-9 tsm:px-5 mt-16 text-sm text-white bg-black">
                    <li className="flex flex-col gap-1">
                        <span className="text-d-g">PROJECTS</span>
                        <Link href="https://fonts.taedonn.com" target="_blank" rel="noopener noreferrer" className="block text-xs mt-1.5">
                            <div className="relative w-4 h-4">
                                
                            </div>
                            폰트 아카이브
                        </Link>
                    </li>
                    <li>
                        <Link href="https://taedonn.tistory.com" target="_blank" rel="noopener noreferrer" className="block">BLOG</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/taedonn" target="_blank" rel="noopener noreferrer" className="block">GITHUB</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block">ABOUT</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}