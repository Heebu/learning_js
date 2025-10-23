/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5fdfb',
                    100: '#e8fbf6',
                    500: '#06b6d4', // cyan-500 style
                    700: '#0891b2'
                }
            },
            fontFamily: {
                display: ['Poppins', 'ui-sans-serif', 'system-ui'],
                body: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        },
    },
    plugins: [],
}
