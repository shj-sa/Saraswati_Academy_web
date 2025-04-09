import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Interactive Learning",
    description:
      "Engage with modern, interactive teaching methods that make learning fun and effective.",
    icon: BookOpen,
  },
  {
    title: "Experienced Faculty",
    description:
      "Our expert teachers are dedicated to providing quality education and mentorship.",
    icon: GraduationCap,
  },
  {
    title: "Student Community",
    description:
      "A vibrant student community that encourages collaboration, creativity, and growth.",
    icon: Users,
  },
  {
    title: "Innovative Teaching Methods",
    description:
      "We use smart classrooms and innovative learning techniques for a better education experience.",
    icon: Lightbulb,
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-gray-800">
            Why Choose{" "}
            <span className="text-yellow-500">Saraswati Academy?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Unlock your potential with the best education experience designed
            for success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative p-6 overflow-hidden transition-shadow duration-300 border border-gray-300 rounded-lg group bg-white hover:shadow-xl">
                {/* Icon */}
                <div className="inline-block p-3 mb-4 rounded-full bg-yellow-100 group-hover:bg-yellow-200">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-yellow-600">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{feature.description}</p>

                {/* Arrow Icon */}
                <ArrowRight className="absolute w-5 h-5 transition-all duration-300 transform translate-x-4 opacity-0 bottom-4 right-4 group-hover:opacity-100 group-hover:translate-x-0 text-yellow-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
