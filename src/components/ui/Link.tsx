import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children,
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        // Smooth scroll to element
        element.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Update URL without reload
        window.history.pushState({}, '', href);
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};