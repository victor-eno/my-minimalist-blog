import Head from "next/head";
import Image from "next/image";
import HamburgerMenu, { Links } from '../components/HamburgerMenu'

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";


      function Home({ posts }) {
  // console.log(`posts: ${posts}`);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='p-10'>
          {posts?.map((post) => {
            return (
              <Link key={`${post.slug}`} href={`/blog/${post.slug}`}>
                <a>
                  <div className='mb-4'>
                    <h1 className='text-2xl py-3'>{post.frontMatter.title}</h1>
                    <p>{post.frontMatter.date}</p>
                    <p>{post.frontMatter.metaDesc}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home


export async function getStaticProps() {
  // get the post
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFiles = fs.readFileSync(`posts/${filename}`);
    const { data: frontMatter } = matter(readFiles);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
