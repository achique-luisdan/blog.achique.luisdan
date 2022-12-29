import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd ();

export const getFiles = () => {
  return fs.readdirSync(path.join(root, 'posts',), 'utf-8')
}


export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync (path.join (root, 'posts', `${slug}.mdx`), 'utf-8')
  const { data, content } = await matter (mdxSource);
  const source = await serialize (content,  {
    scope: {},
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
      development: false,
    },
    parseFrontmatter: false,
  })
  return {
    source,
    frontmatter: {
      slug,
      ...data
    }
  }
} 

export const getAllFilesMetadata = () => {
  const files = getFiles();
  return files.map ((slug) => {
    const mdxSource = fs.readFileSync (path.join (root, 'posts', slug), 'utf-8');
    const { data } = matter (mdxSource, {});
    return {...data, slug: slug.replace('.mdx', '')};
  }, [])
}