import { NavBar } from "./_components/NavBar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%)] selection:bg-opacity-20">
      <NavBar />
      {children}
    </div>
  );
}
