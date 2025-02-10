"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from './navbar.module.css'

export default function Navbar({backGround, logoVariation}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg pt-3 ${backGround ? backGround : 'bg-white'} py-3 pt-0`} style={{position:"relative"}}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <Image src={logoVariation} alt="Your Company" width={170} height={70} priority />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
          <ul className={`navbar-nav mx-auto ${styles.navigation}`}>
            {navItems.map(({ name, path }) => (
              <li className="nav-item" key={path}>
                <Link className={` ${pathname === path ? `${styles.activeItem}` : "ms-3 me-3"}`} href={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button type="button" className={`${styles.navButtonAeroWarning} ${styles.navBtnAro}`} >E-Shop</button>
            <button type="button" className={`${styles.navButtonAeroPrimary} ${styles.navBtnAro}`}>Sign In</button>
          </div>
        {/* <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} style={{position:"relative"}}> */}
        {/* </div> */}
      </div>
    </nav>
  );
}
