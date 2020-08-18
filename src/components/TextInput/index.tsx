import React from 'react';

import './styles.css';
import FormWrapper from '../FormWrapper';


type Props = {
  type: 'text' | 'new-password';
  label: string;
  value: string;
  onChange: Function;
}

const TextInput = ({ type, label, value, onChange }: Props) => {
  return (
    <FormWrapper label={label}>
      <input type={type} className={'input'} value={value} onChange={(e) => onChange(e.target.value)} />
    </FormWrapper>
  )
};

export default TextInput;
