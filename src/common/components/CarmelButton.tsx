import React, { FC, ButtonHTMLAttributes } from 'react';

// Define the type for props
interface CarmelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;      // Optional text for the button
  className?: string; // Optional additional CSS classes
}

const CarmelButton: FC<CarmelButtonProps> = ({
  text = "Click Me",  // Default button text
  onClick,
  type = "button",    // Default button type
  className = "",
  disabled = false,
  ...props            // Spread for additional attributes
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-primary-600 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default CarmelButton;
