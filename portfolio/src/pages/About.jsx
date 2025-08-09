import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 px-6 py-16 text-white overflow-hidden">
      {/* Background Glow Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-700 to-pink-600 opacity-20 blur-3xl pointer-events-none"></div>

      {/* About Me Header */}
      <motion.h1
        className="relative z-10 text-5xl font-extrabold tracking-tight mb-12 text-center max-w-4xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
        <span className="block w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full mt-3 mx-auto"></span>
      </motion.h1>

      {/* Bio Section */}
      <motion.div
        className="relative z-10 max-w-4xl text-lg bg-white/10 backdrop-blur-md shadow-xl p-8 rounded-3xl border border-white/20 hover:scale-[1.03] transition-transform duration-300 cursor-default select-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="mb-6 leading-relaxed">
          Hello, my name is <strong>Adnan Yasir</strong>. I’m a Final-Year Computer Science
          Engineering student pursuing BTech from KIET Group of Institutions, Ghaziabad.
          I completed my Class 12 from St Paul's Inter College, Shahjahanpur, scoring
          <strong> 80.2%</strong>.
        </p>
        <p className="mb-6 leading-relaxed">
          I’m skilled in <strong>C, C++, Java, Python, HTML, CSS, JavaScript</strong> and have
          hands-on experience with <strong>React JS, Node JS, MongoDB</strong>.
          I’ve worked on multiple full-stack projects — one of the most significant being
          <em> MatchMarry where you can find and connect with your future life partner</em>.
          Alongside, I’ve built a real-time MERN chat application, a mini shopping site, a
          currency converter and more.
        </p>
        <p className="mb-6 leading-relaxed">
          Outside academics, I’ve won multiple competitions and cash prizes in aptitude, 
          photography and several other competitions. I’m also a proud member of Innogeeks Coding Club, 
          the Fashion Society.
        </p>
        <p className="leading-relaxed">
          These diverse experiences have shaped me into a better communicator, adaptable team player, 
          and someone who is ready to bring creativity and technical skill into my next opportunity.
        </p>
      </motion.div>

      {/* Three Columns - Education | Strengths | Hobbies */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full px-4">
        {[
          {
            title: "🎓 Education",
            content: (
              <>
                <p className="text-white/90 font-semibold mb-2">
                  BTech in Computer Science Engineering
                </p>
                <p className="text-white/70">KIET Group of Institutions</p>
                <p className="text-white/70">2022 - 2026</p>
              </>
            ),
          },
          {
            title: "💪 Strengths",
            content: (
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Strong decision-making</li>
                <li>Quick learning & adaptability</li>
                <li>Full commitment to goals</li>
                <li>Strategic planning</li>
                <li>Self-reliance</li>
              </ul>
            ),
          },
          {
            title: "🎨 Hobbies & Interests",
            content: (
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Coding & Competitive Programming</li>
                <li>Photography & Video Editing</li>
                <li>Singing (Bathroom concerts included 🎤)</li>
              </ul>
            ),
          },
        ].map(({ title, content }) => (
          <motion.div
            key={title}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 cursor-default select-text transition-transform duration-300 hover:scale-[1.05]"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {content}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
