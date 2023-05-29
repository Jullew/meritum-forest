"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAVBAR_LINKS } from "@/lib/consts/navigation";

type Props = { item: any };

function Header({}: Props) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div
      className={`${
        navbar ? "bg-green-950/80" : ""
      } px-10 w-[100%] backdrop-blur-sm fixed z-10 text-white`}
    >
      <div className="border-b flex justify-between w-full  h-[80px] items-center">
        <div className="font-barlow text-5xl px-10">MERITUM FOREST</div>
        <div className="px-10 ">
          <ul className="flex gap-10 text-sm uppercase font-medium">
            {NAVBAR_LINKS.map((item) => (
              <li>
                <Navbar key={item.key} item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Navbar({ item }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${
        pathname === item.path || "" ? "text-white " : "text-gray-300 "
      }  
    
      `}
    >
      {/* <span className="text-xl">{item.icon}</span> */}
      {item.label}
    </Link>
  );
}

export default Header;
