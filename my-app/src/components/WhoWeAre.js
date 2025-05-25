import React from "react";
import image from "../assets/pankaj.jpeg";
import "./WhoWeAre.css"; // Import the CSS file

function WhoWeAre() {
  return (
    <div className="who-container">
      <div className="who-image">
        <img src={image} alt="Who we are" />
      </div>
      <div className="who-text">
        <h2>WHO WE ARE?</h2>
        <p>
          We are an eminent firm actively committed to offering a premium
          quality range of products within the minimum time and at genuine
          rates.
        </p>
        <ul>
          <li>Qualitative products</li>
          <li>Dexterous team of professionals</li>
          <li>Client-centric approach</li>
          <li>Positive records</li>
          <li>Excellent transport & logistic facility</li>
          <li>Economical price range</li>
          <li>Prompt delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default WhoWeAre;
