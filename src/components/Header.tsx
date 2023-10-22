export default function Header () {
    return (
        <>
            <header className="bg-theme-11/80 w-[100%] h-[100px] tlg:h-[80px] fixed left-0 top-0 z-20 flex flex-row justify-between items-center px-[48px] tlg:px-[36px] tsm:px-[20px] backdrop-blur">
                <a href="/" className="group block p-[12px] tsm:p-[6px]">
                    <h1 className="block text-[13px] text-theme-1 font-semibold">T A E D O N N</h1>
                    <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-[2px] bg-theme-1 duration-200 mt-[2px]"></div>
                </a>
                <ul className="flex flex-row justify-end items-center">
                    <li className="relative group/list block p-[12px] tsm:p-[6px] font-semibold text-[11px] text-theme-1 text-center tracking-widest cursor-pointer">
                        PROJECTS
                        <i className="fa-solid fa-caret-down w-[8px] ml-[6px] group-hover/list:rotate-180 group-hover/list:translate-y-[2px] duration-200"></i>
                        <div className="group-hover/list:w-[100%] tlg:group-hover/list:w-0 w-0 h-px bg-theme-1 duration-200 mt-[2px]"></div>
                        <ul className="hidden group-hover/list:block w-content absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[100%] p-[6px] bg-theme-10 rounded-[8px]">
                            <a href="https://fonts.taedonn.com" target="_blank" rel="noopener noreferrer" className="block group/sublist">
                                <li className="block px-[10px] py-[6px] rounded-[6px] group-hover/sublist:bg-theme-blue duration-200">FONTS ARCHIVE</li>
                            </a>
                        </ul>
                    </li>
                    <a href="https://taedonn.tistory.com" target="_blank" rel="noopener noreferrer" className="group block p-[12px] tsm:p-[6px] font-semibold text-[11px] text-theme-1 text-center tracking-widest">
                        <li className="block">BLOG</li>
                        <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-theme-1 duration-200 mt-[2px]"></div>
                    </a>
                    <a href="https://github.com/taedonn" target="_blank" rel="noopener noreferrer" className="group block p-[12px] tsm:p-[6px] font-semibold text-[11px] text-theme-1 text-center tracking-widest">
                        <li className="block">GITHUB</li>
                        <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-theme-1 duration-200 mt-[2px]"></div>
                    </a>
                    <a href="/about" className="group block p-[12px] tsm:p-[6px] font-semibold text-theme-1 text-[11px] text-center tracking-widest">
                        <li>ABOUT</li>
                        <div className="group-hover:w-[100%] tlg:group-hover:w-0 w-0 h-px bg-theme-1 duration-200 mt-[2px]"></div>
                    </a>
                </ul>
            </header>
        </>
    )
}