import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex py-6 px-10 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="/features">Features</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <SignedIn>
          <Button>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <SignOutButton>
            <Button>Sign Out</Button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </nav>
    </header>
  );
}
