/*
 *  -------------------------------------------  *
 *  -----  consts.ts  --  /src/consts.ts  -----  *
 *  -------------------------------------------  *
 */

import type { SiteMeta } from "@/types/types";

/** - `título global del sitio` */
export const SITE_TITLE = "Astro Blog";

/** - `descripción global del sitio` */
export const SITE_DESCRIPTION = "Welcome to my website!";

/** - `metadatos globales del sitio` */
export const SITE_META: SiteMeta = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
};
