import React, { useState } from 'react';

import './styles.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpInfo, signUp } from '../../store/user/actions';
import { RootState } from '../../store';
import FormWrapper from '../../components/FormWrapper';


const SignUp = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const usernameChangeHandler = (value: string) => {
    dispatch(setSignUpInfo({ username: value }));
  };
  const passwordChangeHandler = (value: string) => {
    dispatch(setSignUpInfo({ password: value }));
  };
  const genderChangeHandler = (value: 'MALE' | 'FEMALE') => {
    dispatch(setSignUpInfo({ gender: value }));
  };
  const mbtiChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    dispatch(setSignUpInfo({ mbti: e.currentTarget.value }));
  };
  const contactChangeHandler = (value: string) => {
    dispatch(setSignUpInfo({ contact: value }));
  };
  const introduceChangeHandler = (value: string) => {
    dispatch(setSignUpInfo({ introduce: value }));
  };

  const isValid = () => {
    if (userReducer.signUpInfo.username === '') {
      setErrorMessage('아이디를 입력해주세요.');
      return false;
    } else if(userReducer.signUpInfo.password === '') {
      setErrorMessage('비밀번호를 입력해주세요.');
      return false;
    } else if(userReducer.signUpInfo.mbti === '') {
      setErrorMessage('MBTI를 선택해주세요.');
      return false;
    } else if(userReducer.signUpInfo.contact === '') {
      setErrorMessage('Open Kakao link를 입력해주세요.');
      return false;
    }

    return true;
  };

  const signUpHandler = () => {
    if (isValid()) {
      dispatch(signUp.request(userReducer.signUpInfo));
    }
  };

  return (
    <div className={'sign-up-page-wrapper'}>
      <div className={'sign-up-title'}>
        회원가입
      </div>

      <div className={'sign-up-form-wrapper'}>
        <TextInput type={'text'} label={'아이디'} value={userReducer.signUpInfo.username}
                   onChange={usernameChangeHandler} />

        <TextInput type={'text'} label={'비밀번호'} value={userReducer.signUpInfo.password}
                   onChange={passwordChangeHandler} />

        <FormWrapper label={'성별'}>
          <input type={'radio'} checked={userReducer.signUpInfo.gender === 'MALE'}
                 onChange={() => genderChangeHandler('MALE')} /> <span>남자</span>
          <input type={'radio'} checked={userReducer.signUpInfo.gender === 'FEMALE'}
                 onChange={() => genderChangeHandler('FEMALE')} /> <span>여자</span>
        </FormWrapper>

        <FormWrapper label={'MBTI'}>
          <select name="mbti" style={{ width: '100%' }} onChange={mbtiChangeHandler}>
            <option />
            <option>ENTP</option>
            <option>INTP</option>
          </select>
        </FormWrapper>

        <TextInput type={'text'} label={'Open Kakao Link'} value={userReducer.signUpInfo.contact}
                   onChange={contactChangeHandler} />
        <a href={'https://cs.kakao.com/helps?articleId=1073184402&service=8&category=105&device=1&locale=ko'}>
          카카오 오픈채팅방 만드는 법
        </a>

        <TextInput type={'text'} label={'상대방에게 하고싶은 한마디'} value={userReducer.signUpInfo.introduce}
                   onChange={introduceChangeHandler} />

        <div className={'sign-up-error-message'}>
          {errorMessage}
        </div>

        <Button onClick={signUpHandler}>회원가입</Button>
      </div>
    </div>
  );
};

export default SignUp;
