"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { useTheme } from "@/context/ThemeContext";
import Links from "./links/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  const session = true;

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="sm:px-16 px-8 py-4  w-full flex justify-between  dark:text-white  max-lg:relative">
      <div className="w-[100px] relative">
        <Link href="/">
          <Image src="/next.svg" alt="Logo" fill />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-16 flex-1 max-lg:hidden">
        <div className="relative flex justify-between items-center">
          <input
            type="search"
            className="w-full bg-slate-200 p-1 px-2"
            placeholder="Search..."
          />
          <div className="absolute right-2">
            <IoSearch />
          </div>
        </div>
        <Links />
      </div>

      <div className="flex justify-between items-center gap-8">
        <Button
          variant="default"
          className="bg-blue-600 px-6 max-lg:hidden hover:bg-blue-800"
          asChild
        >
          {session ? (
            <Link href="/logout">Logout</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
        <Switch onClick={toggleTheme} />
      </div>

      <div className="hidden max-lg:flex max-lg:items-center">
        <GiHamburgerMenu
          className="cursor-pointer"
          fontSize={24}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="w-[300px] h-screen flex justify-between items-start px-6 py-6 fixed top-0 right-0 z-10 bg-slate-400 dark:bg-black dark:text-white overflow-x-hidden">
            <Links />
            <MdClose
              className="cursor-pointer"
              fontSize={28}
              onClick={() => setToggleMenu(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
