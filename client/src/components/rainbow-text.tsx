interface RainbowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RainbowText({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient ${className}`}>
      {children}
    </span>
  );
}

export function RainbowTextPink({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-pink ${className}`}>
      {children}
    </span>
  );
}

export function RainbowTextBlue({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-blue ${className}`}>
      {children}
    </span>
  );
}