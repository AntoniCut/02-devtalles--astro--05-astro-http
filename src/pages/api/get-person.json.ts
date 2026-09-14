/*
 *  -----------------------------------------------------------------------  *
 *  -----  get-person.json.ts  --  /src/pages/api/get-person.json.ts  -----  *
 *  -----------------------------------------------------------------------  *
 */


import type { APIRoute } from "astro";


/**
 * ----------------------------------------
 * -----  `GET({ params, request })`  -----
 * ----------------------------------------
 */
export const GET: APIRoute = async ({ params, request }) => {
    
    const data = { 
        name: "John Doe", 
        age: 30
    };

    return new Response(JSON.stringify(data), {
        status: 400,
        headers: { "Content-Type": "application/json" },
    });
    
};