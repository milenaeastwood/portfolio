import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const RevealDivOnScroll = ({ children }) => {
  const ref = useIntersectionObserver();

  return (
    <div
      ref={(el) => {
        if (el) ref.current.add(el);
      }}
      className="hideDiv"
    >
      {children}
    </div>
  );
};
