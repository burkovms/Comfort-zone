import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  const buttonClasses = className ? `btn ${className}` : 'btn';

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
