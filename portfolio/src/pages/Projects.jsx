import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-10">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 drop-shadow-lg">🚀 My Projects</h1>

      {/* Project Container */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Project Card Component */}
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-6 text-center transition transform duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800">{project.emoji} {project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4">
              <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md" />
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              {project.buttonText}
            </a>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

// Project Data
const projectsData = [
  {
    title: "Tic-Tac-Toe",
    description: "A classic 2-player game using JavaScript, HTML, and CSS.",
    image: "sc1.png",
    link: "https://your-tic-tac-toe-link.com",
    buttonText: "Play Now",
    emoji: "🎮"
  },
  {
    title: "Rock Paper Scissors",
    description: "A fun Rock-Paper-Scissors game with an interactive UI.",
    image: "sc2.png",
    link: "https://your-rock-paper-scissors-link.com",
    buttonText: "Play Now",
    emoji: "✊🖐✌"
  },
  {
    title: "Spin Wheel Game",
    description: "Spin-the-Wheel game with random rewards and smooth animations.",
    image: "sc3.png",
    link: "https://your-spin-wheel-link.com",
    buttonText: "Play Now",
    emoji: "🎡"
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time chat app using React, Node.js, and Socket.io.",
    image: "sc4.png",
    link: "https://your-chat-app-link.com",
    buttonText: "Try Now",
    emoji: "💬"
  }
];

export default Projects;
