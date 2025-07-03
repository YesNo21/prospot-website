import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 relative">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container px-4 sm:px-6 relative">
        <div className="py-16 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} ProSpot
          </p>
        </div>
      </div>
    </footer>
  );
}