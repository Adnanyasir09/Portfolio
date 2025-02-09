const Work = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💼 My Work</h1>

      {/* Work Section in Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* SRCS Doon Blog */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">📝 SRCS Doon Blog</h2>
          <p className="text-gray-600">A blog I created for SRCS Doon, covering various topics with engaging content.</p>
          
          {/* Blog Cover Image */}
          <div className="mt-4">
            <img 
              src="scsc.jpeg" 
              alt="SRCS Doon Blog" 
              className="w-full rounded-lg shadow-md" 
            />
          </div>

          {/* View PDF Button */}
          <a 
            href="blog.pdf" // Link to the PDF file
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            View Full Blog (PDF)
          </a>
        </div>

        {/* Canva Design for The Alpyne Labs */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">🎨 Canva Design - The Alpyne Labs</h2>
          <p className="text-gray-600">A creative Canva design post created for The Alpyne Labs.</p>
          
          {/* Canva Design Image */}
          <div className="mt-4">
            <img 
              src="canv.jpeg" 
              alt="Alpyne Labs Canva Design" 
              className="w-full rounded-lg shadow-md" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
