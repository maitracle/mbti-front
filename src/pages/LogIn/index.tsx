import React from 'react';

import './styles.css';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const LogIn = () => {
  return (
    <div className={'log-in-page-wrapper'}>
      <div className={'log-in-title'}>
        로그인
      </div>

      <div className={'form-wrapper'}>
        <div className={'input-wrapper'}>
          <TextInput type={'text'} label={'아이디'} />
        </div>

        <div className={'input-wrapper'}>
          <TextInput type={'password'} label={'비밀번호'} />
        </div>

        <Button>
          로그인
        </Button>
        <Button>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
