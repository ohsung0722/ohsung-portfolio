import { motion } from "framer-motion";

type DashedRingProps = {
  size?: number;
  strokeWidth?: number;
  rotateDuration?: number;
  flowDuration?: number;
  className?: string;
};

export function DashedRing({
  size = 560,
  strokeWidth = 8,
  rotateDuration = 90,
  flowDuration = 140,
  className,
}: DashedRingProps) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  const dashArray =
    "52 34 18 78 66 28 24 62 40 46 14 92 58 30 22 70 36 54 10 110";

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ overflow: "visible" }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: rotateDuration,
      }}
    >
      <defs>
        <filter id="neonGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(0,255,163,0.95)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashArray}
        filter="url(#neonGlow)"
        style={{
          filter:
            "drop-shadow(0 0 6px rgba(0,255,163,0.55)) drop-shadow(0 0 16px rgba(0,255,163,0.25))",
        }}
        animate={{ strokeDashoffset: [0, -c] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: flowDuration,
        }}
      />
    </motion.svg>
  );
}
