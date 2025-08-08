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
        className="relative z-10 max-w-4xl text-lg bg-white/10 backdrop-blur-lg shadow-xl p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mb-4">
          Hello, my name is <strong>Adnan Yasir</strong>. I’m a Final-Year Computer Science
          Engineering student pursuing BTech from KIET Group of Institutions, Ghaziabad.
          I completed my Class 12 from St Paul's Inter College, Shahjahanpur, scoring
          <strong> 80.2%</strong>.
        </p>
        <p className="mb-4">
          I’m skilled in <strong>C, C++, Java, Python, HTML, CSS, JavaScript</strong> and have
          hands-on experience with <strong>React JS, Node JS, MongoDB</strong>.
          I’ve worked on multiple full-Stack projects — one of the most significant being
          <em> MatchMarry where you can find and connect with your future life partner</em>.
          Alongside, I’ve built a real-time MERN chat application, a mini shopping site, a
          currency converter and more.
        </p>
        <p className="mb-4">
          Outside academics, I’ve won multiple competitions and cash prizes in aptitude, 
          photography and several other competitions. I’m also a proud member of Innogeeks Coding Club, 
          the Fashion Society.
        </p>
        <p>
          These diverse experiences have shaped me into a better communicator, adaptable team player, 
          and someone who is ready to bring creativity and technical skill into my next opportunity.
        </p>
      </motion.div>

   

      {/* Three Columns - Education | Strengths | Hobbies */}
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
            <li>Strong decision-making</li>
            <li>Quick learning & adaptability</li>
            <li>Full commitment to goals</li>
            <li>Strategic planning</li>
            <li>Self-reliance</li>
          </ul>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          className="p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold">🎨 Hobbies & Interests</h2>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            <li>Coding & Competitive Programming</li>
            <li>Photography & Video Editing</li>
            <li>Singing (Bathroom concerts included 🎤)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
