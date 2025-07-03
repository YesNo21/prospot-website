import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 relative">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container px-4 sm:px-6 relative">
        <div className="py-16 flex flex-col items-center space-y-4">
          <Image 
            src="/logos/SVG/prospot_logo_2.svg" 
            alt="ProSpot" 
            width={96} 
            height={26} 
            className="h-6 w-auto opacity-50"
          />
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} ProSpot
          </p>
        </div>
      </div>
    </footer>
  );
}