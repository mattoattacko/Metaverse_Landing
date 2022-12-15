'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    {/* The background gradient */}
    <div
      className="footer-gradient"
    />

    {/* Wrapper for Footer */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      {/* div for call to action button */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>

        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />

          <span className="font-normal text-[16px] text-white uppercase">
            Enter Metaverse
          </span>
        </button>
      </div>

      {/* The line and below */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Metaversus
          </h4>

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 West Coast Creatives
          </p>

          {/* Socials */}
          {/*  Loop over social icons by getting each individual social and return an image for each one */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                alt={social.name}
                src={social.url}
                // href={social.href}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
