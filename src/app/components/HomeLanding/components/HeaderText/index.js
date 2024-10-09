"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeaderText() {
  const titleRef = useRef(null);
  const titles = ["Real World Actions", "Sustainability", "AI"];

  function SplitText(text) {
    return text
      .split("")
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join("");
  }

  useEffect(() => {
    let i = 0;

    const animateText = () => {
      const clutter = SplitText(titles[i]);
      titleRef.current.innerHTML = clutter;

      const characters = titleRef.current.children;

      
      gsap.from(characters, {
        x: -100,  
        duration: 0.1,
        stagger: {
          amount: 1,
          from: "start",  
        },
        opacity: 0,
      });

      setTimeout(() => {
        gsap.to(characters, {
          x: 100,  
          duration: 0.2,
          stagger: {
            amount: 1,
            from: "end", 
          },
          opacity: 0,
          onComplete: () => {
            i = (i + 1) % titles.length;
            animateText();
          },
        });
      }, 2000);  
    };

    animateText();

    return () => clearTimeout();
  }, [titles]);

  return (
    <span
      className="bg-title-gradient bg-clip-text text-transparent"
      ref={titleRef}
    >
      {titles[0]}
    </span>
  );
}
