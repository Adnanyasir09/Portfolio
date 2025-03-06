const Achievements = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">🏆 Achievements</h1>
  
        <ul className="space-y-6">
          {/* JEE Mains Achievement */}
          <li className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
            <p className="text-lg text-gray-700 mb-2">
              <strong>✅ JEE Mains Percentile:</strong> 87.45
            </p>
          </li>
  
          {/* Aptitude Competition Achievement */}
          <li className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
            <p className="text-lg text-gray-700">
              <strong>🥇 1st Prize</strong> in a college-level <strong>Aptitude Competition</strong>
            </p>
            {/* Certificate Image */}
            <div className="mt-4">
              <img 
                src="cert1.jpeg" 
                alt="Aptitude Competition Certificate" 
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </li>
  
          {/* Legal Eagle Event Achievement */}
          <li className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
            <p className="text-lg text-gray-700">
              <strong>🏆 Runner-up</strong> in the <strong>Legal Eagle Event</strong> 
              at the <strong>8th National XL-IR Summit</strong> by Xavier School of Management (XLRI)
            </p>
            {/* Certificate Image */}
            <div className="mt-4">
              <img 
                src="cert2.jpg" 
                alt="Legal Eagle Certificate" 
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </li>
          {/* Photography Competition Achievement */}
          <li className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
            <p className="text-lg text-gray-700">
              <strong>📸 Runner-up</strong> in a <strong>Photography Competition</strong>
            </p>
            {/* Certificate Image */}
            <div className="mt-4">
              <img 
                src="cert3.jpg"  // Update this with the actual image filename
                alt="Photography Competition Certificate" 
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Achievements;
  