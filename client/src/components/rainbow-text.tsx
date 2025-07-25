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
