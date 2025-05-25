import React from "react";
import bg from '../assets/Banner.png';

function Banner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "500px",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <p style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
        Traditional Bags Manufacturer
      </p>

      <button
        style={{
          padding: "12px 30px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => alert("Button clicked!")} // You can change this to your action
      >
        Learn More
      </button>
    </div>
  );
}

export default Banner;
