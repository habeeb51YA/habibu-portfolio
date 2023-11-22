"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.2 });
    gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.5 });
  };

  const handleButtonHover = () => {
    gsap.to(followerRef.current, {
      width: 80,
      height: 80,
      border: "1px solid #ffffff",
      borderRadius: "50%",
      // duration: 0.3,
      // marginTop: -20,
      // marginLeft: -20,
    });
  };

  const handleButtonLeave = () => {
    gsap.to(followerRef.current, {
      width: 50,
      height: 50,
      border: "1px solid #FB3741",
      borderRadius: "50%",
      // duration: 0.3,
      // marginTop: -20,
      // marginLeft: -20,
    });
  };
  useEffect(() => {
    gsap.set(cursorRef, { xPercent: 100, yPercent: 100 });
    gsap.set(followerRef, { xPercent: -30, yPercent: -30 });

    window.addEventListener("mousemove", moveCursor);

    // Assuming your button has a class of "hoverButton"
    const buttons = document.getElementsByClassName("hoverButton");

    // Convert HTMLCollection to an array and add event listeners
    Array.from(buttons).forEach((button: Element) => {
      button.addEventListener("mouseover", handleButtonHover);
      button.addEventListener("mouseout", handleButtonLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      // Remove event listeners
      Array.from(buttons).forEach((button: Element) => {
        button.removeEventListener("mouseover", handleButtonHover);
        button.removeEventListener("mouseout", handleButtonLeave);
      });
    };
  }, []); //

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="follower-cursor"></div>
    </>
  );
};

export default MouseEffect;
