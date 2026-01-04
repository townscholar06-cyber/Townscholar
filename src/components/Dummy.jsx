export function Dummy() {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl mb-8 text-center">Font System with Tailwind v4</h1>
  
        {/* Using direct CSS classes */}
        <div className="space-y-4 mb-8">
          <p className="rethink-sans-400">Rethink Sans Regular (400)</p>
          <p className="rethink-sans-700">Rethink Sans Bold (700)</p>
          <p className="rethink-sans-400-italic">Rethink Sans Italic</p>
          <p className="space-grotesk-300">Space Grotesk Light</p>
          <p className="space-grotesk-700">Space Grotesk Bold</p>
          <p className="lexend-deca-100">Lexend Deca Thin</p>
          <p className="lexend-deca-900">Lexend Deca Black</p>
        </div>
  
        {/* Using Tailwind utilities with custom fonts */}
        <div className="space-y-4 mb-8">
          <p className="font-lexend font-bold text-xl">Lexend Deca with Tailwind</p>
          <p className="font-space font-light">Space Grotesk Light</p>
          <p className="font-caveat text-2xl">Caveat Handwriting</p>
          <p className="font-bad-script text-xl">Bad Script Cursive</p>
        </div>
  
        {/* Using component classes */}
        <div className="space-y-6 mb-8">
          <h2 className="font-display">Display Heading</h2>
          <p className="font-body">This is body text using the font-body component class.</p>
          <blockquote className="font-handwritten italic border-l-4 pl-4">
            Handwritten quote using Caveat
          </blockquote>
          <p className="font-cursive">Cursive text with Bad Script</p>
        </div>
  
        {/* Responsive example */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-heading">
            Responsive Heading
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-rethink">
            This text grows with screen size
          </p>
        </div>
  
        {/* Font weight demonstration */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 border rounded">
            <p className="font-thin">Font Thin (100)</p>
            <p className="font-light">Font Light (300)</p>
            <p className="font-normal">Font Normal (400)</p>
            <p className="font-medium">Font Medium (500)</p>
            <p className="font-semi-bold">Font Semi-bold (600)</p>
            <p className="font-bold">Font Bold (700)</p>
            <p className="font-extra-bold">Font Extra-bold (800)</p>
          </div>
          
          <div className="p-3 border rounded">
            <p className="tracking-tight-font">Tight Tracking</p>
            <p className="tracking-normal-font">Normal Tracking</p>
            <p className="tracking-wide-font">Wide Tracking</p>
            <p className="text-shadow">With Text Shadow</p>
          </div>
          
          <div className="p-3 border rounded md:col-span-1 col-span-2">
            <button className="btn-font bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Button with Custom Font
            </button>
            <p className="font-elegant mt-2">Elegant serif text</p>
            <p className="font-gloock text-lg">Gloock display font</p>
          </div>

           {/* Common Pattern Section */}
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 md:mt-24 max-w-4xl mx-auto px-4"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">The Common Pattern</h3>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Different niches. Different formats. Different personalities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { title: "Clear Positioning", icon: <FiTarget />, desc: "Unique angle in crowded space" },
                  { title: "Human-First Storytelling", icon: <FiHeart />, desc: "Connect before you educate" },
                  { title: "Structured Execution", icon: <FiCheckCircle />, desc: "Systematic content creation" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-lg font-bold text-gray-900">
                  That's what scales. Not trends. Not luck. Not algorithms.
                </p>
                <p className="text-gray-700 mt-2">
                  This is the system you're about to learn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Investment Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 md:mt-24 max-w-4xl mx-auto px-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Here's What It Costs (And What You're Actually Buying)
                </h3>
                <p className="text-gray-300">Transparent pricing for a proven system</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-bold">₹5,999</span>
                  <span className="text-gray-300">for the complete system</span>
                </div>
                <p className="text-gray-300 mb-2">
                  Not ₹60,000 like other courses. Not ₹600 for cheap PDF templates.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h4 className="font-bold text-lg mb-3 text-green-400 flex items-center gap-2">
                    <FiCheckCircle /> Who should buy this:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Business owners creating content but not seeing reach",
                      "Anyone wanting to build a sustainable creator career",
                      "Working professionals seeking meta-skills for everywhere",
                      "Those ready to put in consistent effort"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h4 className="font-bold text-lg mb-3 text-red-400 flex items-center gap-2">
                    <FiXCircle /> Who should NOT buy this:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "If your content is already working effectively",
                      "If you're looking for overnight magic results",
                      "If you treat content as a 10-day experiment",
                      "If you want shortcuts without effort"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiXCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-xl font-bold mb-6">
                  If you're still reading, this is for you.
                </p>
                <button className="group relative px-8 md:px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    Yes, I'm Ready
                    <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                 
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  
