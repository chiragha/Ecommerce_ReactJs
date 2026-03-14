import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full">

      {/* Top Section */}
      <div className="grid md:grid-cols-2">

        {/* Left Orange Section */}
        <div className="bg-[#6a0610] flex items-center justify-center h-60 md:h-80">
          <button className="border border-white text-white px-8 py-3 tracking-widest">
            ABOUT
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
            className="w-full h-60 md:h-80 object-cover"
          />
        </div>

      </div>

      {/* Bottom Story Section */}

      <div className="bg-gray-100 py-16 px-6 flex justify-center">

        <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="bg-white p-8 shadow-md border-l-4 border-orange-500">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              THE IN.EX STORY
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This is a dummy text section. You can write your company story
              here. Explain your journey, your mission and your values.
              This section helps visitors understand your brand better.
            </p>

          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="story"
              className="rounded-lg shadow-lg"
            />
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;