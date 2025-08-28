export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient': 'linear-gradient(183deg, rgba(33,117,254,1) 0%, rgba(11,92,254,1) 29%, rgba(150,72,246,1) 100%)',
            }
        },
    },
    plugins: [],
}