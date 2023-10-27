import { MDXRemote } from "next-mdx-remote";
import Posts from "../components/Posts";
import CardAuthor from "../components/CardAuthor";
import Head from 'next/head';
import { getFileBySlug, getAllFilesMetadata } from "../utils/reader-mdx";
import { Title } from "../components/Title";

export default function Post ({source, frontmatter, posts}) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon"  href="/favicon.png" />
      </Head>

      <main className="content">
        <Title content={frontmatter} isTag={ frontmatter.tag === 'is' }/>
        <MDXRemote { ...source} />
        <Posts posts={posts}/>
        <CardAuthor post={frontmatter}></CardAuthor>
      </main>

    </>
  );
}

export async function getStaticProps ({ params }){
  let sourceState;
  let frontmatterState;

  const posts = await getAllFilesMetadata();
  const titles = JSON.parse (JSON.stringify (posts));
  titles.map (element => {
    delete element.date;
    delete element.tag;
    delete element.description;
    delete element.reading;
    return element;
  });
  try {
    const {source, frontmatter} = await getFileBySlug(params.slug);
    sourceState = source;
    frontmatterState = frontmatter;
  }
  catch (error) {
    return {
      notFound: true,
      props: { posts: [], titles },
    };
  }

  const postsByTag = posts.filter (post => {
    return post.tag === params.slug;
  });

  return {
    props: { source: sourceState, frontmatter: frontmatterState, posts: postsByTag, titles },
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
    fallback: "blocking"
  };
}