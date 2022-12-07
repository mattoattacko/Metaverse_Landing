'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>

    {/* Gradient */}
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
    >
      <TypingText
        title="| About Metaverse"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center  text-secondary-white"
      >
        The <span className="font-extrabold text-white">Metaverse</span>  is a revolutionary new world that is coming to life in the near future. This virtual realm is so immersive that it feels like a real-life experience, allowing you to feel, touch, and explore like never before. This is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>.{' '}
        With just a simple{' '}
        <span className="font-extrabold text-white">VR</span> device, you can step into the Metaverse and make your wildest dreams a reality. So why not come and experience the madness of the Metaverse for yourself? Join us on this incredible{' '}
        <span className="font-extrabold text-white">journey</span> & discover a world beyond your wildest imagination. Scroll down to explore the limitless possibilities of the Metaverse.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="mt-[28px] w-[18px] h-[28px] object-contain"
      />
    </motion.div>
  </section>
);

export default About;
