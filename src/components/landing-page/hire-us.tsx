import React, { useState } from "react";


export const HireUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   
  };

  return (
    <div className=" flex-col h-screen  img-hire-us">
    <div className="h-16 flex-1 items-center justify-center text-white text-xl font-title font-bold mr-auto ml-16 mt-10 overflow-hidden">
      <span className="border-b border-gold pb-1 relative animate-slide-in" id='hire'>Hire us</span>
    </div>
    <div className="justify-center items-center ml-auto mt-24  form-style">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-gold"
      >
        <label htmlFor="email" className="mb-2">
          Your e-mail:
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={habdleEmailChange}
          className="border-2 rounded-md px-2 py-1 mb-4 w-64"
        />
        <label htmlFor="subject" className="mb-2">
          Subject:
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={handleSubjectChange}
          className="border-2 rounded-md px-2 py-1 mb-4 w-64"
        />
        <label htmlFor="message" className="mb-2">
          Message:
        </label>
        <textarea
          name="message"
          value={message}
          onChange={handleMessageChange}
          className="border-2 rounded-md px-2 py-1 mb-4 w-96"
          rows={4}
        />
        <button type="submit" className="bg-gold px-4 py-2 rounded-md text-black w-64 hover-transition">
          Submit
        </button>
      </form>
  </div>
</div>

  );
};
