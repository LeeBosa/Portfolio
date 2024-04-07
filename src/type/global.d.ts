export type Header = {
    children: React.ReactNode,
    height?: number,
    heightUnit?: string
}

export type Logo = {
    src: string,
    name?: string,
    hoverEffect?: boolean
}

export type Menu = {
    children: React.ReactNode
}

export type MenuList = {
    children: React.ReactNode,
    name: string,
    width?: number,
    widthUnit?: string,
    hoverEffect?: boolean
}

export type MenuOption = {
    children: React.ReactNode,
    href: string,
    target?: string,
    icon?: string,
    image?: string
}

export type MenuLink = {
    children: React.ReactNode,
    href: string,
    target?: string
}