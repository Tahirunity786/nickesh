import "./globals.css";

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
