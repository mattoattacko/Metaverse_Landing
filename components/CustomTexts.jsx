'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} font-normal text-[14px] text-secondary-white`}
  >
    {/* splits characters in the title into an array */}
    {Array.from(title).map((letter, index) => (
      <motion.span
        key={index}
        variants={textVariant2}
      >
        {/* check if letter is = to an empty space. If so, render these asci characters (for a blank space) */}
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyle }) => (
  <h2>Title Text</h2>
);
