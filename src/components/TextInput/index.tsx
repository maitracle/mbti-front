import React from 'react';

import './styles.css';


type Props = {
  type: 'text' | 'password';
  label: string;
}

const TextInput = ({ type, label }: Props) => {
  return (
    <div className={'input-wrapper'}>
      <div className={'input-label'}>
        {label}
      </div>
      <input type={type} className={'input'} />
    </div>
  )
};

export default TextInput;
