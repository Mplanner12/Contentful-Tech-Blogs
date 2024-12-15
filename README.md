# Contentful Blog

This Next.js application fetches blog posts from Contentful and displays them in a user-friendly format.

## Features

- Fetches blog posts from Contentful using server-side rendering.
- Displays a list of blog posts with featured images, titles, subtitles, and publication dates.
- Dynamically generates individual blog post pages.
- Renders rich text content from Contentful, including paragraphs, embedded entries (related blog posts), and images.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/contentful-blog.git
   ```

## Install dependencies:

cd contentful-blog
npm install
Set up Contentful:

## Create a Contentful account.

Create a space and define content models for "blogPost".

The content model should include fields for:

internalName (Text) - An internal name
entryTitle (Text)
seoFields (SEO fields - rich text)
slug (Text) - The slug for the blog post URL.
author (Reference to an "author" content type)
publishedDate (Date)
title (Text)
subtitle (Text)
featuredImage (Media)
content (Rich Text)
description (Text)
relatedBlogPosts (Reference to other blog posts)
Populate your space with blog post entries.

Configure environment variables:

## Create a .env.local file in the root directory and add the following environment variables:

CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
Replace your_space_id and your_access_token with your actual Contentful credentials.

Run the development server:

npm run dev
The application will be available at http://localhost:3000.

## Deployment (Example using Vercel)

This example shows deployment with Vercel. Adapt as needed for other platforms.

Push your code to a Git repository (e.g., GitHub, GitLab).

Create a Vercel account and import the project.

Set the environment variables CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in the Vercel project settings. These should match the values you have in your local .env.local file.

Deploy! Vercel will handle the build and deployment process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
