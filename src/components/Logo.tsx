// Next hooks
import Link from 'next/link';
import Image from 'next/image';

import type { Logo } from '@/type/global';

const defaultLogo = {
    name: '',
    hoverEffect: true
}

export default function Logo ({
    src,
    name=defaultLogo.name,
    hoverEffect=defaultLogo.hoverEffect
}: Logo) {
    return (
        <Link href="/" className="group">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 relative">
                    <Image src={src} alt="logo" fill/>
                </div>
                {
                    name !== "" &&
                    <h1 className="text-d-g font-semibold">{name}</h1>
                }
            </div>
            {
                hoverEffect &&
                <div className="w-0 group-hover:w-full h-0.5 mt-0.5 bg-d-g duration-200"></div>
            }
        </Link>
    )
}