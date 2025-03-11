import React, { useState } from 'react';

const container = `bg-gradient-to-b from-slate-950 to-slate-900 text-gray-200 p-2`;
const wrapper = `flex flex-col gap-3 justify-center items-center my-3`;
const title = `text-center text-amber-600 lg:text-4xl text-3xl font-bold`;
const titleDesc = `text-center text-xl`;
const contactForm = `flex flex-col gap-3 bg-gray-950 p-5 rounded-lg lg:w-1/2 w-full`;
const contactTitle = 'text-amber-600 font-semibold ml-2 text-xl opacity-80';
const inputStyle = `bg-gray-700 h-12 p-3 rounded-lg outline-none`;
const inputStyleTextArea = 'bg-gray-700 p-3 rounded-lg outline-none row-3 columns-2 resize-none';
const sendButton = `text-gray-950 font-semibold h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400`;
const errorMessageStyle = `text-red-500 text-sm ml-2`;

function Contact() {
  const formKey = import.meta.env.VITE_FORM_KEY;

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Validation function
  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation: only letters (a-z, A-Z)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    // Message validation: length between 5 and 100 characters
    if (!formData.message.trim() || formData.message.length < 5 || formData.message.length > 100) {
      newErrors.message = 'Message should be between 5 and 100 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Log form data to console
      console.log('Form Data:', formData);

      // If form is valid, submit it
      e.target.submit();
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div name='contact' className={container}>
        <div className={wrapper}>
          <div className={title}>Contact Me</div>
          <div className={titleDesc}>Have a project in mind? Let's build it together</div>
          <form
            action={`https://getform.io/f/${formKey}`}
            method='POST'
            className={contactForm}
            onSubmit={handleSubmit}
          >
            <div className={contactTitle}>Get in touch</div>

            {/* Name Input with validation */}
            <input
              className={inputStyle}
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <div className={errorMessageStyle}>{errors.name}</div>}

            {/* Email Input */}
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className={errorMessageStyle}>{errors.email}</div>}

            {/* Message Input with validation (min: 5, max: 100 characters) */}
            <textarea
              className={inputStyleTextArea}
              name="message"
              rows={4}
              placeholder="Message to me!"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <div className={errorMessageStyle}>{errors.message}</div>}

            <button className={sendButton} type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
