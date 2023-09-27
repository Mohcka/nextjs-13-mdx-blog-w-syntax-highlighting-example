import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogs } from "@/lib/utils";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import Counter from "@/components/counter";

import "../../atomic-dark.css";
type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const blogDir = "blogs";

  const blogs = getBlogs(blogDir);

  const slugs = blogs.map((blog) => ({
    slug: blog.slug,
  }));

  // each slug object in the array will be passed to the params of each statically generated page
  // like this:
  // [
  // { params: { slug: "my-first-blog" } },
  // { params: { slug: "my-second-blog" } },
  // ...
  // ]
  return slugs;
}

const BlogPage = ({ params: { slug } }: Props) => {
  const blogFile = fs.readFileSync(path.join("blogs", slug + ".mdx"), "utf8");

  const { content, data: frontMatter } = matter(blogFile);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto">
      <div>
        <Link href="/blogs">&lt; Blogs</Link>
      </div>
      <h1 className="pt-10">{frontMatter.title}</h1>
      {/* @ts-ignore */}
      <MDXRemote source={content} options={options} components={{ Counter }} />
    </article>
  );
};

export default BlogPage;
