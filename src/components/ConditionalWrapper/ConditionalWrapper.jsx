'use client';

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from './conditional.module.css'

export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/404"]; // Hide navbar only on 404
  const hideFooterRoutes = ["/404"]; // Hide footer only on 404

  const showNavbar = !hideNavbarRoutes.includes(pathname);
  const showFooter = !hideFooterRoutes.includes(pathname);

  // Determine Navbar background color
  const navbarBgClass = pathname === "/" ? "bg-white" : styles.primaryNavbar;
  const logoVariation = pathname === "/" ? "/Images/logo.svg" : '/Images/logo2.svg';
  const buttonSignUp = pathname === "/" ? "#1A73E8" : "rgb(102 164 245)";

  return (
    <>
      {showNavbar && <Navbar backGround={navbarBgClass} logoVariation={logoVariation} buttonSignUp={buttonSignUp} />} {/* Navbar always shows except on 404 */}
      <main className="w-100">{children}</main>
      {showFooter && <Footer />} {/* Footer always shows except on 404 */}
    </>
  );
}
