import { useEffect, useRef, DependencyList } from "react";

const useAutoScroll = (dependencies: DependencyList) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dependencies]);

  return bottomRef;
};

export default useAutoScroll;
