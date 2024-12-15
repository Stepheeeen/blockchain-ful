import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/Logo-labelled.png";
import { ChevronRight } from "lucide";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const nav = [
    { name: "Home", path: "", active: "active-link" },
    { name: "About", path: "about", active: "" },
    { name: "Teams", path: "contact", active: "" },
    { name: "Events", path: "login", active: "" },
  ];

  return (
    <nav className="w-full flex p-5 items-center justify-between text-white text-[18px] font-medium">
      <div className="flex items-center gap-2">
        <Image alt="" src={Logo} className="" />
      </div>

      <ul className="flex items-center justify-between w-1/5 ml-[-13%] text-[19px]">
        {nav.map((links, i) => (
          <li key={i}>
            <Link
              href={links.path}
              className={`${
                activeSection === links.path
                  ? "active-link"
                  : "text-gray-300"
              }
              hover:underline`}
            >
              {links.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 items-center">
        <p>Join Us</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
