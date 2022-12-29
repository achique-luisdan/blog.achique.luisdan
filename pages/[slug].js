import { MDXRemote } from "next-mdx-remote";

import { getFileBySlug, getAllFilesMetadata } from "../utils/reader-mdx"


export const MDXComponents = {
   
};

export default function Post ({source, frontmatter}) {
    return  <MDXRemote compiledSource={source.compiledSource}   />
}

export async function getStaticProps ({ params }){
    const {source, frontmatter} = await getFileBySlug(params.slug);
    return {
        props: { source, frontmatter },
    }
}

export async function getStaticPaths (){
    const posts = await getAllFilesMetadata();
   
    const paths = posts.map ((post)=> ({
        params: {
            slug: post.slug
        }
    }))
    return {
        paths, 
        fallback: false
    }
}