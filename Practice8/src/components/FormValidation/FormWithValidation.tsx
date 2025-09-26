import React, { useRef, useState } from "react";

const FormWithValidation: React.FC = () => {
  const inputRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();

    const newErrors = {
      name: !name ? "Name is required" : "",
      email: !email
        ? "Email is required"
        : !validateEmail(email)
        ? "Email is not valid"
        : "",
      password: !password ? "Password is required" : "",
    };

    setErrors(newErrors);

    if (newErrors.name) {
      inputRefs.name.current?.focus();
      return;
    }

    if (newErrors.email) {
      inputRefs.email.current?.focus();
      return;
    }

    if (newErrors.password) {
      inputRefs.password.current?.focus();
      return;
    }

    alert("Form submitted successfully");

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setErrors({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          ref={inputRefs.name}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          ref={inputRefs.email}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          ref={inputRefs.password}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithValidation;
