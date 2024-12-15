import { fetchContent } from "@/lib/contentful";
import Link from "next/link";
import { BlogPost } from "@/utils/types";
import { mapToBlogPost } from "@/app/blog/[slug]/page";

export default async function BlogList() {
  const rawPosts = await fetchContent("blogPost");
  const posts: BlogPost[] = rawPosts.map(mapToBlogPost);
  return (
    <div className="min-h-screen bg-greenfield-light text-gray-800 p-6">
      <header className="flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-900 py-4 px-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Tech Blogs</h1>
      </header>

      {/* <Link
          href="/blog/create-blog"
          className="bg-white text-greenfield px-4 py-2 rounded-lg shadow hover:bg-green-200"
        >
          + Create Blog
        </Link> */}

      <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.fields.slug}`}
            key={post.sys?.id}
            className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.fields.featuredImage?.fields.file.url}
              alt={post.fields.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {post.fields.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {post.fields.subtitle}
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Published:{" "}
              {new Date(post.fields.publishedDate).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </main>
    </div>
  );
}
