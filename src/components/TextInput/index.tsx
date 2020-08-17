import React from 'react';

import './styles.css';


type Props = {
  type: 'text' | 'password';
  label: string;
  value: string;
  onChange: Function;
}

const TextInput = ({ type, label, value, onChange }: Props) => {
  return (
    <div className={'input-wrapper'}>
      <div className={'input-label'}>
        {label}
      </div>
      <input type={type} className={'input'} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
};

export default TextInput;
