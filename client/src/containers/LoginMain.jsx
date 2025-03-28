import React, { useState, useEffect } from "react";
import LoginBlock from "../components/Login/LoginBlock";
import aImage from "../assets/a.jpeg";
import bImage from "../assets/b.jpeg";
import cImage from "../assets/c.jpeg";
import dImage from "../assets/d.jpeg";
import eImage from "../assets/e.jpeg";

const images = [aImage, bImage, cImage, dImage, eImage];

const AcademyInfo = () => {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center items-center   text-white  p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="text-center p-6 w-full max-w-2xl mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl tracking-wide text-yellow-400 mb-4">
          Welcome to Saraswati Academy
        </h1>
        <p className="text-lg md:text-xl mb-6 px-4 leading-relaxed">
          Saraswati Academy is dedicated to nurturing minds and empowering
          students with knowledge. Join us to embark on a journey of excellence
          and wisdom.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Explore Now →
        </a>
      </div>
    </div>
  );
};

const LoginUser = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left panel - Academy Info */}
      <div
        className="relative w-full flex items-center justify-center p-6 bg-cover bg-center h-screen hidden md:flex"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AcademyInfo />
      </div>

      {/* Right panel - Login Form */}
      <div className=" flex items-center justify-center h-screen">
        <LoginBlock />
      </div>
    </div>
  );
};

export default LoginUser;
