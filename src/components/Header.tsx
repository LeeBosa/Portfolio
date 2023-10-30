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
                                <li className="flex items-center px-[10px] py-[6px] rounded-[6px] group-hover/sublist:bg-theme-blue duration-200">
                                    <svg className="w-[14px] mr-[8px]" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="120" cy="120" r="116" stroke="#FFFFFF" stroke-width="8"/>
                                        <path d="M75.4204 154.681L82.5658 133.442H108.882L116.035 154.681H125.552L100.395 83.9766H91.1661L65.9941 154.681H75.4204ZM95.8792 94.6455L106.457 126.137H85.0133L95.6216 94.6455H95.8792ZM165.182 147.892H165.447V154.681H173.994V117.127C173.994 105.686 165.553 99.3586 153.944 99.3586C140.79 99.3586 134.319 106.299 133.743 115.832H142.139C142.654 110.391 146.647 106.815 153.634 106.815C160.991 106.815 165.136 110.755 165.136 117.908V123.447H150.785C138.305 123.5 131.675 129.509 131.675 139.041C131.675 149.036 138.926 155.56 149.444 155.56C157.476 155.56 162.446 152.302 165.189 147.899L165.182 147.892ZM151.823 148.157C146.125 148.157 140.79 145.149 140.79 138.731C140.79 133.805 144.003 130.282 151.459 130.282H165.136V136.601C165.136 143.391 159.438 148.157 151.823 148.157Z" fill="#FFFFFF"/>
                                    </svg>
                                    FONTS ARCHIVE
                                </li>
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