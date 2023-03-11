import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from "mdx-prism";

const root = process.cwd ();

export const getFiles = () => {
  return fs.readdirSync(path.join(root, 'posts',), 'utf-8');
};


export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync (path.join (root, 'posts', `${slug}.mdx`), 'utf-8');
  const { data, content } = await matter (mdxSource);
  const source = await serialize (content,  {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [mdxPrism],
      development: false,
    },
  });
  return {
    source,
    frontmatter: {
      slug,
      ...data
    }
  };
};

export const getAllFilesMetadata = (qty =-1) => {
  const files = getFiles();
  if (qty === -1){
    qty = files.length;
  }
  return files.map ((slug) => {
    const mdxSource = fs.readFileSync (path.join (root, 'posts', slug), 'utf-8');
    const { data } = matter (mdxSource, {});
    return {...data, slug: slug.replace('.mdx', '')};
  }).filter (element => {
    return element.tag !== 'is';
  }).sort((post, nextPost) =>   new Date(nextPost.date) - new Date(post.date)).slice(0, qty);
};