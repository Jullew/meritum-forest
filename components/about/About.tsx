"use client";
import React from "react";
import {
  GiPulleyHook,
  GiGrass,
  GiCircularSaw,
  GiHighGrass,
  GiHighTide,
  GiFruitTree,
} from "react-icons/gi";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";

type Props = {};

function About({}: Props) {
  return (
    <section id="services" className="scroll-smooth pt-8">
      <div className="container mx-auto mt-20 px-4">
        <div className="flex flex-col">
          <h3 className="uppercase font-Jost  font-semibold tracking-wider text-lg my-2 text-g">
            Co robimy?
          </h3>
          <h2 className="uppercase font-barlow w-1/1 xl:w-1/2 text-4xl md:text-6xl my-2">
            NASZE ZAANGAŻOWANIE W PRACĘ Z DRZEWAMI I KRZEWAMI
          </h2>
          <div className="mt-10 flex flex-wrap">
            <div className="w-1/1 md:w-1/1 md:w-1/3 border p-4 group relative hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiPulleyHook size={50} />
              <h2 className="text-xl font-medium h-[10%]">
                Specjalistyczne usługi alpinistyczne (arborystyka)
              </h2>
              <p>
                Nie wszystkie drzewa można wyciąć metodą tradycyjną z ziemi.
                Powodów może być wiele, np: sąsiedztwo domu, ogrodzenia, garażu,
                linii energetycznych itp. Przy takich zagrożeniach wykonujemy
                cięcie drzewa dwoma metodami:
              </p>
              <ul className="m-4 list-decimal">
                <li>
                  Za pomocą zwyżki - tam gdzie możliwy jest podjazd zwyżki.
                </li>
                <li>
                  Metodą alpinistyczną - wszędzie tam, gdzie inne metody nie
                  mogły być zrealizowane.
                </li>
              </ul>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
            <div className="w-1/1 md:w-1/1 md:w-1/3 border p-4 group relative hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiHighGrass size={50} />
              <h2 className="text-xl font-medium h-[10%]">
                Koszenie trawników
              </h2>
              <p>
                Jeśli marzy nam się piękny zadbany trawnik musimy w okresie od
                wczesnej wiosny do końca października systematycznie go kosić.
                Zabieg tan sprawi, że nasza trawa będzie zadbana, gęsta i
                zdrowa. Wykonujemy prace związane z pielęgnacją terenów
                zielonych takie jak:
              </p>
              <ul className="list-decimal mx-4 my-4">
                {" "}
                <li>
                  Przemysłowe wykaszanie terenów - tereny pod inwestycję,
                  budowę, spółdzielnie,parki itp
                </li>
                <li>
                  Indywidualne wykaszanie terenów zielonych - ogrody i
                  przydomowe trawniki.
                </li>
              </ul>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
            <div className="w-1/1 md:w-1/3 border p-4 relative group hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiHighTide size={50} />
              <h2 className="text-xl font-medium h-[10%]">
                Wycinanie drzew pod liniami energetycznymi
              </h2>
              <p>
                Prace związane z wycinką drzew pod liniami energetycznymi
                stanowi dla naszej firmy główny nurt działań. Posiadamy
                odpowiednie do tego uprawnienia i szkolenia. Wykonujemy zarówno
                cięcia metodą tradycyjną z ziemi (wycinka całych drzew) jak i
                metodą alpinistyczną (przycinki techniczne gałęzi, celem
                zniwelowania zagrożeń). Nasze prace prowadzone są kolejno pod
                liniami niskiego, średniego i wysokiego napięcia (230V, 20kV,
                110kV).
              </p>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
          </div>
          <div className="flex flex-wrap mt-0">
            <div className="w-1/1 md:w-1/3 border p-4 group relative hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiGrass size={50} />
              <h2 className="text-xl font-medium h-[10%]">
                Strzyżenie żywopłotów
              </h2>
              <p>
                Ładny żywopłot to niejedyny efekt regularnego strzyżenia. Dzięki
                temu zabiegowi będzie on zdrowy i gęsty od góry do samego dołu.
                Gęsty i wysoki żywopłot oddziela ogród od gwaru i hałasów
                dochodzących z ulicy. Dzięki niemu nasz ogród jest miejscem
                ciszy, spokoju i wypoczynku.
              </p>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
            <div className="w-1/1 md:w-1/3 border p-4 group relative hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiCircularSaw size={50} />
              <h2 className="text-xl font-medium h-[10%]">Wycinanie drzew</h2>
              <p>
                Nasza firma wykonuje każdą usługę związaną z wycięciem lub
                przycięciem drzewa. Należy jednak zwrócić uwagę, że zgodnie z
                prawem BEZ ZEZWOLENIA można wyciąć jedynie drzewa poniżej 10
                lat, drzewa owocowe, a także dokonać przycięcia gałęzi i
                konarów. Natomiast każde inne drzewo nie mieszczące się w
                powyższej kategorii wymaga bezwzględnie POZWOLENIA NA WYCIĘCIE
                DRZEW
              </p>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
            <div className="w-1/1 md:w-1/3 border p-4 relative group hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
              <GiFruitTree size={50} />
              <h2 className="text-xl font-medium h-[10%]">Pielęgnacja drzew</h2>
              <p>
                Pielęgnacja drzew i krzewów polega na cięciu konarów i gałęzi,
                tak by stymulować ich prawidłowy wzrost. Wykonujemy:
              </p>
              <ul className="list-decimal mx-4 my-4">
                <li>
                  Cięcia pielęgnacyjne, mające na celu odpowiednie
                  ukształtowanie korony drzewa, jak również jej zdrowy wzrost.{" "}
                </li>
                <li>
                  Cięcia techniczne, których celem jest likwidacja kolizji z
                  infrastruktura techniczną (kable telekomunikacyjne,
                  teleinformatyczne, energetyczne itp)
                </li>
              </ul>
              {/* <div className="ease-linear absolute right-4 bottom-4 transition-all group-hover:translate-x-2">
                <HiArrowLongRight size={35} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
