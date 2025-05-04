import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            components: "/src/components",
            core: "/src/core",
            assets: "/src/assets",
            hooks: "/src/hooks",
            pages: "/src/pages",
            styles: "/src/styles",
            config: "/src/config",
            store: "/src/store",
            shared: "/src/shared",
            routes: "/src/routes",
        },
    },
});
