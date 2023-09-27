import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getBlogs = (dir: string) => {
  // Get all files in a directory
  // We'll use this to get our files in the /blogs directory
  const files = fs.readdirSync(path.join(dir));

  // This will return an array of objects with the markdown file's metaData, it's slug and it's content
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");

    const { data: frontMatter, content } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      content,
    };
  });

  return blogs;
};