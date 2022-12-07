'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    />
    <div className="flex justify-center items-center flex-col relative z-10">
      <motion.h1
        variants={textVariant(1.1)}
        className={styles.heroHeading}
      >
        Metaverse
      </motion.h1>
      <motion.h1
        variants={textVariant(1.2)}
        className="flex flex-row justify-center items-center"
      >
        <h1 className={styles.heroHeading}>
          Ma
        </h1>
        <div className={styles.heroDText} />
        <h1 className={styles.heroHeading}>
          Ness
        </h1>
      </motion.h1>
    </div>
  </section>
);

export default Hero;