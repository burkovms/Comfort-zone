import Link from 'next/link';
import './Button.scss';

export interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  color: 'black' | 'white';
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  href = '#',
  color = 'black',
  className,
  onClick,
}: ButtonProps) => {
  const buttonClasses = className ? `btn ${color} ${className}` : `btn ${color}`;

  return (
    <Link href={href} className={buttonClasses} onClick={onClick}>
      <svg className="border">
        <rect pathLength="1"></rect>
      </svg>
      <span>{children}</span>
    </Link>
  );
};
