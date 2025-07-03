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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 pt-24">
      <div
        className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows="5"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
