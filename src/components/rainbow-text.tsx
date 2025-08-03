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

export function RainbowTextSkyBlue({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-skyblue ${className}`}>
      {children}
    </span>
  );
}

export function RainbowTextRed({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-red ${className}`}>
      {children}
    </span>
  );
}

export function RainbowTextBrown({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-brown ${className}`}>
      {children}
    </span>
  );
}

export function RainbowTextGreen({ children, className = "" }: RainbowTextProps) {
  return (
    <span className={`rainbow-gradient-green ${className}`}>
      {children}
    </span>
  );
}