import { useRef, useState } from "react";

export const GlowCard = ({ img, url, projectName }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`card-glow hover:bg-[rgba(162, 69, 102, 0.6)] justify-content flex aspect-square w-full max-w-[210px] cursor-pointer items-center rounded-xl border border-white/3 bg-white/20 p-6 transition-transform duration-500 hover:scale-103 hover:border-none ${
        hovered ? "hovered" : ""
      }`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={projectName} className="relative z-10" />
      </a>
    </div>
  );
};
