import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav’s Mother",
    location: "Singapore",
    avatar:
      "https://tse2.mm.bing.net/th?id=OIP.2m1OqZTgEkkYKfZx2YwPbAHaHa&pid=Api",
    content:
      "Saraswati Academy has made learning Hindi so much fun for Aarav! The interactive sessions and storytelling are simply amazing.",
  },
  {
    name: "Anaya’s Father",
    location: "USA",
    avatar:
      "https://tse1.mm.bing.net/th?id=OIP.u7hQZniqMEpdMj6TfpxXkgHaE7&pid=Api",
    content:
      "I was worried my daughter wouldn’t enjoy learning Hindi, but she looks forward to every session! The teachers are so kind and engaging.",
  },
  {
    name: "Kavya’s Parents",
    location: "UK",
    avatar:
      "https://tse1.mm.bing.net/th?id=OIP.KuXkQ7giTwNxQyIv4K4H7gHaE8&pid=Api",
    content:
      "This platform has helped my daughter connect with her roots while making learning fun. Highly recommend for all Indian parents abroad!",
  },
];

export function ParentsTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-white text-gray-900">
      <div className="container px-6 mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-yellow-600">
            Parents Love Saraswati Academy 💛
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Real stories from parents who have seen their children enjoy and
            excel in Hindi learning.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="flex flex-col gap-8 md:flex-row justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="max-w-sm p-6 bg-white rounded-xl shadow-lg border border-yellow-200"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 mb-4 text-yellow-500" />

              {/* Testimonial Content */}
              <p className="text-gray-700 italic">"{testimonial.content}"</p>

              {/* Parent Details */}
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ParentsTestimonials;
