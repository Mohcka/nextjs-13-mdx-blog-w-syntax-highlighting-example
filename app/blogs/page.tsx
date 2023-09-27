import { getBlogs } from "@/lib/utils";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getBlogs("blogs");

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <div className="my-2">
        {blogs.map((blog) => (
          <div key={blog.slug} className="my-10">
            <div className="text-xl font-semibold">
              <Link href={`blogs/${blog.slug}`}>{blog.meta.title}</Link>
            </div>
            <div className="text-xs">{blog.meta.date.toDateString()} </div>
            <div>{blog.meta.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
