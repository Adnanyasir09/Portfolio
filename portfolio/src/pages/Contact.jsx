import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; 

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📞 Contact Me</h2>
        <p className="text-gray-600 mb-6">Let’s connect! Feel free to reach out to me.</p>

        {/* Email */}
        <div className="flex items-center space-x-3 justify-center mb-4">
          <FaEnvelope className="text-red-500 text-2xl" />
          <a 
            href="mailto:mr.adnan.yasir@gmail.com" 
            className="text-gray-800 text-lg font-medium hover:text-blue-500"
          >
            mr.adnan.yasir@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center mt-4">
          {/* GitHub */}
          <a 
            href="https://github.com/Adnanyasir09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 text-3xl hover:text-gray-600 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/adnan-yasir-582691257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/mr.adnan.yasir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
