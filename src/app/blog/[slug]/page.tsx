import { fetchContent } from "@/lib/contentful";
import { BlogPost } from "@/utils/types";
import React, { JSX } from "react";

interface BlogPostProps {
  params: { slug: string };
}

export function mapToBlogPost(rawPost: any): BlogPost {
  return {
    fields: {
      internalName: rawPost.fields.internalName || "",
      entryTitle: rawPost.fields.entryTitle || "",
      seoFields: rawPost.fields.seoFields || {},
      slug: rawPost.fields.slug || "",
      author: rawPost.fields.author || {
        sys: { id: "", type: "", linkType: "" },
      },
      publishedDate: rawPost.fields.publishedDate || "",
      title: rawPost.fields.title || "",
      subtitle: rawPost.fields.subtitle || "",
      featuredImage: rawPost.fields.featuredImage || {
        fields: { file: { url: "" } },
      },
      content: rawPost.fields.content || "",
      description: rawPost.fields.description || "",
      relatedBlogPosts: rawPost.fields.relatedBlogPosts || [],
    },
    sys: {
      id: rawPost.sys.id,
      createdAt: rawPost.sys.createdAt,
      updatedAt: rawPost.sys.updatedAt,
      contentType: rawPost.sys.contentType,
    },
  };
}

export async function generateStaticParams() {
  const rawPosts = await fetchContent("blogPost");
  const posts: BlogPost[] = rawPosts.map(mapToBlogPost);

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params; // Await the params
  const rawPosts = await fetchContent("blogPost");
  const posts: BlogPost[] = rawPosts.map(mapToBlogPost);
  console.log(posts);

  const post = posts.find((p) => p.fields.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-red-100 text-red-800">
        <p>Post not found.</p>
      </div>
    );
  }

  // Handle rendering `content` properly
  const renderContent = (content: any): JSX.Element | string | null => {
    console.log(content);
    if (typeof content === "string") return content;

    if (Array.isArray(content)) {
      return (
        <>
          {content.map((node, i) => (
            <React.Fragment key={i}>{renderContent(node)}</React.Fragment>
          ))}
        </>
      );
    }

    if (content?.nodeType === "document") {
      return renderContent(content.content);
    }

    if (content?.nodeType === "paragraph") {
      return <p className="mb-4">{renderContent(content.content)}</p>;
    }

    if (content?.nodeType === "embedded-entry-block") {
      // Access the embedded entry's data
      const entryId = content.data.target.sys.id;
      const entryTitle = content.data.target.fields.internalName;
      const entryImage = content.data.target.fields.image.fields.file.url;
      console.log(entryTitle, entryImage);

      //Find the embedded entry within your existing data
      const entry = post.fields.relatedBlogPosts?.find(
        (relatedPost: any) => relatedPost.sys.id === entryId
      );

      if (entryTitle) {
        console.log(entry);
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">{entryTitle}</h3>
            <img
              className="h-full"
              src={entryImage}
              alt={entryTitle}
              width={300}
              height={300}
            />
          </div>
        );
      }
    }

    if (content?.nodeType === "text") {
      return content.value;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-greenfield-light text-gray-800 p-6">
      <header className="flex justify-start flex-col items-start bg-gradient-to-r from-gray-700 to-gray-900 py-4 px-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Tech Blogs</h1>
        <a
          href="/blog"
          className="text-white underline hover:text-greenfield-light"
        >
          Back to Blog List
        </a>
      </header>

      <main className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.fields.featuredImage?.fields.file.url}
          alt={post.fields.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            {" "}
            {/* Flexbox for alignment */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {post.fields.title}
              </h1>
              <h2 className="mt-1 text-xl text-gray-700">
                {/* Reduced margin */}
                {post.fields.subtitle}
              </h2>
            </div>
            <p className="text-gray-500 text-sm">
              {" "}
              {/* Moved publish date */}
              Published:{" "}
              {new Date(post.fields.publishedDate).toLocaleDateString()}
            </p>
          </div>

          <article className="prose prose-lg text-gray-800 max-w-none">
            {" "}
            {/* max-w-none for full width */}
            {renderContent(post.fields.content || post.fields.description)}
          </article>
        </div>
      </main>
    </div>
  );
}
