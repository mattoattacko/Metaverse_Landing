'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, StartSteps } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { startingFeatures } from '../constants';

import styles from '../styles';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="Get Started"
          className="w-[90%] h-[90%] object-contain"
        />
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
        </motion.div>

      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
