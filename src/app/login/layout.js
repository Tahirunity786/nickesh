"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        
      }}
      className="mt-5 mb-5"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#FAFAFA",
          padding: "20px",
          borderRadius: "12px",
          
        }}
      >
        <SessionProvider>
        {children}

        </SessionProvider>
      </div>
    </div>
  );
};

export default AuthLayout;
