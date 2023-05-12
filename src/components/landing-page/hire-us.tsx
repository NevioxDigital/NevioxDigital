import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const HireUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const habdleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = form.current;

    if (!formElement) {
      console.error("Form element is null");
      return;
    }

    emailjs
      .sendForm(
        "service_fnnm0ii",
        "template_e35ra8l",
        formElement,
        "PtlEp0UsrKJwQlPzP"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          alert(error);
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className=" flex-col h-screen mt-64 md:mt-0">
      <div className="h-16 flex-1 items-center justify-center text-white text-xl font-title font-bold mr-auto ml-2 md:ml-16 mt-10 overflow-hidden">
        <span
          className="border-b border-gold pb-1 relative animate-slide-in"
          id="hire"
        >
          Hire us
        </span>
      </div>
      <div className="justify-center items-center ml-auto mt-24  form-style img-hire-us">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center text-black"
        >
          <label htmlFor="email" className="mb-2 text-gold font-title">
            Your e-mail:
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={habdleEmailChange}
            className="border-2 rounded-md px-2 py-1 mb-4 w-64 font-title text-sm"
            required
            pattern="@"
          />
          <label htmlFor="subject" className="mb-2 text-gold font-title ">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Minimum 6 characters"
            value={subject}
            onChange={handleSubjectChange}
            className="border-2 rounded-md px-2 py-1 mb-4 w-64 font-title text-sm"
            required
            minLength={6}
          />
          <label htmlFor="message" className="mb-2 text-gold font-title">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Minimum message size 20 characters"
            value={message}
            onChange={handleMessageChange}
            className="border-2 rounded-md px-2 py-1 mb-4 w-96 md:text-3xl"
            rows={4}
            required
            minLength={20}
          />
          <button
            type="submit"
            className="bg-gold px-4 py-2 rounded-md text-black w-64 hover-transition font-title"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
