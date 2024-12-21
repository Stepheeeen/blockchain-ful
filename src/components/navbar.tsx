import React, { useEffect, useState } from "react";
import { ChevronRight, Wallet, Menu, X } from "lucide-react";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
  
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          currentSection = section.getAttribute("id") || "";
        }
      });
  
      // Explicitly handle Home section
      if (window.scrollY === 0) {
        currentSection = "";
      }
  
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  

  const navItems = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Teams", path: "#teams" },
    { name: "Events", path: "#events" },
  ];

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(targetId); // Explicitly set active section
    } else if (path === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection(""); // Set Home as active section
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image alt="Logo" src={Logo} className="w-14 mr-2" />
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                BlockchainFul
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`${
                    activeSection === item.path.slice(1)
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  } px-3 py-2 text-md font-medium transition-colors duration-200`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleWalletConnect}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                walletConnected
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
              }`}
            >
              <p>Join Us</p>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-900/95 backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`${
                activeSection === item.path.slice(1) ||
                (item.path === "#" && activeSection === "")
                  ? "text-purple-400"
                  : "text-gray-300"
              } block px-3 py-2 text-base font-medium`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={handleWalletConnect}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
