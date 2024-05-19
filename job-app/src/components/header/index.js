"use client";
import Theme from "@/utils/Theme";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <>
      <nav className="flex items-center justify-between border-b border-gray-200 py-4">
        <div>
          <h2>Job Portal</h2>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/job-applied"}>Applied</Link>
          <Link href={"/joblist"}>JobList</Link>
          <Link href={"/job-selected"}>Job Selected</Link>
          <Link href={"/resume"}>Resume</Link>
          {!true ? (
            <Link href={"/profile"}>Profile </Link>
          ) : (
            <Link href={"/auth/login"}>LogIn </Link>
          )}
          <Theme />
        </div>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="p-4 flex justify-between items-center">
                  <p className="text-slate-50">Job Portal</p>
                  <span>
                    <Theme />
                  </span>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center gap-5">
                    <SheetClose asChild>
                      <Link href={"/"}>Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/job-applied"}>Applied</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/joblist"}>JobList</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/job-selected"}>Job Selected</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/resume"}>Resume</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={"/profile"}>Profile</Link>
                    </SheetClose>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}

export default Header;
