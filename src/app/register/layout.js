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
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #D9D9D9"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
