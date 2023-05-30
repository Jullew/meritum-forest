import React from "react";
import Counter from "../animations/Counter";
import Image from "next/image";
import forestRoad from "@/public/why-us/whyus.jpg";

type Props = {};

function Whyus({}: Props) {
  return (
    <section id="whyus" className="scroll-smooth pt-10">
      <div className="container my-20 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/3 bg-green-500 relative">
            <Image src={forestRoad} alt="Droga przez las" fill />
          </div>
          <div className="w-1/1 lg:w-2/3 px-4 py-10 lg:p-20 text-center lg:text-left flex flex-col bg-green-950 text-white">
            <h3 className="uppercase font-Jost  font-semibold tracking-wider text-lg my-2 text-g">
              Dlaczego my?
            </h3>
            <h2 className="uppercase font-barlow text-4xl md:text-4xl my-2">
              Wierzymy, że drzewa są niezwykłym zasobem, którym należy
              odpowiedzialnie zarządzać, aby wytwarzać szeroką gamę produktów. A
              piękny ogród poprawia samopoczucie.
            </h2>
            <div className="h-[1px] w-1/5 mx-auto lg:mx-0 my-6 bg-g"></div>
            <div className="flex flex-wrap md:flex-nowrap gap-6 md:justify-around w-1/1">
              <div className="flex w-[100%] md:w-1/3 flex-col gap-4">
                <div className="font-barlow text-g text-6xl">
                  <Counter value={10} />K
                </div>
                <div className="">Zadowolonych klientów</div>
              </div>
              <div className="flex w-[100%] md:w-1/3 flex-col gap-4">
                <div className="font-barlow text-g text-6xl">
                  <Counter value={8} />
                </div>
                <div className="">Lat w branży</div>
              </div>
              <div className="flex w-[100%] md:w-1/3  flex-col gap-4">
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
    </section>
  );
}

export default Whyus;
