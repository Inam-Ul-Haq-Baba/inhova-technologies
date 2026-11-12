import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

// Allow JSX syntax inside .js files
const transformJsxInJs = () => ({
    name: "transform-jsx-in-js",
    enforce: "pre",

    async transform(code, id) {
        const filePath = id.split("?")[0];

        // Only process JavaScript files inside src
        if (!filePath.includes("/src/") || !filePath.endsWith(".js")) {
            return null;
        }

        return await transformWithOxc(code, filePath, {
            lang: "jsx",
        });
    },
});

export default defineConfig({
    plugins: [
        react(),
        transformJsxInJs(),
    ],
});
