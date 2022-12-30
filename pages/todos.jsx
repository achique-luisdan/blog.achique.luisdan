import Head from 'next/head';

import { getAllFilesMetadata } from '../utils/reader-mdx';
import Posts from '../components/Posts';

export default function Todos({ posts }) {
  return (
    <>
      <Head>
        <title>Achique Luis Daniel🍊 | Frontend, Planificación y Autocuidado</title>
        <meta name="description" content="Blog sobre Desarrollo Web Frontend, Planificación y Autocuidado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container">
        <h1> Todos los Artículos </h1>
        <Posts posts={posts} all="true"></Posts>
      </main>
    </>
  );
}

export async function getStaticProps(){
  const posts = await getAllFilesMetadata(-1);
  return {
    props: { posts }
  };
}