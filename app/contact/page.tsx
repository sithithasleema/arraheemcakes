"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // For now, just log data - replace this with your form submission logic (API call, email, etc.)
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div>
      {" "}
      <div className="max-w-[1200px] mx-auto py-4 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-center text-teal-800">
          Contact Us
        </h1>
        <p className="text-xl ">
          We’re here to help you with any questions, custom orders, or feedback
          you may have. Feel free to reach out through the form below or message
          us on WhatsApp, Instagram, or Facebook. All inquiries are responded to
          as soon as possible. Thank you for supporting our small,
          halal-conscious business.
        </p>
      </div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full border rounded px-3 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full border rounded px-3 py-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows={5}
              className={`w-full border rounded px-3 py-2 resize-y ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-700 text-white py-3 rounded hover:bg-teal-800 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitSuccessful && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              Thank you for contacting us! We will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
