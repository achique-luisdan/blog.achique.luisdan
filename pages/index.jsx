import Head from 'next/head';
import Link from 'next/link';

import { getAllFilesMetadata } from '../utils/reader-mdx';
import Posts from '../components/Posts';
import { Sidebar } from '../components/Sidebar';

export default function Home({ posts, tags }) {
  return (
    <>
      <Head>
        <title>Achique Luis Daniel🍊 | Frontend, Planificación y Autocuidado</title>
        <meta name="description" content="Blog sobre Desarrollo Web Frontend, Planificación y Autocuidado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon"  href="/favicon.png" />
      </Head>
      
      <main className="container home">
        <Sidebar tags={tags} />
        <section>
          <h1> Últimos Artículos </h1>
          <Posts posts={posts}></Posts>
          <Link href={'/todos'}>
            <h2 className='primary'> 
              Ver todos 
            </h2>
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(){
  const posts = await getAllFilesMetadata(6);
  let tags = [
    {
      name: 'HTML',
      slug: 'html'
    },
    {
      name: 'CSS',
      slug: 'css'
    },
    {
      name: 'JavaScript',
      slug: 'javascript'
    },
  ];
  tags.map (tag => {
    const postByTag = posts.filter (post => {
      return post.tag === tag.slug;
    });
    tag.qty = postByTag.length;
  });
  return {
    props: { posts, tags }
  };
}