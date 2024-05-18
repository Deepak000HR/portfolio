import React, { useState } from "react";
interface Props {
  id: string;
}
const Contact = ({ id }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:deepakgoutam7115@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id={id} className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini">Get in Touch</p>
          <h1 className="heading__primary">
            Let's Make your <span className="text-yellow-400">Brand</span>{" "}
            brilliant
          </h1>

          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            We help you in your brand Success ,{" "}
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
            <a href="tel:+916376441026" title="Call +916376441026">
              +91 6376441026
            </a>
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              autoComplete="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              autoComplete="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white  bg-gray-800 rounded-md px-4"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            id="1"
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white rounded-md bg-gray-800 px-4"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-[0.7rem]  mb-[1.5rem] w-full outline-none text-white  bg-blue-700 hover:bg-blue-800 rounded-md px-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
