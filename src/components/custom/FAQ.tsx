"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Code Kshetra 2.0 and what makes it unique?",
    answer:
      "Code Kshetra 2.0 is a groundbreaking hackathon jointly organized by JIMS Sector-5 Rohini and Geek Room. It provides a unique experience, redefining the boundaries of creativity and technology, transcending conventional hackathons.",
  },
  {
    question: "When and where is Code Kshetra 2025 taking place?",
    answer:
      "Code Kshetra 2025 is an offline event scheduled for 14th-15th February. The venue is JIMS Sector-5 Rohini, near Rithala Metro Station . It's a 36-hour hackathon that promises an immersive experience in tech innovation.",
  },
  {
    question: "What engaging activities can participants expect during Code Kshetra 2.0?",
    answer:
      "Code Kshetra 2.0 features live project presentations, idea pitching, judging by esteemed panels, and a fun and games round with prizes to keep participants engaged throughout the hackathon.",
  },
  {
    question: "What exclusive perks are provided to participants?",
    answer:
      "Participants at Code Kshetra 2.0 enjoy exclusive perks, including free swags, networking opportunities with industry experts, goodies, accommodation, meals, and much more, enhancing their overall experience.",
  },
  {
    question: "How does Code Kshetra 2.0 encourage innovation and problem-solving?",
    answer:
      "Code Kshetra 2.0 challenges participants to push their boundaries and foster inventive solutions to real-world issues. It celebrates the union of innovation and technology, providing a platform for participants to showcase their skills.",
  },
  {
    question: "Who are the organizers of Code Kshetra 2.0, and what is their mission?",
    answer:
      "Code Kshetra 2.0 is hosted by the collaborative efforts of JIMS Sector-5 Rohini and Geek Room. Their mission is to provide a platform for tech enthusiasts to showcase their skills and amplify their potential through an exciting blend of competition, learning, and groundbreaking innovation.",
  },
  {
    question: "How can participants connect with like-minded individuals and industry experts during Code Kshetra 2.0?",
    answer:
      "Participants can connect with like-minded individuals and industry experts through networking sessions, project collaborations, and various interactive opportunities provided during Code Kshetra 2.0. It's a unique chance to learn, compete, and establish valuable connections.",
  },
  {
    question: "What is the maximum team size allowed for Code Kshetra 2.0?",
    answer:
      "The maximum team size allowed for Code Kshetra 2.0 is 4 members. Participants can form teams with a minimum of 1 member and a maximum of 4 members.",
  },
  {
    question: "Are there any specific requirements for the projects that participants can work on?",
    answer:
      "Participants in Code Kshetra 2.0 have the flexibility to choose the type of projects they want to work on. There are no specific requirements, allowing participants to showcase their creativity and skills by working on innovative solutions to real-world issues.",
  },
  {
    question: "What should I bring to Code Kshetra 2.0, and what will be provided by the organizers?",
    answer:
      "Participants are encouraged to bring their laptops and any specific tools or hardware they may need for coding. Organizers will provide the necessary infrastructure, but participants should ensure they have everything they need for a successful hacking experience.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 ">
      <h2 className="text-6xl font-extrabold text-center text-pink-500 mb-16">
        FAQS
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-700 rounded-3xl overflow-hidden shadow-lg">
              <button
                className="w-full text-left p-7 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white text-2xl pr-8">
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
            {expandedIndex === index && (
              <div className="mt-3 bg-gray-600 bg-opacity-40 rounded-3xl p-7 shadow-lg">
                <p className="text-white text-xl font-semibold">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
