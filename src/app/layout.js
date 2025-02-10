import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ConditionalWrapper from "@/components/ConditionalWrapper/ConditionalWrapper";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConditionalWrapper>
          {children}
        </ConditionalWrapper>
      </body>
    </html>
  );
}
