import { MDXRemote } from "next-mdx-remote";
import Posts from "../components/Posts";
import Head from 'next/head';
import { getFileBySlug, getAllFilesMetadata } from "../utils/reader-mdx";
import { Title } from "../components/Title";

export default function Post ({source, frontmatter, posts}) {
  console.log (frontmatter);
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon"  href="/favicon.png" />
      </Head>
      
      <main className="content">
        <Title content={frontmatter} isTag={ frontmatter.tag === 'is' }/>
        <MDXRemote { ...source} />
        <Posts posts={posts}/>
      </main>
    </>
  );
}

export async function getStaticProps ({ params }){
  const {source, frontmatter} = await getFileBySlug(params.slug);
  const posts = await getAllFilesMetadata();
  const postsByTag = posts.filter (post => {
    return post.tag === params.slug;
  });
  return {
    props: { source, frontmatter, posts: postsByTag },
  };
}

export async function getStaticPaths (){
  const posts = await getAllFilesMetadata();
  let tags = [
    {
      name: 'HTML',
      slug: 'html'
    },
    {
      name: 'CSS',
      slug: 'css'
    },
  ];
  tags.map (tag => {
    const postByTag = posts.filter (post => {
      return post.tag === tag.slug;
    });
    tag.posts = postByTag;
    tag.qty = postByTag.length;
  });
  let paths = posts.map ((post)=> ({
    params: {
      slug: post.slug,
    }
  }));
  const pathsTags = tags.map ((tag)=> ({
    params: {
      slug: tag.slug,
    }
  }));
  paths = [...paths , ...pathsTags];
  return {
    paths, 
    fallback: false
  };
}