"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { links } from "@/config/menu";
import { getLinkClassName } from "@/utils/link";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerOverlay onClick={onClose} />
      <DrawerContent>
        <div className="flex items-center justify-between p-4 border-b">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            onClick={onClose}
          >
            <Image
              src="/logo/512px.png"
              alt="Divex"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="sr-only">Divex</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-6 text-lg font-medium p-4">
          {Object.entries(links).map(([href, { label }]) => (
            <Link
              key={href}
              href={href}
              className={getLinkClassName(href, currentPath)}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
