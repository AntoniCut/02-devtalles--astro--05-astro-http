/*
    *  -----------------------------------------------------  *
    *  -----  astro.config.mjs  --  /astro.config.mjs  -----  *
    *  -----------------------------------------------------  *
*/

/// <reference path="./types/types.d.js" />
/// <reference path="./types/global.d.ts" />

// @ts-check

import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

//  -----  configuración principal de astro  -----
export default defineConfig({
    
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
    
    adapter: node({
        mode: "standalone",
    }),
    
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Atkinson",
            cssVariable: "--font-atkinson",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/atkinson-regular.woff"],
                        weight: 400,
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: ["./src/assets/fonts/atkinson-bold.woff"],
                        weight: 700,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
    ],
});
