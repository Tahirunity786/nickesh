"use client";
import { SessionProvider } from "next-auth/react";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:"20px",
        marginTop:"20px"

      }}
    >
      
        <SessionProvider>
          {children}
        </SessionProvider>
     
    </div>
  );
};

export default AuthLayout;
