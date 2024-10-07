"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileDrawer from "@/components/layout/MobileDrawer";
import TopMenu from "@/components/layout/TopMenu";
import MainContent from "@/components/layout/MainContent";
import SiteFooter from "@/components/layout/Footer";
import { links } from "@/config/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const getCurrentSideLinks = () => {
    return Object.entries(links).find(
      ([href, link]) => currentPath?.startsWith(href) && link.sideLinks
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
  }, [currentPath, router]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopMenu onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        {isHydrated ? (
          <MainContent currentPath={currentPath} sideLinks={sideLinks}>
            {children}
          </MainContent>
        ) : null}
        <SiteFooter />
      </main>
    </div>
  );
}
