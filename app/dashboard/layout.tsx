"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleUser, Search, Menu, X } from "lucide-react";
import { Drawer, DrawerOverlay, DrawerContent } from "@/components/ui/drawer";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";

type SideLinks = {
  [key: string]: string;
};

type TopLink = {
  label: string;
  sideLinks?: SideLinks;
  defaultRedirect?: string;
};

type Links = {
  [key: string]: TopLink;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    return currentPath.startsWith(href)
      ? "text-foreground transition-colors hover:text-foreground font-semibold"
      : "text-muted-foreground transition-colors hover:text-foreground";
  };

  const links: Links = useMemo(
    () => ({
      "/dashboard/home": {
        label: "Dashboard",
        sideLinks: {
          "/dashboard/home/overview": "Overview",
          "/dashboard/home/analytics": "Analytics",
        },
        defaultRedirect: "/dashboard/home/overview",
      },
      "/dashboard/customers": {
        label: "Customers",
        sideLinks: {
          "/dashboard/customers/customers-list": "Customers List",
          "/dashboard/customers/add-customer": "Add Customer",
        },
        defaultRedirect: "/dashboard/customers/customers-list",
      },
      "/dashboard/settings": {
        label: "Settings",
        sideLinks: {
          "/dashboard/settings/general": "General",
          "/dashboard/settings/landing-page": "Landing Page",
        },
        defaultRedirect: "/dashboard/settings/general",
      },
    }),
    []
  );

  const getCurrentSideLinks = () => {
    return Object.entries(links).find(
      ([href, link]) => currentPath.startsWith(href) && link.sideLinks
    )?.[1].sideLinks;
  };

  const sideLinks = getCurrentSideLinks();

  useEffect(() => {
    const topLink = Object.entries(links).find(
      ([href]) => currentPath === href
    );
    if (topLink && topLink[1].defaultRedirect) {
      router.replace(topLink[1].defaultRedirect);
    }
  }, [currentPath, router, links]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
        <nav className="hidden md:flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Image src="/logo/512px.png" alt="Divex" width={24} height={24} />
          {Object.entries(links).map(([href, { label }]) => (
            <Link key={href} href={href} className={getLinkClassName(href)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => document.body.classList.toggle("dark")}
              >
                Change Theme
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <Drawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <DrawerOverlay onClick={() => setIsMobileMenuOpen(false)} />
        <DrawerContent>
          <div className="flex items-center justify-between p-4 border-b">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium p-4">
            {Object.entries(links).map(([href, { label }]) => (
              <Link
                key={href}
                href={href}
                className={getLinkClassName(href)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">
            {links[currentPath.split("/").slice(0, 3).join("/")]?.label}
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          {/* Side Navigation Bar */}
          {sideLinks && (
            <nav className="grid gap-4 text-sm text-muted-foreground">
              {Object.entries(sideLinks).map(([href, label]) => (
                <Link key={href} href={href} className={getLinkClassName(href)}>
                  {label}
                </Link>
              ))}
            </nav>
          )}

          {/* Main Content Area */}
          <div className="grid gap-6">
            <Card>
              <div className="p-6">
                <CardDescription>{children}</CardDescription>
              </div>
              <CardFooter className="border-t px-6 py-4">
                <div className="text-sm text-muted-foreground">
                  {links?.[currentPath.split("/").slice(0, 3).join("/")]
                    ?.label +
                    " > " +
                    sideLinks?.[currentPath]}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
