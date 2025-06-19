'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import './Accordeon.scss';

type Props = {
  question: string;
  answer: string;
  number: string;
};

export const AccordeonItem = ({ question, answer, number }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={isOpen ? 'active' : ''}>
      <span className="number h4">{number}</span>
      <div className="title text-lg" onClick={handleOpen}>
        {question}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-md">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
