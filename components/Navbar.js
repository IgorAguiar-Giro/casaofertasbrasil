"use client";

import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  // Generate the Links array dynamically
  const Links = [
    { name: "Favoritos", link: "/" },
    { name: "Carrinho", link: "/" },
    ...(isLoading
      ? [{ name: "Loading...", link: "/" }]
      : error
        ? [{ name: error.message, link: "/" }]
        : user
          ? [
              {
                name: `Welcome ${user.name}`,
                link: "/user",
              },
              { name: "Logout", link: "/api/auth/logout" },
            ]
          : [{ name: "Entrar", link: "/api/auth/login" }]),
  ];

  return (
    <>
      <div className="flex justify-between items-center p-4 border-2 shadow-md">
        <div className="md:text-2xl font-bold cursor-pointer">
          <ion-icon name="home-outline"></ion-icon>
          <p>Casa Ofertas Brasil</p>
        </div>

        {/* Hamburger menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Menu items */}
        <div
          className={`md:flex border-2 shadow-md md:border-0 md:shadow-none md:items-center md:space-x-4 fixed md:static bg-white w-1/3 md:w-auto transition-all duration-500 ease-in ${
            open
              ? "right-0 top-16 opacity-100"
              : "right-[-100%] top-16 opacity-0"
          } md:opacity-100 z-10`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            {Links.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
