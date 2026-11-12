/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            theme:{
                colors:{
                    navy: "#081327",
                    blue: "#0068EC",
                    electric: "#0090FB",
                    light: "#F5F8FF",
                    slate: "#64748B",
                    hover: "#0054C7",
                }
            }
        },
    },
    plugins: [],
};
