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
                "theme-blue": "#2F81F7"
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
    plugins: [],
}