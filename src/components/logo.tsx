export function Logo({ 
  className = "", 
  variant = "text" 
}: { 
  className?: string; 
  variant?: "text" | "horizontal" | "stacked" 
}) {
  switch (variant) {
    case "horizontal":
      return (
        <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="0" y="5" width="110" height="50" rx="25" fill="currentColor"/>
          <text x="20" y="40" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="white">PRO</text>
          <circle cx="140" cy="30" r="25" fill="currentColor"/>
          <text x="180" y="42" font-family="Arial Black, sans-serif" font-size="40" font-weight="900" fill="currentColor">SPOT</text>
        </svg>
      );
    case "stacked":
      return (
        <svg viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="0" y="0" width="110" height="50" rx="25" fill="currentColor"/>
          <text x="20" y="35" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="white">PRO</text>
          <circle cx="140" cy="25" r="25" fill="currentColor"/>
          <text x="0" y="85" font-family="Arial Black, sans-serif" font-size="40" font-weight="900" fill="currentColor">SPOT</text>
        </svg>
      );
    case "text":
    default:
      return (
        <svg viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g>
            <path d="M0 40V10H18C26.2843 10 33 16.7157 33 25C33 33.2843 26.2843 40 18 40H0ZM10 30H18C20.7614 30 23 27.7614 23 25C23 22.2386 20.7614 20 18 20H10V30Z" fill="currentColor"/>
            <path d="M40 40V10H58C62.4183 10 66 13.5817 66 18C66 20.5774 64.8565 22.8834 63.0502 24.3877C65.395 25.9734 67 28.5774 67 31.5C67 36.1944 63.1944 40 58.5 40H40ZM50 22H56C57.1046 22 58 21.1046 58 20C58 18.8954 57.1046 18 56 18H50V22ZM50 32H56.5C57.8807 32 59 30.8807 59 29.5C59 28.1193 57.8807 27 56.5 27H50V32Z" fill="currentColor"/>
            <path d="M75 25C75 16.7157 81.7157 10 90 10C98.2843 10 105 16.7157 105 25C105 33.2843 98.2843 40 90 40C81.7157 40 75 33.2843 75 25ZM85 25C85 27.7614 87.2386 30 90 30C92.7614 30 95 27.7614 95 25C95 22.2386 92.7614 20 90 20C87.2386 20 85 22.2386 85 25Z" fill="currentColor"/>
            <path d="M125 40C119.477 40 115 35.5228 115 30H125C125 30 125 30 125 30H130C132.761 30 135 27.7614 135 25C135 22.2386 132.761 20 130 20C127.239 20 125 22.2386 125 25H115C115 16.7157 121.716 10 130 10C138.284 10 145 16.7157 145 25C145 33.2843 138.284 40 130 40H125Z" fill="currentColor"/>
            <path d="M155 40V10H173C181.284 10 188 16.7157 188 25C188 33.2843 181.284 40 173 40H155ZM165 30H173C175.761 30 178 27.7614 178 25C178 22.2386 175.761 20 173 20H165V30Z" fill="currentColor"/>
            <path d="M195 25C195 16.7157 201.716 10 210 10C218.284 10 225 16.7157 225 25C225 33.2843 218.284 40 210 40C201.716 40 195 33.2843 195 25ZM205 25C205 27.7614 207.239 30 210 30C212.761 30 215 27.7614 215 25C215 22.2386 212.761 20 210 20C207.239 20 205 22.2386 205 25Z" fill="currentColor"/>
            <path d="M245 40V20H235V10H265V20H255V40H245Z" fill="currentColor"/>
          </g>
        </svg>
      );
  }
}