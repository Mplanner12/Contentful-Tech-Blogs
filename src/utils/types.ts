export interface BlogPost {
  fields: {
    internalName: string;
    entryTitle: string;
    seoFields: any;
    slug: string;
    author: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedDate: string;
    title: string;
    subtitle: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content: any;
    description: any;
    relatedBlogPosts: {
      sys: { id: string; type: string; linkType: string };
    }[];
  };
  sys?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
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
