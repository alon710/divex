import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, Fish, FishIcon } from "lucide-react";
import Link from "next/link";

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
      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold">
          Pricing Plans
        </h2>
      </section>
    </>
  );
}
