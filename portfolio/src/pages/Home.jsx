import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 animate-gradient text-center p-6 overflow-hidden">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl"></div>

    {/* Profile Card (Glassmorphism Effect) */}
    <div className="relative bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl p-8 rounded-2xl border border-white/30 flex flex-col items-center">
      {/* Profile Picture with Glow */}
      <img
        src="pf2.jpeg"
        alt="Adnan Yasir"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      />

      {/* Name & Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mt-4">Adnan Yasir</h1>
      <p className="text-lg text-gray-700 mt-2 font-medium">
        Full-Stack Developer | MERN Stack | C++ Enthusiast
      </p>

      {/* Social Links (Floating Icons) */}
      <div className="flex gap-4 mt-4 text-2xl">
        <a href="https://github.com/adnanyasir" target="_blank" className="text-gray-800 hover:text-black transition transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/adnanyasir" target="_blank" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/adnanyasir" target="_blank" className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110">
          <FaTwitter />
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            React
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            Node.js
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            Express.js
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            MongoDB
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            Java
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
            SQL
          </span>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="Adnan_Yasir_Resume.pdf"
          download="Adnan_Yasir_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transform transition hover:scale-105"
        >
          📜 Download Resume
        </a>

        <Link
          to="/projects"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transform transition hover:scale-105"
        >
          🚀 View My Projects
        </Link>

        <Link
          to="/work"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transform transition hover:scale-105"
        >
          💼 Work
        </Link>

        <Link
          to="/achievements"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transform transition hover:scale-105"
        >
          🏆 Achievements
        </Link>
      </div>
    </div>
  </section>
);

export default Home;

