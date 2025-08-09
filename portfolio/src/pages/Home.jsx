import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden px-6 pt-12">
    {/* Floating Background Blobs */}
    <div className="absolute top-[-120px] left-[-80px] w-72 h-72 bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-gradient-to-tr from-green-300 via-teal-400 to-blue-400 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

    {/* Glassmorphism Card */}
    <div className="relative bg-white bg-opacity-20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl max-w-xl w-full flex flex-col items-center p-10 text-center z-10">
      {/* Profile Picture with subtle glow */}
      <img
        src="pf5.jpeg"
        alt="Adnan Yasir"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg transition-transform hover:scale-110 hover:shadow-2xl"
      />

      {/* Name & Title */}
      <h1 className="mt-6 text-5xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
        Adnan Yasir
      </h1>
      <p className="mt-2 text-lg text-gray-700 font-semibold tracking-wide max-w-xs">
        Full-Stack Developer | MERN Stack 
      </p>

      {/* Social Icons with floating animation */}
      <div className="flex gap-6 mt-6 text-3xl text-gray-800">
        {[{
          icon: <FaGithub />,
          url: "https://github.com/adnanyasir",
          color: "hover:text-gray-900",
          key: "github",
        }, {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/adnan-yasir-582691257/",
          color: "hover:text-blue-700",
          key: "linkedin",
        }, {
          icon: <FaTwitter />,
          url: "https://twitter.com/adnanyasir",
          color: "hover:text-blue-500",
          key: "twitter",
        }].map(({ icon, url, color, key }) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition hover:scale-125 motion-safe:animate-bounce ${color}`}
            aria-label={key}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "React", bg: "bg-blue-100", text: "text-blue-700" },
            { name: "Node.js", bg: "bg-green-100", text: "text-green-700" },
            { name: "Express.js", bg: "bg-gray-200", text: "text-gray-800" },
            { name: "MongoDB", bg: "bg-green-200", text: "text-green-900" },
            { name: "Java", bg: "bg-red-100", text: "text-red-700" },
            { name: "SQL", bg: "bg-yellow-100", text: "text-yellow-700" },
          ].map(({ name, bg, text }) => (
            <span
              key={name}
              className={`${bg} ${text} font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition cursor-default select-none`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-5 w-full max-w-xl">
        <a
          href="Resume_AdnanYasir.pdf"
          download="Adnan_Yasir_Resume.pdf"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:from-indigo-600 hover:to-blue-700 transition transform hover:scale-105"
        >
          📜 Download Resume
        </a>

        <Link
          to="/projects"
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-7 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:from-gray-900 hover:to-black transition transform hover:scale-105"
        >
          🚀 View My Projects
        </Link>

        <Link
          to="/work"
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-7 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:from-purple-700 hover:to-purple-800 transition transform hover:scale-105"
        >
          💼 Work
        </Link>

        <Link
          to="/achievements"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-7 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:from-orange-600 hover:to-orange-700 transition transform hover:scale-105"
        >
          🏆 Achievements
        </Link>
      </div>
    </div>

    {/* Animation keyframes for blobs */}
    <style>{`
      @keyframes blob {
        0%, 100% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </section>
);

export default Home;
