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
                "theme-white-1": "#FFFFFF",
                "theme-white-2": "#F9F9F9",
                "theme-white-3": "#E9EAEE",
                "theme-dark-1": "#000000",
                "theme-dark-2": "#202124",
                "theme-jejuair": "#F15A22"
            },
            width: {
                "content": "max-content"
            },
        },
    },
    plugins: [],
}