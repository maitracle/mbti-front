import React from 'react';

import './styles.css';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logIn, setLogInInfo } from '../../store/user/actions';


const LogIn = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const usernameChangeHandler = (value: string) => {
    dispatch(setLogInInfo({ username: value }));
  };

  const passwordChangeHandler = (value: string) => {
    dispatch(setLogInInfo({ password: value }));
  };

  const logInHandler = () => {
    console.log('try log in');
    dispatch(logIn.request(userReducer.logInInfo));
  };

  return (
    <div className={'log-in-page-wrapper'}>
      <div className={'log-in-title'}>
        로그인 {userReducer.isLoggedIn ? 'true' : 'false'}
      </div>

      <div className={'form-wrapper'}>
        <div className={'input-wrapper'}>
          <TextInput type={'text'} label={'아이디'} value={userReducer.logInInfo.username}
                     onChange={usernameChangeHandler} />
        </div>

        <div className={'input-wrapper'}>
          <TextInput type={'password'} label={'비밀번호'} value={userReducer.logInInfo.password}
                     onChange={passwordChangeHandler} />
        </div>

        <Button onClick={logInHandler}>
          로그인
        </Button>
        <Button onClick={logInHandler}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
