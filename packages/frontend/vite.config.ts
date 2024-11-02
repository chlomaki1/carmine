import { defineConfig } from "vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";
import autoImport from "unplugin-auto-import/vite";
import vueDevTools from "vite-plugin-vue-devtools";
import inspect from "vite-plugin-inspect";
import unfonts from "unplugin-fonts/vite";

export default defineConfig({
    server: {
        port: 3000
    },
    plugins: [
        vueRouter({
            extensions: [".page.vue", ".vue"],
            importMode: "async",
            routesFolder: [
                {
                    src: "./src/pages"
                }
            ],
            exclude: [
                "**/*.component.vue"
            ]
        }),
        vue(),
        unfonts({
            google: {
                families: ["Montserrat", "Inter"]
            }
        }),
        autoImport({
            imports: [
                VueRouterAutoImports
            ]
        }),
        vueDevTools(),
        inspect()
    ]
});
