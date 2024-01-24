import React from "react";

const GlassmorphicButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        padding: "10px 20px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -2px 2px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        color: "white",
        cursor: "pointer",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      {children}
    </button>
  );
};

export default GlassmorphicButton;
