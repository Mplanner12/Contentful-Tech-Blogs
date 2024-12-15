const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4">
    <header className="text-center mb-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-100">
        Explore Tech Insights
      </h1>
      <p className="text-xl max-w-2xl text-gray-300">
        Deep dives into the latest tech.
      </p>
    </header>

    <main className="text-center">
      <a
        href="/blog"
        className="bg-white text-green-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300"
      >
        Explore Blogs
      </a>
    </main>
    <footer className="absolute bottom-4 text-sm text-gray-200">
      © {new Date().getFullYear()} Tech Blogs. All rights reserved.
    </footer>
  </div>
);

export default Home;
