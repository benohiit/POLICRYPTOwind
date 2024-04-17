/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'bg-red/2': 'rgba(255, 163, 163, 0.5)',
                'bg-black/5': 'rgba(255,255,255,0.2)',
            },
            margin: {
                '1/2': 2
            },
            width: {
                '1/10': "10%"
            }
        },
    },
    plugins: [],
}

