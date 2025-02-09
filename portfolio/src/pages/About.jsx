import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Background Glow Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-3xl"></div>

      {/* About Me Header */}
      <motion.h1
        className="text-5xl font-bold mb-10 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.div
        className="relative z-10 max-w-3xl text-lg bg-white/10 backdrop-blur-lg shadow-xl p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          Hi, I am <strong>Adnan Yasir</strong>, a passionate Full-Stack Developer skilled in the 
          <strong> MERN Stack</strong> and C++. I enjoy solving complex problems, designing 
          efficient algorithms, and building scalable web applications.  
          Currently pursuing my <strong>BTech in Computer Science</strong> at 
          <strong> KIET Group of Institutions</strong>.
        </p>
      </motion.div>

      {/* Three Columns - Education | Strengths | Hobbies & Interests */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        
        {/* Education */}
        <motion.div
          className="p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">🎓 Education</h2>
          <p className="mt-2 text-white/80">
            <strong>BTech in Computer Science</strong> – KIET Group of Institutions  
            <br /> <strong>2022 - 2026</strong>
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          className="p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">💪 Strengths</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            <li>Strong problem-solving & DSA skills</li>
            <li>Full-Stack MERN Development</li>
            <li>Team collaboration & project management</li>
            <li>Debugging & analytical skills</li>
            <li>Passion for AI & tech innovations</li>
          </ul>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div
          className="p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">🎨 Hobbies & Interests</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            <li>Coding & Competitive Programming</li>
            <li>Video Editing & Content Creation</li>
            <li>Exploring New Technologies & AI</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
