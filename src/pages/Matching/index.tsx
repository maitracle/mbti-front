import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Redirect } from 'react-router-dom';
import './styles.css';
import FormWrapper from '../../components/FormWrapper';


const Matching = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);

  return (
    <div className={'matching-page-wrapper'}>
      {userReducer.isLoggedIn ?
        null : <Redirect to={'/log-in'} />}

      <div className={'matching-title'}>
        나의 찰떡궁합<br />
        이성친구는?
      </div>

      <FormWrapper label={'상대방의 MBTI'}>
        <div>

        </div>
      </FormWrapper>
      <FormWrapper label={'상대방의 한마디'}>
        <div>

        </div>
      </FormWrapper>
      <FormWrapper label={'상대방의 Open Kakao Link'}>
        <div>

        </div>
      </FormWrapper>
    </div>
  );
};

export default Matching;
