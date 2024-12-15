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
      sys: {
        id: string;
        type: string;
        linkType: string;
      }[];
    };
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
