import type { Header } from '@/type/global';

const defaultHeader = {
    height: 5,
    heightUnit: 'rem'
}

export default function Header ({
	children,
    height=defaultHeader.height,
    heightUnit=defaultHeader.heightUnit
}: Header) {
    return (
        <header style={{height: `${height}${heightUnit}`}} className="w-full fixed z-20 flex justify-between items-center px-5 lg:px-12">
            {children}
        </header>
    )
}