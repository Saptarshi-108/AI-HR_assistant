import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Typer from "../components/Typer";
import ChatbotButton from "../components/chatbot"; // chatbot added

const Landing = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.3; // Fast-forward
    }
  }, []);

  return (
    <div className="w-full relative">
      <Navbar />

      {/* Hero section with video background */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="src/assets/3126361-uhd_3840_2160_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            <Typer />
          </h1>
        </div>
      </section>

      {/* Scrollable Content */}
      <section className="w-full bg-white text-black p-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About the Platform</h2>
          <p className="mb-6">
            This platform streamlines the hiring process using AI-powered tools
            such as Resume Scanning, Interview Scheduling, and Personalized
            Resume Optimization.
          </p>
          <p className="mb-6">
            Scroll down to explore features, testimonials, and start your
            journey toward smarter HR management.
          </p>

          <div className="h-96 bg-gray-100 mt-10 rounded-lg shadow-inner flex items-center justify-center">
            <span className="text-xl text-gray-600">More content here...</span>
          </div>
        </div>
      </section>

      {/* Fixed Chatbot Button */}
      <ChatbotButton />
    </div>
  );
};

export default Landing;
