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
          maxWidth: "400px",
          background: "#FAFAFA",
          padding: "20px",
          borderRadius: "12px",
          
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
