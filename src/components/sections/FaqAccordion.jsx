import { useState } from 'react';
import { faqs } from '@/data/faqs';
import { Icon } from '@/utils/icons.jsx';

/**
 * Accessible single-open accordion for the FAQ list.
 */
export default function FaqAccordion({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-semibold text-heading">
                {item.question}
              </span>
              <Icon
                name="FaChevronDown"
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
