"use client";
import { CodeXml, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeChanger } from "./theme-changer";
import { Button } from "../ui/button";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "../ui/loader";
import CustomLoader from "./customLoader";

const links = [
  { title: "News", a: "news" },
  { title: "Blog", a: "blog" },
  { title: "Projects", a: "projects" },
  { title: "Users", a: "users" },
];

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full z-20 bg-background  fixed top-0 left-0">
      <div className="wu-max h-24 flex-between">
        <Link
          href={"/"}
          className="text-4xl font-black flex-center gap-3 text-primary"
          
        >
          <CodeXml size={30} />
          DEPO
        </Link>
        <div
          className={
            open
              ? "fixed top-0 left-0 h-screen flex-col  bg-background flex-center w-full gap-10"
              : "flex items-center gap-10 max-lg:hidden"
          }
        >
          <div className="flex-center gap-10 text-xl tracking-widest max-lg:flex-col">
            {links.map((l) => (
              <Link href={l.a} onClick={()=>(setOpen(false))} key={l.a}>
                {l.title}
              </Link>
            ))}
          </div>
          <Button
            onClick={() => setOpen(!open)}
            className={
              open
                ? "fixed top-7 right-7 text-background max-sm:right-3"
                : "hidden"
            }
          >
            <X />
          </Button>
          <ThemeChanger />
          {isLoading && <CustomLoader />}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant={"default"} size={"sm"} asChild>
                <Link href={"/"}>Dashboard</Link>
              </Button>
              <Button className="w-max p-1 " variant={"outline"}>
                <UserButton afterSignOutUrl="/" />
              </Button>
            </>
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant={"outline"} className="w-full">
                  Sign in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button variant={"default"} className="w-full">
                  Sign up
                </Button>
              </SignInButton>
            </>
          )}
        </div>
        <Button onClick={() => setOpen(!open)} className="hidden max-lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6 h-6 text-background"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
