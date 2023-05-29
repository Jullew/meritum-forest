import React from "react";
import las from "@/public/hero/las.jpg";
import Image from "next/image";
import bg from "@/public/hero/bg.svg";
// import { BsTelephoneOutboundFill, BsCardList } from "react-icons/bs";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-gradient-to-br from-[#3b5b4c] to-[#0e392a]">
      <div className="bg-heroBG bg-opacity-50 w-[100%] h-[100%] ">
        <div className="w-1/2 absolute right-0 h-[100vh] overflow-hidden">
          <div className="absolute w-full h-full bg-black/30"></div>
          <Image src={las} alt="las" />
        </div>
        <div className="mx-auto container">
          <div className="w-[50%] flex flex-col h-[100vh] z-10 gap-2 text-white justify-center">
            <h1 className="text-[110px] leading-[120px]  font-barlow">
              WYCINKA DRZEW I KRZEWÓW, RODZINNA FIRMA
            </h1>
            <div className="h-[2px] w-1/5 bg-amber-600 my-4"></div>
            <h2 className="font-normal w-2/3 text-xl my-4">
              Meritum Forest, firma, której początki sięgają 2015 roku.
              Specjalizujemy się w wycince oraz pielęgnacji drzew i krzewów.{" "}
            </h2>
            <div className="flex justify-center gap-4 pt-10 items-center">
              <Link href="tel:+48793023649">
                <button className="bg-[#00a680] hover:bg-green-300 hover:text-gray-700 ease-out transition-all flex justify-center items-center gap-2 tracking-widest p-4">
                  {/* <BsTelephoneOutboundFill /> ZADZWOŃ */}
                </button>
              </Link>
              <button className="bg-[#f17444] hover:bg-orange-300 hover:text-gray-700 ease-out transition-all flex justify-center items-center gap-2 tracking-widest p-4">
                {/* <BsCardList /> POZNAJ OFERTĘ */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="flex">
    //     <div className="w-1/2 bg-gradient-to-br from-[#3b5b4c] to-[#1e392a] h-[100vh]"></div>
    //     <div className="w-1/2 bg-indigo-200 h-[100vh]"></div>
    //   </div>
    //   <div className="absolute container mx-auto top-0">ENEDUE</div>
    // </div>
  );
}

export default Hero;
