import React from 'react';

import './styles.css';


type Props = {
  children: string;
}

const Button = ({ children }: Props) => {
  return (
    <button className={'button'}>
      {children}
    </button>
  )
};

export default Button;
