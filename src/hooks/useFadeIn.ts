import { useRef } from "react";

export function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  return { ref, isVisible: true };
}
