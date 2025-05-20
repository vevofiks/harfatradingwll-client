'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <div id="about" className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/about-image.jpg"
              alt="Harfa Trading Facility"
              fill
              sizes="100vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white">
              A Decade of Trust & Innovation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Since our establishment in 2014, Harfa Trading has revolutionized Qatar's automotive
              wholesale industry...
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our headquarters in the LOGISTIC PARK BIRAKATUL AWAMIR - WULAIR, Doha, serves as the
              central hub...
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through strategic partnerships with manufacturers across Asia, Europe, and the Middle East...
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-red-500">10+</div>
                <div className="text-gray-400">Years of Excellence</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-red-500">10K+</div>
                <div className="text-gray-400">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-12 text-center"
>
  <Link href="/about">
    <motion.button
      className="bg-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More About Us
    </motion.button>
  </Link>
</motion.div>
    </div>
  );
}
