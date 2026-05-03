"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { memo, useEffect, useId, useMemo, useState } from "react";
import useMeasure from "react-use-measure";

const TRANSITION = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

function Digit({ value, place }: { value: number; place: number }) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const base = useMotionValue<number>(valueRoundedToPlace);
  const animatedValue = useSpring(base, TRANSITION);

  useEffect(() => {
    base.set(valueRoundedToPlace);
  }, [base, valueRoundedToPlace]);
  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {DIGITS.map((i) => (
        <DigitCell key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

const DigitCell = memo(function DigitCell({
  mv,
  number,
}: {
  mv: MotionValue<number>;
  number: number;
}) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;

    if (offset > 5) {
      memo -= 10 * bounds.height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
        mass: 0.3,
      }}
      ref={ref}
    >
      {number}
    </motion.span>
  );
});

type SlidingNumberProps = {
  value: number;
  padStart?: boolean;
  decimalSeparator?: string;
  updateDelayMs?: number;
};

export function SlidingNumber({
  value,
  padStart = false,
  decimalSeparator = ".",
  updateDelayMs = 50,
}: SlidingNumberProps) {
  // Debounce incoming value to coalesce rapid changes and reduce re-renders
  const debouncedValue = useDebouncedNumber(value, updateDelayMs);
  const absValue = Math.abs(debouncedValue);
  const [integerPart, decimalPartRaw] = useMemo(
    () => absValue.toString().split("."),
    [absValue],
  );
  const integerValue = useMemo(() => parseInt(integerPart, 10), [integerPart]);
  const paddedInteger = useMemo(
    () => (padStart && integerValue < 10 ? `0${integerPart}` : integerPart),
    [padStart, integerValue, integerPart],
  );
  const integerDigits = useMemo(() => paddedInteger.split(""), [paddedInteger]);
  const integerPlaces = useMemo(
    () =>
      integerDigits.map((_, i) => Math.pow(10, integerDigits.length - i - 1)),
    [integerDigits],
  );
  const decimalPart = decimalPartRaw;

  return (
    <div className="flex items-center">
      {debouncedValue < 0 && "-"}
      {integerDigits.map((_, index) => (
        <Digit
          key={`pos-${integerPlaces[index]}`}
          value={integerValue}
          place={integerPlaces[index]}
        />
      ))}
      {decimalPart && (
        <>
          <span>{decimalSeparator}</span>
          {decimalPart.split("").map((_, index) => (
            <Digit
              key={`decimal-${index}`}
              value={parseInt(decimalPart, 10)}
              place={Math.pow(10, decimalPart.length - index - 1)}
            />
          ))}
        </>
      )}
    </div>
  );
}

// Simple debounced value hook
function useDebouncedNumber(value: number, delay: number) {
  const [debounced, setDebounced] = useState<number>(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
