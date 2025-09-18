import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  className = '',
  required = false,
}) => {
  const baseClasses = 'block text-sm font-medium text-text-secondary mb-2';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <label htmlFor={htmlFor} className={classes}>
      {children}
      {required && <span className="text-primary-800 ml-1">*</span>}
    </label>
  );
};