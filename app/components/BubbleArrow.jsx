'use client'
import { useState, useEffect } from "react";

export default function BubbleEffect() {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [opacity, setOpacity] = useState(0); // Initially hidden

  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (e) => {
      setOpacity(1); // Show bubble on hover
      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseLeave = () => {
      setOpacity(0); // Hide bubble when mouse leaves
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="fixed w-24 h-24 bg-indigo-400 opacity-50 rounded-full blur-3xl pointer-events-none transition-transform duration-500 ease-out"
      style={{
        left: position.x - 48,
        top: position.y - 48,
        opacity: opacity,
        transform: "translate(-50%, -50%) scale(1.2)",
      }}
    ></div>
  );
}
