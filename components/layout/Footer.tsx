import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const thisYear = new Date().getFullYear();
  return (
    <div className="w-full relative h-[300px] bg-green-950 border-2 text-gray-300 border-gray-700">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">MERITUM Sp. z o.o.</h2>
            <ul className="">
              <li>ul. Paderewskiego 31</li>
              <li>42-300 Myszków</li>
              <li>
                Telefon: <Link href="tel:+48793023649">+48 793 023 649</Link>
              </li>
              <li>
                E-mail:{" "}
                <Link href="mailto:forest@meritumcenter.org.pl">
                  forest@meritumcenter.org.pl
                </Link>
              </li>
              <li>
                E-mail:{" "}
                <Link href="mailto:meritumcenter@gmail.com">
                  meritumcenter@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white/10 border-t border-gray-600 absolute left-0 right-0 bottom-0">
        <div className="container mx-auto text-sm py-2">
          Copyright &copy; {thisYear} Meritum Forest. Wszelkie prawa zastrzeżone
        </div>
      </div>
    </div>
  );
}

export default Footer;
