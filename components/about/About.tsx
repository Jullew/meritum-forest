import React from "react";
import { GiPulleyHook, GiGrass, GiHighTide } from "react-icons/gi";
import { HiArrowLongRight } from "react-icons/hi2";
type Props = {};

function About({}: Props) {
  return (
    <div className="container px-20 mx-auto mt-20">
      <div className="flex flex-col">
        <h2 className="uppercase font-Jost  font-semibold tracking-wider text-lg my-2 text-g">
          Co robimy?
        </h2>
        <h1 className="uppercase font-barlow w-1/2 text-6xl my-2">
          NASZE ZAANGAŻOWANIE W PRACĘ Z DRZEWAMI I KRZEWAMI
        </h1>
        <div className="my-10 flex flex-wrap">
          <div className="w-1/3 border p-4 group hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
            <GiPulleyHook size={50} />
            <h2 className="text-xl font-medium h-[10%]">
              Specjalistyczne usługi alpinistyczne (arborystyka)
            </h2>
            <p>
              Nie wszystkie drzewa można wyciąć metodą tradycyjną z ziemi.
              Powodów może być wiele, np: sąsiedztwo domu, ogrodzenia, garażu,
              linii energetycznych itp.
            </p>
            <div className="self-end ease-linear transition-all group-hover:translate-x-2">
              <HiArrowLongRight size={35} />
            </div>
          </div>
          <div className="w-1/3 border p-4 group hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
            <GiGrass size={50} />
            <h2 className="text-xl font-medium h-[10%]">Koszenie trawników</h2>
            <p>
              Jeśli marzy nam się piękny zadbany trawnik musimy w okresie od
              wczesnej wiosny do końca października systematycznie go kosić.
              Zabieg tan sprawi, że nasza trawa będzie zadbana, gęsta i zdrowa.
            </p>
            <div className="self-end ease-linear transition-all group-hover:translate-x-2">
              <HiArrowLongRight size={35} />
            </div>
          </div>
          <div className="w-1/3 border p-4 group hover:bg-green-900 hover:text-white ease-linear transition-all border-gray-400 flex flex-col">
            <GiHighTide size={50} />
            <h2 className="text-xl font-medium h-[10%]">
              Wycinanie drzew pod liniami energetycznymi
            </h2>
            <p>
              Prace związane z wycinką drzew pod liniami energetycznymi stanowi
              dla naszej firmy główny nurt działań.
            </p>
            <div className="self-end ease-linear transition-all group-hover:translate-x-2">
              <HiArrowLongRight size={35} />
            </div>
          </div>
          <div className="w-1/3 h-[200px] border border-gray-400"></div>
          <div className="w-1/3 h-[200px] border border-gray-400"></div>
          <div className="w-1/3 h-[200px] border border-gray-400"></div>
          <div className="w-1/3 h-[200px] border border-gray-400"></div>
          <div className="w-1/3 h-[200px] border border-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
