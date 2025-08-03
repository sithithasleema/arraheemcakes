"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I contact you?",
    answer:
      "You can contact us via WhatsApp, Facebook, or Instagram. Alternatively, you can send your message through our Contact Us page form.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Our typical delivery time is 2-3 business days, but this may vary during peak seasons or special occasions.",
  },
  {
    question: "Can I customize the cake design?",
    answer:
      "Yes! Many of our cakes are customizable. Look for the “Customizable” tag on product pages.",
  },
  {
    question: "Do you offer allergy-friendly options?",
    answer:
      "We offer gluten-free and nut-free options. Please check product descriptions or contact us for more info.",
  },
  {
    question: "Do you offer halal cakes?",
    answer:
      "Yes, all our cakes are made using halal-certified ingredients to meet your dietary requirements, ensuring both quality and compliance.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-teal-800 mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-teal-900 font-semibold bg-gray-200 hover:bg-gray-500 hover:text-gray-100 transition"
              aria-expanded={openIndex === index}
              aria-controls={`faq-panel-${index}`}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </button>

            {openIndex === index && (
              <div
                id={`faq-panel-${index}`}
                className="px-6 py-4 bg-white text-gray-700"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
