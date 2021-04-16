import React from 'react';
import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  sizeVariant?: 'Small' | 'Medium' | 'Big';
  icon?: React.ReactNode;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, label, sizeVariant = 'Medium', icon, rounded, ...props }) => {
  return (
    <button className={classnames('Button', className, { [sizeVariant]: sizeVariant, rounded })} {...props}>
      <span className="button-label">{label}</span>
      {icon}
    </button>
  );
};

export default Button;
