import React, {  } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getAllFilesMetadata } from '../utils/reader-mdx';
import Posts from '../components/Posts';
import { Sidebar } from '../components/Sidebar';

export default function Home({ posts, tags, quantityPosts }) {

  return (
    <>
      <Head>
        <title>Achique Luis Daniel🍊| Frontend, Planificación y Autocuidado</title>
        <meta name="description" content="Blog sobre Desarrollo Web Frontend, Planificación y Autocuidado" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon"  href="/favicon.png" />
      </Head>

      <main className="container home">
        <Sidebar tags={tags} quantityPosts={quantityPosts} />
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
  const posts = await getAllFilesMetadata(8);
  const allPosts = await getAllFilesMetadata();
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
    {
      name: 'Planificación',
      slug: 'planning'
    },
    {
      name: 'Autocuidado',
      slug: 'selfcare'
    },
    {
      name: 'SQL',
      slug: 'sql'
    },
    {
      name: 'Python',
      slug: 'python'
    },
  ];
  tags.map (tag => {
    const postByTag = allPosts.filter (post => {
      return post.tag === tag.slug;
    });
    tag.qty = postByTag.length;
  });
  let titles = await getAllFilesMetadata();
  titles.map (element => {
    delete element.date;
    delete element.tag;
    delete element.description;
    delete element.reading;
    return element;
  });
  const quantityPosts = allPosts.length;
  return {
    props: { posts, tags, titles, quantityPosts }
  };
}