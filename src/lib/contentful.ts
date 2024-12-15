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

// export async function createEntry(contentType: string, fields: any) {
//   try {
//     const space = await managementClient.getSpace(
//       process.env.CONTENTFUL_SPACE_ID!
//     ); // Make sure this environment variable is set
//     const environment = await space.getEnvironment("master");
//     const entry = await environment.createEntryWithId(
//       contentType,
//       generateUniqueId(),
//       {
//         fields,
//       }
//     );
//     await entry.publish();
//     return entry;
//   } catch (error) {
//     console.error("Error creating entry:", error);
//     throw error;
//   }
// }

// // Helper function to generate a unique ID.  Consider a more robust solution if needed.
// function generateUniqueId(): string {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     var r = (Math.random() * 16) | 0,
//       v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }
