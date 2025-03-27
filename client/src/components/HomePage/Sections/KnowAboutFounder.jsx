import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Facebook } from "lucide-react";
import founderImage from "../../../assets/founder.png"; // Add the correct image path

export function KnowYourFounder() {
  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container px-6 mx-auto text-center bg-white max-w-3xl p-10">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-yellow-600 mb-6"
        >
          Know Our Founder
        </motion.h2>

        {/* Founder Image */}
        <motion.img
          src={founderImage}
          alt="Ms. Priyanka Mishra"
          className="w-48 h-48 mx-auto rounded-full shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Founder Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          Our founder and CEO, <strong>Ms. Priyanka Mishra</strong>, is a true
          embodiment of conviction and resilience. What began as a passionate
          mission to introduce the beauty of Hindi to young minds in 2012, while
          she was based in Singapore, has evolved into a thriving enterprise. In
          2019, after returning to India, she transformed her passion into a
          powerful venture that not only nurtures the intellectual growth of
          children but also provides meaningful employment opportunities for
          women who wish to pursue a career without leaving their homes. Her
          dedication continues to inspire, as she leads with a vision of
          empowerment and education.
        </motion.p>

        {/* Contact Information */}
        <div className="mt-8 flex flex-col items-center gap-4 text-gray-700">
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-600" />
            <span className="font-medium">+91 9096447778</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="text-yellow-600" />
            <span className="font-medium">@Saraswati_hindijagat</span>
          </div>
          <div className="flex items-center gap-2">
            <Facebook className="text-yellow-600" />
            <span className="font-medium">Saraswati.Hindi.Jagat</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowYourFounder;
