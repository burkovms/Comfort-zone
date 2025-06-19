import Link from 'next/link';
import './Button.scss';
import { memo } from 'react';

export interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md';
}
const Button = ({
  children,
  href,
  color = 'black',
  className,
  onClick,
  type = 'button',
  size = 'md',
}: ButtonProps) => {
  const buttonClasses = className
    ? `btn ${color} btn-${size} ${className}`
    : `btn ${color} btn-${size}`;

  return (
    <>
      {href ? (
        <Link href={href} className={buttonClasses} onClick={onClick}>
          <svg className="border">
            <rect pathLength="1"></rect>
          </svg>
          <span>{children}</span>
        </Link>
      ) : (
        <button type={type} className={buttonClasses} onClick={onClick}>
          <svg className="border">
            <rect pathLength="1"></rect>
          </svg>
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default memo(Button);
