import { motion } from "framer-motion";

const IgniteXHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6 md:px-16 flex flex-col items-center text-center">
      {/* Background Overlay Animation */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 leading-tight">
          IgniteX - Innovate, Automate, Dominate
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          Transform your business with cutting-edge solutions in Web Development, AI, Automation,
          Digital Marketing, and Startup Growth Strategies.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default IgniteXHero;
