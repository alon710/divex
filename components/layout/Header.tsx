"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import UserMenu from "@/components/layout/UserMenu";
import { links } from "@/config/menu";
import { getLinkClassName } from "@/utils/link";

interface HeaderProps {
  onMobileMenuOpen: () => void;
}

export default function Header({ onMobileMenuOpen }: HeaderProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMobileMenuOpen}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle mobile menu</span>
      </Button>
      <nav className="hidden md:flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Image src="/logo/512px.png" alt="Divex" width={24} height={24} />
        {Object.entries(links).map(([href, { label }]) => (
          <Link
            key={href}
            href={href}
            className={getLinkClassName(href, currentPath)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <UserMenu />
    </header>
  );
}
