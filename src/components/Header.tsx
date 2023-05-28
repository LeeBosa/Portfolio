export default function Header () {
    return (
        <>
            <header className="w-[100%] h-[120px] tlg:h-[100px] tsm:h-[80px] fixed left-0 top-0 z-20 flex flex-row justify-between items-center px-[48px] tlg:px-[36px] tsm:px-[24px] backdrop-blur bg-theme-white-1/80">
                <a href="/"><h1 className="block p-[12px] tsm:p-0 text-[13px] font-semibold">T A E D O N N</h1></a>
                <ul className="flex flex-row justify-end items-center">
                    <a href="/web-dev" className="block p-[12px] tsm:p-0 font-semibold text-[11px] text-end text-theme-dark-2 tracking-widest">
                        <li>WEB-DEV</li>
                    </a>
                    <a href="/product" className="block p-[12px] tsm:p-0 tsm:ml-[12px] font-semibold text-[11px] text-end text-theme-dark-2 tracking-widest">
                        <li>PRODUCT</li>
                    </a>
                    <a href="/about" className="block p-[12px] tsm:p-0 tsm:ml-[12px] font-semibold text-[11px] text-end text-theme-dark-2 tracking-widest">
                        <li>ABOUT</li>
                    </a>
                </ul>
            </header>
        </>
    )
}