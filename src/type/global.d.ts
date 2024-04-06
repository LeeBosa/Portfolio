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
    hoverEffect?: boolean
}