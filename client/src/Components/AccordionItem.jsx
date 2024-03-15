import React, { useState } from 'react';

const AccordionItem = ({ question, answer, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-800 rounded-lg mb-2">
      <button
        className="w-full p-4 flex items-center justify-between focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pt-0 px-4 pb-4 bg-gray-100 dark:bg-gray-800">
          <p className='font-semibold'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
