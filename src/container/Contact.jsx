import React, { useState } from "react";
import "./Contact.css"; // Import external CSS file
import Foter from "../components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(`${backendURL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", service: "", address: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-page">
        <div className="contact-content">
          <h2 className="page-title">CONTACT US</h2>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Phone No.</h3>
              <p>📞 98474 67833</p>
              <h3>Email:</h3>
              <p>📧 amarmanna867@gmail.com</p>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone No.:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Services Chosen:</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Tree Cutting">Tree Cutting</option>
                    <option value="House Colouring">House Colouring</option>
                    <option value="Garden Maintenance">Garden Maintenance</option>
                    <option value="House Keeping">House Keeping</option>
                    <option value="Plot Cleaning">Plot Cleaning</option>
                    <option value="Tree/Plant Trimming">Tree/Plant Trimming</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1057.2784805339643!2d76.32201937386047!3d9.952206800927343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTcnMDcuNCJOIDc2wrAxOScxOS43IkU!5e1!3m2!1sen!2sin!4v1738256481507!5m2!1sen!2sin"
                width="80%"
                height="400"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Address */}
            <div className="contact-address">
              <p>
                Balaji Services
                <br />
                Near EVM Volkswagen <br />
                Cochin
                <br />
                682304
              </p>
            </div>
          </div>
        </div>


        {/* <footer className="contact-footer">
          <div>
            <span>© Copyright Reserved</span>
            <span>Designed by dhanazaweb</span>
          </div>
        </footer> */}
      </div>
    </div>
    <Foter />
    </>
  );
};

export default ContactUs;
