import React from 'react';

import './styles.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/user/actions';


const SignUp = () => {
  const dispatch = useDispatch();

  const signUpHandler = () => {
    const payload = {
      username: '',
      password: '',
      gender: 'MALE',
      mbti: '',
      introduce: '',
      contact: '',
      view_count: 0,
    };

    dispatch(signUp.request(payload));
  };

  return (
    <div className={'sign-up-page-wrapper'}>
      <div className={'sign-up-title'}>
        회원가입
      </div>

      <div className={'sign-up-form-wrapper'}>
        <TextInput type={'text'} label={'아이디'} value={''}
                   onChange={() => null} />

        <TextInput type={'text'} label={'비밀번호'} value={''}
                   onChange={() => null} />

        <TextInput type={'text'} label={'성별'} value={''}
                   onChange={() => null} />

        <select name="mbti" style={{width: '100%'}}>
          <option>ENTP</option>
          <option>INTP</option>
        </select>

        <TextInput type={'text'} label={'Open Kakao Link'} value={''}
                   onChange={() => null} />
        <a href={'https://cs.kakao.com/helps?articleId=1073184402&service=8&category=105&device=1&locale=ko'}>
          카카오 오픈채팅방 만드는 법
        </a>

        <div className={'sign-up-one-sentence-wrapper'}>
          <TextInput type={'text'} label={'상대방에게 하고싶은 한마디'} value={''}
                     onChange={() => null} />
        </div>

        <Button onClick={signUpHandler}>회원가입</Button>
      </div>
    </div>
  );
};

export default SignUp;
