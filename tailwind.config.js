/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                d: {
                    2: "#202020",
                    g: "#40E0D0"
                }
            },
            animation: {
                "expand": "expand 0.6s both"
            },
            keyframes: {
                "expand": {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" }
                },
            },
        },
    },
    plugins: [],
}