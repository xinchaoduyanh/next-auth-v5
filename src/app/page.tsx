import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center  justify-center bg-sky-500">
      <div className="space-y-4">
        <h1 className={cn("text-6xl text-white font", font.className)}>Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <Button variant={"secondary"} size="lg">
          Login
        </Button>
      </div>
    </main>
  );
}
