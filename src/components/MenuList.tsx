import type { MenuList } from '@/type/global';

const defaultMenuList = {
    hoverEffect: true
}

export default function Menu({
    children,
    name,
    hoverEffect=defaultMenuList.hoverEffect
}: MenuList) {
    return (
        <li className="relative group p-3 text-xs font-semibold cursor-pointer">
            <div className="flex items-center gap-1.5 text-d-g">
                {name}
                <i className={`${hoverEffect && 'group-hover:rotate-180'} fa-solid fa-caret-down duration-200`}></i>
            </div>
            {
                hoverEffect &&
                <div className="group-hover:w-full w-0 h-px mt-0.5 bg-d-g duration-200"></div>
            }
            <ul className="hidden group-hover:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full p-1.5 rounded-lg bg-d-2">
                {children}
            </ul>
        </li>
    )
}