// Next
import Link from 'next/link';
import Image from 'next/image';

import type { MenuOption } from '@/type/global';

const defaultMenuOption = {
    target: '_self',
    icon: 'fa-solid fa-bolt',
    image: ''
}

export default function MenuOption({
    children,
    href,
    target=defaultMenuOption.target,
    icon=defaultMenuOption.icon,
    image=defaultMenuOption.image
}: MenuOption) {
    return (
        <li className="text-xs">
            <Link href={href} target={target}>
                <div className="group/option px-4 py-2 flex gap-4 items-center rounded-lg border border-d-6 hover:border-d-g text-d-g bg-d-2 duration-200">
                    <div className="w-7 h-7 relative shrink-0 flex justify-center items-center rounded-full border border-d-6 group-hover/option:border-d-g duration-200">
                        {
                            image === ""
                            ? <i className={`ml-px ${icon}`}></i>
                            : <Image src={image} alt="option image" fill/>
                        }
                    </div>
                    <div className="w-full text-white">{children}</div>
                </div>
            </Link>
        </li>
    )
}