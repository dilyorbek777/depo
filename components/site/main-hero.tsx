import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MainHero() {
  return (
    <div className="h-[80vh] px-2  overflow-hidden my-12 relative flex w-full flex-col flex-center sm:mt-24">
      <div className="absolute -right-[40px] grid grid-cols-8 gap-5 max-sm:hidden bottom-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary rounded-full" />
        ))}
      </div>

      <div className="absolute -left-[40px] grid grid-cols-8 gap-5 top-5 max-sm:hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary rounded-full" />
        ))}
      </div>
      <h1 className="mt-8 max-w-sm  text-primary  text-center text-4xl font-extrabold  sm:max-w-4xl sm:text-6xl">
        A generation-suited platform with the astutest technology
      </h1>
      <span className="mt-8 max-w-lg text-center text-xl leading-relaxed text-foreground">
        Explore global news, cutting-edge tech, vital initiatives, and upcoming
        advancements with DEPO
      </span>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
        <Link
          href="https://example.com/new-feature"
          className="flex flex-row items-center  justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-primary hover:bg-primary/70"
        >
          Lets start
        </Link>
        <Link
          href="#demo"
          className="flex flex-row items-center  justify-center gap-x-2 rounded-lg border-2 border-border px-10 py-3 text-primary"
        >
          Learn More 
        </Link>
      </div>
    </div>
  );
}
