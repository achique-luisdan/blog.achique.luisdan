import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesMetadata } from '../utils/reader-mdx'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Achique Luis Daniel🍊 | Frontend, Planificación y Autocuidado</title>
        <meta name="description" content="Blog sobre Desarrollo Web Frontend, Planificación y Autocuidado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container">
        <ul>
          {posts.map ((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`}>
                <h3> 
                {post.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps(){
  const posts = await getAllFilesMetadata();
  return {
    props: { posts }
  }
}