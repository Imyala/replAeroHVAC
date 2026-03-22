import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 text-center space-y-6">
      <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
      </div>
      <h1 className="text-5xl font-display font-bold">404</h1>
      <p className="text-xl text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/">
        <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
          Return to Dashboard
        </button>
      </Link>
    </div>
  );
}
