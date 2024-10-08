import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 ">
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.polytech.univ-smb.fr/">
                      <Image
                        src="/polytech.png"
                        alt="School Logo"
                        width={150}
                        height={150}
                        className="h-auto w-auto"
                      />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Our Beloved School</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="/">
                        <Image
                          src="/nextgen.png"
                          alt="NextGen Logo"
                          width={100}
                          height={100}
                          className="h-auto w-auto"
                        />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home Page</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/blog" passHref>
                <Button
                  variant="ghost"
                  className="text-lg font-bold text-cyan-300 hover:text-cyan-100 hover:bg-cyan-900/30"
                >
                  Blog
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/newsletter" passHref>
                <Button
                  variant="ghost"
                  className="text-lg font-bold text-cyan-300 hover:text-cyan-100 hover:bg-cyan-900/30"
                >
                  Newsletter
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <Button
                  variant="outline"
                  className="text-lg font-bold border-cyan-500 text-cyan-300 bg-transparent"
                >
                  About Us
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
