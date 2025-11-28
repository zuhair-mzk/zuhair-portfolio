"use client";

import { useState, useEffect } from "react";

const roles = [
  "Quantum Developer",
  "Security Analyst",
  "Software Engineer",
  "Entrepreneur",
];

export default function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds before deleting
      return () => clearTimeout(pauseTimer);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentRole.length) {
            setCurrentText(currentRole.substring(0, currentText.length + 1));
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            // Finished deleting, move to next role
            setIsDeleting(false);
            setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100 // Faster when deleting
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, isPaused]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent font-semibold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
