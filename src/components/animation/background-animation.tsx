"use client";
import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

const BackgroundAnimatation = (
  props: SVGProps<SVGSVGElement>,
  children: React.ReactNode
) => (
  <svg
    className=" w-screen min-h-screen "
    viewBox="0 0 1251 776"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_4_2)">
      <rect width={1251} height={776} fill="#191919" />
      <motion.path
        d="M26.4457 2.18857V774.473"
        stroke="#F2A93A"
        strokeWidth={4}
        strokeLinecap="round"
        animate={{ y: [1200, -900], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <g filter="url(#filter0_d_4_2)">
        <motion.path
          d="M44.1439 8.62427V764.819"
          stroke="#F2A93A"
          strokeWidth={2}
          strokeLinecap="round"
          animate={{ y: [600, 0], opacity: [0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </g>
      <motion.path
        d="M127.808 8.62427L127.808 771.255"
        stroke="#F2A93A"
        strokeWidth={4}
        strokeLinecap="round"
        animate={{ y: [-900, 1200], opacity: [0.8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.path
        d="M180.903 10.2332L180.903 769.646"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [-900, 1200], opacity: [0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.path
        d="M269.393 10.2332L269.393 766.428"
        stroke="#F2A93A"
        strokeWidth={5}
        strokeLinecap="round"
        animate={{ y: [600, -1200], opacity: [0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.path
        d="M431.895 7.01535L431.895 766.428"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [0, 600], opacity: [0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.path
        d="M457.638 10.2332L457.638 768.037"
        stroke="#F2A93A"
        strokeWidth={4}
        strokeLinecap="round"
        animate={{ y: [-900, 0], opacity: [0.8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.path
        d="M565.436 7.01535V768.037"
        stroke="#F2A93A"
        strokeWidth={5}
        strokeLinecap="round"
        animate={{ y: [0, 1200], opacity: [0.5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.path
        d="M678.06 11.8421V764.819"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [1200, -900], opacity: [0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M779.423 8.62427V769.646"
        stroke="#F2A93A"
        strokeWidth={5}
        strokeLinecap="round"
        animate={{ y: [0, 900], opacity: [0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.path
        d="M880.785 7.01535V764.819"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [-600, 900], opacity: [0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.path
        d="M903.31 18.2778V758.383"
        stroke="#F2A93A"
        strokeWidth={5}
        strokeLinecap="round"
        animate={{ y: [600, -1200], opacity: [0.4, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.path
        d="M972.494 8.62427V759.992"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [0, 600], opacity: [0.7, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.path
        d="M1082.32 13.4044V763.729"
        stroke="#F2A93A"
        strokeWidth={2}
        strokeLinecap="round"
        animate={{ y: [900, -1000], opacity: [0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M1210.61 11.8421V769.646"
        stroke="#F2A93A"
        strokeWidth={5}
        strokeLinecap="round"
        animate={{ y: [-300, 900], opacity: [0.7, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4_2"
        x={39.1439}
        y={7.62427}
        width={10}
        height={766.195}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_2"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_4_2">
        <rect width={1251} height={776} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default BackgroundAnimatation;
