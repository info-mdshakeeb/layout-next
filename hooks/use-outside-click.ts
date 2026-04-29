import React, { useEffect, useRef } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
  options?: { enabled?: boolean },
) => {
  const enabled = options?.enabled ?? true;
  const latestCallback = useRef(callback);

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const container = ref?.current;
      if (!container) return;

      const target = event.target;
      if (!(target instanceof Node) || container.contains(target)) return;

      latestCallback.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [enabled, ref]);
};
