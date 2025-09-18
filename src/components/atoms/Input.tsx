import React from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  min,
  max,
  step,
}) => {
  const baseClasses = 'w-full px-3 py-2 bg-background-secondary border border-border-DEFAULT rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={classes}
      min={min}
      max={max}
      step={step}
    />
  );
};