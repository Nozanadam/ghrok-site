import React from 'react';
import { Link } from './Link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  type = 'button',
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-blue-900/30 hover:bg-blue-900/50 text-white border border-blue-800',
    outline: 'bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500/10',
    text: 'bg-transparent text-teal-500 hover:text-teal-600 hover:bg-teal-500/10'
  };

  const sizes = {
    sm: 'text-sm px-4 py-1.5 rounded-md',
    md: 'px-6 py-2.5 rounded-lg',
    lg: 'text-lg px-8 py-3 rounded-lg',
  };

  const baseClasses = `font-medium transition-all duration-300 flex items-center justify-center ${fullWidth ? 'w-full' : ''}`;
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      className={buttonClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};