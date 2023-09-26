/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                "txl": { "max": "1280px" },
                "tlg": { "max": "1024px" },
                "tmd": { "max": "768px" },
                "tsm": { "max": "640px" },
            },
            colors: {
                "transparent": "transparent",
                "theme-1": "#FFFFFF",
                "theme-2": "#F9F9F9",
                "theme-3": "#E9EAEE",
                "theme-4": "#DCE0E4",
                "theme-5": "#CCD1D7",
                "theme-6": "#B7BDC3",
                "theme-7": "#9FA4AA",
                "theme-8": "#878B90",
                "theme-9": "#63666A",
                "theme-9": "#3A3A3A",
                "theme-10": "#202020",
                "theme-11": "#000000",
                "theme-blue": "#2F81F7",
                "lang-html": "#E34C26",
                "lang-javascript": "#F1E05A",
                "lang-typescript": "#3178C6",
                "lang-css": "#563D7C",
                "lang-react": "#00D8FF",
                "lang-shell": "#89E051",
                "lang-pug": "#A86454",
            },
            width: {
                "content": "max-content"
            },
            height: {
                "content": "max-content"
            },
            dropShadow: {
                "default": "1px 2px 4px #97989C",
            }
        },
    },
    safelist: [
        { pattern: /(from|via|to)-lang-(html|javascript|typescript|css|react|shell|pug)/ },
        { pattern: /(from|via|to)-(0|5|10|15|20|25|30|35|40|45|50|55|60|65|70|75|80|85|90|95|100|)/ }
    ],
    plugins: [],
}