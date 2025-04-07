import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const RevealSectionOnScroll = ({ children }) => {
  const ref = useIntersectionObserver("show");

  return (
    <div
      ref={(el) => {
        if (el) ref.current.add(el);
      }}
      className="hide"
    >
      {children}
    </div>
  );
};
