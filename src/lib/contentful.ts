import { createClient } from "contentful";
// import { createClient as createManagementClient } from "contentful-management";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// const managementClient = createManagementClient({
//   accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN as string,
// });

export const fetchContent = async (contentType: string, query = {}) => {
  const entries = await client.getEntries({
    content_type: "pageBlogPost",
    ...query,
  });
  return entries.items;
};
