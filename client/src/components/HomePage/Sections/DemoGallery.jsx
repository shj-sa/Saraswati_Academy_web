import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Interactive Hindi Learning",
    description:
      "Engaging online lessons with interactive activities designed for toddlers.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.GI-jdLge-WrCWVHzNFHcYgHaLG&pid=Api",
  },
  {
    title: "Expert Hindi Educators",
    description:
      "1000+ trained teachers delivering high-quality lessons worldwide.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.5xyKrwusI0BF_sOxtgf4NgHaFg&pid=Api",
  },
  {
    title: "Fun & Engaging Content",
    description:
      "Interactive puzzles, stories, and games to make learning joyful.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.zKiv1N_nMkINnsLFW5IvtgHaHa&pid=Api",
  },
  {
    title: "Global Learning Community",
    description:
      "Students from Singapore, USA, UK, and beyond learning together.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.C0Bce5IntCUzbybaLhugywHaLH&pid=Api",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Courses <span className="text-yellow-500">Saraswati Academy</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Bringing the joy of learning Hindi to children worldwide through
            interactive and engaging online education.
          </p>
        </motion.div>

        {/* Course-Like Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-700">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
