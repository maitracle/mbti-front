import React from 'react';

import './styles.css';


type Props = {
  children: string;
  onClick: Function;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={'button'} onClick={() => onClick()}>
      {children}
    </button>
  )
};

export default Button;
