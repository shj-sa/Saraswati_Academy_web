import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Step 1: Interactive Hindi Learning",
    description:
      "Our engaging online platform makes learning Hindi fun for toddlers with games, stories, and activities.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.GI-jdLge-WrCWVHzNFHcYgHaLG&pid=Api",
  },
  {
    title: "Step 2: Learn from Expert Teachers",
    description:
      "Over 1000+ certified Hindi educators provide personalized guidance to young learners.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.5xyKrwusI0BF_sOxtgf4NgHaFg&pid=Api",
  },
  {
    title: "Step 3: Fun & Engaging Content",
    description:
      "Interactive puzzles, cartoons, and storytelling sessions make learning enjoyable.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.zKiv1N_nMkINnsLFW5IvtgHaHa&pid=Api",
  },
  {
    title: "Step 4: Learn from Anywhere in the World",
    description:
      "Students from Singapore, USA, UK, and more join our virtual classrooms daily.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.C0Bce5IntCUzbybaLhugywHaLH&pid=Api",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="container px-6 mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            How <span className="text-yellow-500">Saraswati Academy</span> Works
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            A step-by-step guide on how kids learn Hindi with us!
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Text Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-700">{step.description}</p>
                <ArrowRight className="hidden w-8 h-8 mt-4 md:inline-block text-yellow-500" />
              </div>

              {/* Image Section */}
              <div className="flex-1 h-[300px] w-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
