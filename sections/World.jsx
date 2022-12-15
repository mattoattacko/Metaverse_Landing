'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People around the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same worlds!</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        {/* map image */}
        <img
          src="/map.png"
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* The little images of people */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="People"
            className="w-full h-full"
          />
          {/* <img
            src="/Union.png"
            alt="Union"
            className="absolute bottom-21 right-19 w-[100%] h-[100%] p=[6px] z-0"
          /> */}

        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="People"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="People"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
