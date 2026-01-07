import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PopUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show popup after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz71ymNZOKE8h-ygqre8mK_IXIMBK0nY2nRbdhbuWYZ6U6QByfHMsbgdH9EtKCFI1hn/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("🎉 Success! We'll contact you soon!");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
        
        // Close popup after 3 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Error submitting form. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
      <style jsx>{`
        @keyframes rainbowShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .rainbow-gradient {
          background: linear-gradient(
            270deg,
            #0085cc,
            #005e99,
            #006bb3,
            #0085cc,
            #00ccff,
            #0085cc
          );
          background-size: 400% 400%;
          animation: rainbowShift 4s ease infinite;
        }
      `}</style>
      
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Main Card */}
        <div className="rainbow-gradient rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative">
          
          {/* Inner container for content */}
          <div className="relative rainbow-gradient">
            {/* Header with close button */}
            <div className="relative p-4 sm:p-5 md:p-6 pb-3 sm:pb-4">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors bg-gray-900/70 hover:bg-gray-900/90 rounded-full p-1.5 sm:p-2 backdrop-blur-sm z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Catchy Title */}
              <div className="text-center mb-4 sm:mb-5 md:mb-6">
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/90 rounded-full mb-3 sm:mb-4 shadow-lg">
                  <span className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                    🚀 Limited Time Offer
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Transform Your Content Game
                  </span>
                </h2>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-semibold mb-2">
                  Go from 0 to 1.5M+ followers in 2 years
                </p>
              </div>
            </div>

            {/* Form Section */}
<div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 pt-6 sm:pt-7 md:pt-8 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl">
  {!isSubmitted ? (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-4 sm:mb-5 md:mb-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
            WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 sm:py-4 sm:px-6 text-sm md:text-base rainbow-gradient text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group border-0"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Securing Your Spot...
            </>
          ) : (
            <>
              🚀 YES! I Want The System
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
      </button>

      <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 font-medium">
        ⚡ Limited seats available. Join 500+ successful creators
      </p>
    </form>
  ) : (
    <div className="text-center py-6 sm:py-7 md:py-8">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rainbow-gradient rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 p-0.5">
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
          <span className="text-xl sm:text-2xl">🎉</span>
        </div>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
        You're In!
      </h3>
      <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
        We've received your details. Our team will contact you within 24 hours with next steps.
      </p>
      <button
        onClick={handleClose}
        className="px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base rainbow-gradient text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 font-medium"
      >
        Close Window
      </button>
    </div>
  )}

  {message && !isSubmitted && (
    <p className={`text-center mt-3 sm:mt-4 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
      message.includes("Success") 
        ? "bg-green-50 text-green-700 border border-green-200" 
        : "bg-yellow-50 text-yellow-700 border border-yellow-200"
    }`}>
      {message}
    </p>
  )}
</div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 rounded-lg p-2">
          🔒 Your information is secure. We never share your details.
        </p>
      </div>
    </div>
  );
};

export default PopUp;