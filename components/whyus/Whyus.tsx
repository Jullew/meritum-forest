import React from "react";
import Counter from "../animations/Counter";
import Image from "next/image";
import forestRoad from "@/public/why-us/whyus.jpg";

type Props = {};

function Whyus({}: Props) {
  return (
    <div className="container my-20 mx-auto">
      <div className="flex">
        <div className="w-1/3 bg-green-500 relative">
          <Image src={forestRoad} alt="Droga przez las" fill />
        </div>
        <div className="w-2/3 p-20 flex flex-col bg-green-950 text-white">
          <h3 className="uppercase font-Jost  font-semibold tracking-wider text-lg my-2 text-g">
            Dlaczego my?
          </h3>
          <h2 className="uppercase font-barlow text-4xl md:text-4xl my-2">
            Wierzymy, że drzewa są niezwykłym zasobem, którym należy
            odpowiedzialnie zarządzać, aby wytwarzać szeroką gamę produktów. A
            piękny ogród poprawia samopoczucie.
          </h2>
          <div className="h-[1px] w-1/5 my-6 bg-g"></div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <div className="font-barlow text-g text-6xl">
                <Counter value={8} />
              </div>
              <div className="">Lat w branży</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-barlow text-g text-6xl">
                <Counter value={10} />K
              </div>
              <div className="">Zadowolonych klientów</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-barlow text-g text-6xl">
                <Counter value={10} />
                KM<sup>2</sup>
              </div>
              <div className="">Skoszonej trawy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
