'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations';

const philosophyWords = [
  { word: 'Light', description: 'We chase the perfect light.' },
  { word: 'Emotion', description: 'We find the real moments.' },
  { word: 'Story', description: 'We tell your story.' },
];

export default function OurApproach() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-bg-primary" aria-label="Our approach">
      <motion.div
        className="mx-auto max-w-[800px] px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="space-y-12 md:space-y-16">
          {philosophyWords.map((item) => (
            <motion.div
              key={item.word}
              variants={fadeUp}
              className="flex items-center gap-6 md:gap-10"
            >
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-warm-white">
                {item.word}.
              </h2>
              <div className="flex items-center gap-6">
                <span className="hidden md:block h-[1px] w-12 bg-gold/40" aria-hidden="true" />
                <p className="font-manrope text-sm md:text-base text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
