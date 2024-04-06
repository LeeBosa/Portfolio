// Next
import Link from 'next/link';

import type { MenuLink } from '@/type/global';

const defaultMenuLink = {
    target: '_self'
}

export default function MenuLink({
    children,
    href,
    target=defaultMenuLink.target
}: MenuLink) {
    return (
        <li>
            <Link href={href} target={target} className="group block p-3 text-xs font-semibold text-white">
                {children}
                <div className="group-hover:w-full w-0 h-px mt-0.5 bg-white duration-200"></div>
            </Link>
        </li>
    )
}