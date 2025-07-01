import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate("/thanks");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Send Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 p-6">
      <input
        name="firstName"
        placeholder="First Name"
        required
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        name="lastName"
        placeholder="Last Name"
        required
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="w-full border p-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        onChange={handleChange}
        className="w-full border p-2"
      />
      <button type="submit" className="bg-blue-600 px-4 py-2 text-white">
        Send
      </button>
    </form>
  );
}

export default Contact;
