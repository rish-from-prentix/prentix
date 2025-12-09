interface PrentixIconProps {
  className?: string;
  size?: number;
}

const PrentixIcon = ({ className = "", size = 40 }: PrentixIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract P mark with geometric shapes */}
      <defs>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#26C6FF" />
          <stop offset="100%" stopColor="#00A8D1" />
        </linearGradient>
      </defs>
      
      {/* Main hexagonal shape */}
      <path
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
        stroke="url(#accentGradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Inner P letterform */}
      <path
        d="M35 30V70M35 30H55C65 30 70 35 70 45C70 55 65 60 55 60H35"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Accent dot */}
      <circle cx="70" cy="65" r="5" fill="url(#accentGradient)" />
    </svg>
  );
};

export default PrentixIcon;
