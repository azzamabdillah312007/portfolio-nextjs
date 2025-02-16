import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

export const Contact = () => {
  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">+62 838-2298-2052</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">azzam.rpl22@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let`s Connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and lets schedule a call!
        </p>
        <form action="https://getform.io/f/akkykrga" method="POST" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
             <input
              type="text"
              placeholder="Last name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
             <input
              type="email"
              placeholder="Email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
             <input
              type="phone"
              placeholder="Phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <textarea placeholder="message" className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">Send Message</button>
        </form>
      </div>
    </div>
  );
};
