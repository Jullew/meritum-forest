import React from "react";
import Heading from "../layout/Heading";
import Link from "next/link";
import ContactForm from "./ContactForm";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact" className="scroll-smooth pt-20">
      <div className="mx-auto px-4 container">
        <Heading
          title="Zadzwoń lub napisz"
          subtitle="Porozmawiajmy o Twoim zleceniu"
        />
      </div>

      <div className="mx-auto mb-20 justify-center items-center container px-4 flex-wrap flex">
        <div className="flex w-1/1 lg:w-1/2 align-center flex-col my-20 ">
          <div className="w-1/1 text-center lg:text-left">
            <h3 className="uppercase font-Jost  font-semibold tracking-wider text-sm my-2 text-g">
              NAPISZ DO NAS
            </h3>
            <p className="dark:text-gray-200">
              Jeśli masz projekt, o którym chciałbyś porozmawiać,
              <br /> chętnie o nim przeczytamy{" "}
              <Link
                href="mailto:meritumforest@gmail.com"
                className="text-green-500 font-semibold dark:text-green-500 hover:underline hover:bg-green-500 hover:text-black rounded-lg px-1 transition-all duration-300"
              >
                meritumforest@gmail.com
              </Link>
            </p>
            <h3 className="uppercase font-Jost  font-semibold tracking-wider text-sm my-2 text-g">
              ZADZWOŃ DO NAS
            </h3>
            <p className="dark:text-gray-200">
              <Link
                href="tel:+48793023649"
                className="text-green-500 font-semibold dark:text-green-500 hover:underline hover:bg-green-500 hover:text-black rounded-lg px-1 transition-all duration-300"
              >
                793 023 649
              </Link>
            </p>

            <h3 className="uppercase font-Jost  font-semibold tracking-wider text-sm my-2 text-g">
              BIURO
            </h3>
            <p className="dark:text-gray-200">
              ul. Paderewskiego 31
              <br />
              42-300 Myszków
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
