import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="text-primary">About Us</h2>
        <p className="text-muted">Learn more about our journey, mission, and values.</p>
      </div>

      {/* Mission Section */}
      <div className="mb-4 p-4 rounded bg-light border-start border-4 border-primary shadow-sm">
        <h4 className="text-dark">🎯 Our Mission</h4>
        <p>
          To make online shopping seamless, affordable, and enjoyable for everyone. We focus on offering high-quality products, fast delivery, and top-notch customer service.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mb-4 p-4 rounded bg-white border-start border-4 border-success shadow-sm">
        <h4 className="text-dark">🌟 Our Vision</h4>
        <p>
          To become the most trusted e-commerce platform by embracing innovation, sustainability, and customer-first practices.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-4 p-4 rounded bg-light border-start border-4 border-warning shadow-sm">
        <h4 className="text-dark">💡 Our Core Values</h4>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Transparency & Trust</li>
          <li>Continuous Improvement</li>
          <li>Inclusive & Diverse Culture</li>
        </ul>
      </div>

      {/* Final Note */}
      <div className="text-center mt-5">
        <p className="text-secondary fst-italic">Thank you for choosing us. We're happy to serve you!</p>
      </div>
    </div>
  );
}
