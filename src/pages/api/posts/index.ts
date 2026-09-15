/*
     *  ---------------------------------------------------------  *
     *  -----  index.ts  --  /src/pages/api/posts/index.ts  -----  *
     *  ---------------------------------------------------------  *
 */


import type { APIRoute } from "astro";
import { getCollection } from "astro:content";


/** - `Deshabilita la prerenderización de la página`. */
export const prerender = false;


/**
 * ----------------------------------------
 * -----  `GET({ params, request })`  -----
 * ----------------------------------------
 * - Describe el endpoint GET utilizado para obtener todos los posts o un post específico.
 */
export const GET: APIRoute = async ({ params, request }) => {
    

    //  -----  Obtiene los parámetros de la URL.  -----
    const { searchParams } = new URL(request.url);
    
    /** - `Obtiene el id del post desde los parámetros de la URL`. */
    const id = searchParams.get("id");

    /** - `Obtiene los posts de la colección "blog"`. */
    const posts = await getCollection("blog");


    //  -----  Si existe un id, obtiene el post correspondiente.  -----
    if (id) {
        
        /** - `Busca el post correspondiente al id`. */
        const post = posts.find((post) => post.id === id);

        //  -----  Si no existe el post, devuelve un error.  -----
        if(!post) {
            return new Response(JSON.stringify({ error: `Post with id ${id} not found` }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
        
        //  -----  Devuelve el post correspondiente al id.  -----
        return new Response(JSON.stringify(post), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
   

    //  -----  Imprime los datos en la consola.  -----
    console.log('request => \n', request);
    console.log('params => \n', params);
    console.log('posts => \n', posts);


    //  -----  Devuelve todos los posts.  -----
    return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
    });

};
