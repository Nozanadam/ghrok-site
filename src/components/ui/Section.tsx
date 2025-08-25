import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  containerClassName = ''
}) => {
  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};