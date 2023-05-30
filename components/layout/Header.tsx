"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAVBAR_LINKS } from "@/lib/consts/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

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
      } px-10 w-[100%] backdrop-blur-sm fixed z-50 text-white`}
    >
      <div className="font-barlow border-b h-[60px] flex justify-center items-center xl:hidden text-4xl text-center w-1/1 lg:text-5xl px-4 lg:px-10 ">
        <Link href="#top">MERITUM FOREST</Link>
      </div>
      <div className="border-b xl:flex hidden justify-between w-full  h-[60px] lg:h-[80px] items-center">
        <div className="font-barlow text-4xl text-center w-1/1 lg:text-5xl px-4 lg:px-10 ">
          <Link href="#top">MERITUM FOREST</Link>
        </div>
        <div className="xl:px-10 xl:block hidden">
          {/* <div className="block xl:hidden">
            <GiHamburgerMenu size={30} />
          </div> */}
          <ul className="hidden  xl:flex gap-10 text-sm uppercase font-medium">
            {NAVBAR_LINKS.map((item) => (
              <li key={item.key}>
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
