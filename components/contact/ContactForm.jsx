"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    emailjs
      .sendForm(
        "service_a3s1kfg",
        "template_tan1auw",
        form.current,
        "zdhSDv_BwJ3ommWpM"
      )
      .then(
        (result) => {
          setSent(true);
          setSuccess(true);
          setSending(false);
        },
        (error) => {
          setError(true);
          setSending(false);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        className={`flex flex-col ${
          sent ? "hidden" : "block"
        } mx-auto w-[90%] lg:w-1/2 lg:p-20`}
        onSubmit={sendEmail}
      >
        <div className="flex dark:text-gray-200 flex-col">
          <label className="font-semibold flex flex-col gap-2">
            Imię
            <input
              className="border font-normal mb-6 focus:outline-none h-[50px]  dark:bg-gray-800 focus:border-green-800"
              type="text"
              name="name"
              required
            />
          </label>

          <div className="flex justify-between">
            <label className="font-semibold flex gap-2  flex-col w-[47%]">
              Telefon
              <input
                type="phone"
                name="phone"
                className="border font-normal mb-6 focus:outline-none h-[50px] p-[15px] dark:bg-gray-800 focus:border-green-800"
                required
              />
            </label>

            <label className="font-semibold flex gap-2  flex-col w-[47%]">
              Email
              <input
                type="email"
                name="email"
                className="border font-normal mb-6 focus:outline-none h-[50px] p-[15px] dark:bg-gray-800 focus:border-green-800"
                required
              />
            </label>
          </div>
        </div>

        <label className="dark:text-gray-200 font-semibold flex flex-col gap-2">
          Wiadomość
          <textarea
            name="message"
            className="border w-[100%] font-normal mb-6 focus:outline-none h-[100px] p-[15px] dark:bg-gray-800 focus:border-green-800"
            required
          />
        </label>

        <button
          type="submit"
          className={`${
            sending ? "hidden" : "block"
            // } p-2 fo-medium flex flex-row   justify-center items-center gap-2  btn-submit text-[#1f2937]  rounded-full my-6`}
          } bg-green-800 hover:bg-green-400 text-white dark:text-white border  gap-2 group hover:translate-y-1 transition-all hover:text-[#323232]  items-center justify-center p-2 cursor-pointer flex flex-row `}
        >
          Wyślij{" "}
          <BsSendFill className=" dark:text-white text-white group-hover:text-[#323232] " />
        </button>
        <button
          className={`${
            sending ? "block" : "hidden"
          }  bg-green-900 text-white dark:text-white border  gap-2 group   items-center justify-center p-2 flex flex-row cursor-not-allowed`}
        >
          Wysyłanie...
        </button>
      </form>

      <div className={success ? "inline lg:w-1/2" : "hidden"}>
        <div className="alert alert-success bg-green-950 p-4 rounded-2xl border-green-800 shadow-lg">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-400 stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-green-400">
              Wiadomość została wysłana pomyślnie!
            </span>
          </div>
        </div>
      </div>

      <div className={error ? "inline" : "hidden"}>
        <div className="alert alert-error bg-red-950 p-4 rounded-2xl border-red-800 shadow-lg">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-red-400 flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="dark:text-red-400">
              Ups! Coś poszło nie tak, odśwież stronę i spróbuj ponownie!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
