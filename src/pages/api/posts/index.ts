/*
     *  ---------------------------------------------------------  *
     *  -----  index.ts  --  /src/pages/api/posts/index.ts  -----  *
     *  ---------------------------------------------------------  *
 */


import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

/** - `Deshabilita la prerenderización de la página`. */
//export const prerender = false;


export const GET: APIRoute = async ({ params, request }) => {
    

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");


    /** - `Obtiene los posts de la colección "blog"`. */
    const posts = await getCollection("blog");


    if (id) {
        
        const post = posts.find((post) => post.id === id);

        if(!post) {
            return new Response(JSON.stringify({ error: "Post not found" }), {
                headers: { "Content-Type": "application/json" },
                status: 404,
            });
        }
        
        return new Response(JSON.stringify(post), {
            headers: { "Content-Type": "application/json" },
        });
    }
   


    console.log('request => \n', request);
    console.log('params => \n', params);
    console.log('posts => \n', posts);

    return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
    });

};
