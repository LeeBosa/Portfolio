import type { Menu } from '@/type/global';

export default function Menu({
    children
}: Menu) {
    return (
        <ul className="flex">
            {children}
        </ul>
    )
}