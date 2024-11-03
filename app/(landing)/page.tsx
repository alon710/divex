import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SubscriptionTiersInOrder,
  SubscriptionTierT,
} from "@/data/subscriptionsTiers";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { FooterLinksGroup, OrderedFooterLinksGroups } from "@/data/footerLinks";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-20 flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className=" text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
          Divex Management System
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Welcome to the best diving centers management system. We provide a
          complete solution for managing your diving center, including managing
          your divers, stuff, equipment, and more.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section id="pricing" className="px-8 py-16 bg-accent/5 flex-col">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {SubscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier}></PricingCard>
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col gap-8 sm:px-14">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col gap-8 text-start">
          <div className="flex flex-col gap-16 sm:flex-row">
            {OrderedFooterLinksGroups.map((group) => (
              <FooterLinkGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  canCustomDomain,
  canCustomWebsite,
  canRemoveBranding,
  hasMostPopularBadge,
  hasUnlimitedDivers,
  hasUnlimitedEquipment,
  hasUnlimitedStuff,
}: SubscriptionTierT) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          {priceInCents / 100.0} USD / month
        </CardTitle>
        <CardDescription>
          {hasUnlimitedDivers && <Feature>Unlimited divers</Feature>}
          {hasUnlimitedEquipment && <Feature>Unlimited equipment</Feature>}
          {hasUnlimitedStuff && <Feature>Unlimited stuff</Feature>}
          {canCustomDomain && <Feature>Custom domain</Feature>}
          {canCustomWebsite && <Feature>Custom website</Feature>}
          {canRemoveBranding && <Feature>Remove branding</Feature>}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <SignInButton>
          <Button
            className="w-full"
            variant={hasMostPopularBadge ? "accent" : "default"}
          >
            {
              <span className="flex items-center justify-center gap-2">
                {hasMostPopularBadge && (
                  <StarIcon className="size-4 text-white bg-accent rounded-full" />
                )}
                Get Started With
                <span className="font-semibold">{name}</span>
              </span>
            }
          </Button>
        </SignInButton>
      </CardContent>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2 my-2", className)}>
      <CheckIcon className="size-4 p-0.5 bg-accent/10 rounded-full" />
      <span className="text-sm text-primary/85">{children}</span>
    </div>
  );
}

function FooterLinkGroup({ title, links }: FooterLinksGroup) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
