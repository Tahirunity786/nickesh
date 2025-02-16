"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from './navbar.module.css'
import Offcanvas from "../Offcanvas/Offcanvas";



export default function Navbar({ backGround, logoVariation, buttonSignUp }) {
  const router = useRouter()
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${backGround ? backGround : 'bg-white'} ${styles.resMargin} pt-1 mb-lg-5 pRelative`}>
      <div className="container justify-content-sm-start">
        {/* Mobile Menu Toggle */}
        <div className="d-flex justify-content-start align-items-center gap-2">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Logo */}
          <Link className={`navbar-brand ${styles.navbarLogo}`} href="/">
            <Image src={logoVariation} alt="ATPL PRO" width={170} height={70} priority />
          </Link>

        </div>


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
        <div className ={`gap-3 ${styles.dflexButton}`}>
          <button type="button" className={`${styles.navButtonAeroWarning} ${styles.navBtnAro}`} onClick={() => { router.push('/e-shop') }} >E-Shop</button>
          <button type="button" className={`${styles.navButtonAeroPrimary} ${styles.navBtnAro}`} style={{ backgroundColor: `${buttonSignUp}` }}  onClick={() => { router.push('/register') }}>Sign In</button>
        </div>
        <Offcanvas navlinks={navItems}/>
      </div>
    </nav>
  );
}
