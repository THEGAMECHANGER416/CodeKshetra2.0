"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the interface for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

// Define the faqs array with the FAQ type
const faqs: FAQ[] = [
  {
    question: "What is Code Kshetra 2.0 and what makes it unique?",
    answer:
      "Code Kshetra 2.0 is a groundbreaking hackathon jointly organized by JIMS Sector-5 Rohini and Geek Room. It provides a unique experience, redefining the boundaries of creativity and technology, transcending conventional hackathons.",
  },
  {
    question: "How can I participate in Code Kshetra 2.0?",
    answer:
      "You can register on our official website. After registration, you will receive further instructions via email.",
  },
  {
    question: "What are the eligibility criteria for participants?",
    answer:
      "Participants must be students currently enrolled in a college or university. All skill levels are welcome.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any necessary software tools, and a collaborative spirit. Food and drinks will be provided.",
  },
  {
    question: "Are there prizes for winners?",
    answer:
      "Yes, there are exciting prizes for the top teams, including cash rewards, mentorship opportunities, and tech gadgets.",
  },
  {
    question: "What is the duration of the hackathon?",
    answer:
      "The hackathon will last for 48 hours, starting from [start date] to [end date]. Participants are encouraged to work around the clock!",
  },
  {
    question: "Will there be mentors available during the event?",
    answer:
      "Absolutely! We will have industry experts and mentors available to guide participants throughout the hackathon.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="md:text-[12rem] text-6xl font-bebas text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
        FAQS
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg">
              <button
                className="w-full text-left p-7 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white text-lg md:text-2xl pr-8">
                  {faq.question}
                </span>
                <div className="bg-gray-900 rounded-full p-1.5 flex-shrink-0">
                  <ChevronDown
                    className={`w-8 h-8 text-pink-500 transition-transform duration-200 ${
                      expandedIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                expandedIndex === index ? "max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="mt-3 bg-gray-600/20 bg-opacity-40 rounded-3xl p-7 shadow-lg transform transition-all duration-700 ease-in-out">
                <p className="text-white text-base md:text-lg font-semibold">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
