import type { MenuList } from '@/type/global';

const defaultMenuList = {
    width: 100,
    widthUnit: '%',
    hoverEffect: true
}

export default function MenuList({
    children,
    name,
    width=defaultMenuList.width,
    widthUnit=defaultMenuList.widthUnit,
    hoverEffect=defaultMenuList.hoverEffect
}: MenuList) {
    return (
        <li className="relative group p-3 text-xs cursor-pointer">
            <div className="flex items-center gap-1.5 font-semibold text-d-g">
                {name}
                <i className={`${hoverEffect && 'group-hover:rotate-180'} fa-solid fa-caret-down duration-200`}></i>
            </div>
            {
                hoverEffect &&
                <div className="group-hover:w-full w-0 h-px mt-0.5 bg-d-g duration-200"></div>
            }
            <ul style={{width: width + widthUnit}} className="hidden group-hover:flex p-1.5 absolute right-0 bottom-0 translate-y-full flex-col gap-1 rounded-lg bg-d-3/80">
                {children}
            </ul>
        </li>
    )
}