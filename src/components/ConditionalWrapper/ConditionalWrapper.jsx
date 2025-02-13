'use client';

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from './conditional.module.css';

export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();

  // Routes where Navbar and Footer should be hidden
  const hideNavbarRoutes = ["/404", "/login", "/register"];
  const hideFooterRoutes = ["/404", "/login", "/register"];

  // Determine visibility
  const showNavbar = !hideNavbarRoutes.includes(pathname);
  const showFooter = !hideFooterRoutes.includes(pathname);

  // Navbar background and variations based on the route
  const isHomePage = pathname === "/";
  const navbarBgClass = isHomePage ? "bg-white" : styles.primaryNavbar;
  const logoVariation = isHomePage ? "/Images/logo.svg" : "/Images/logo2.svg";
  const buttonSignUpColor = isHomePage ? "#1A73E8" : "rgb(102, 164, 245)";

  return (
    <>
      {/* Conditional Navbar Rendering */}
      {showNavbar && (
        <Navbar
          backGround={navbarBgClass}
          logoVariation={logoVariation}
          buttonSignUp={buttonSignUpColor}
        />
      )}
      
      {/* Main Content */}
      <main className="w-100">{children}</main>
      
      {/* Conditional Footer Rendering */}
      {showFooter && <Footer />}
    </>
  );
}
