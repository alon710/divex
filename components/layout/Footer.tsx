import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SiteFooter() {
  return (
    <footer className="fixed bottom-4 left-4 right-4">
      <Card className="bg-muted text-muted-foreground">
        <CardContent className="py-4 md:px-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose md:text-left">
              Built by
              <a
                href="https://github.com/shadcn"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 ml-1"
              >
                shadcn
              </a>
              . The source code is available on
              <a
                href="https://github.com/shadcn"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 ml-1"
              >
                GitHub
              </a>
              .
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/shadcn"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/in/shadcn"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
