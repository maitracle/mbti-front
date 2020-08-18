import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store';
import './styles.css';
import FormWrapper from '../../components/FormWrapper';
import { fetchMatchUser } from '../../store/user/actions';


const Matching = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userReducer.isLoggedIn) {
      dispatch(fetchMatchUser.request());
    }
  }, [userReducer.isLoggedIn]);

  return (
    <div className={'matching-page-wrapper'}>
      {userReducer.isLoggedIn ?
        null : <Redirect to={'/log-in'} />}

      <div className={'matching-title'}>
        나의 찰떡궁합<br />
        이성친구는?
      </div>

      <div className={'matching-error'}>
        {userReducer.matchUserInfo.errorMessage}
      </div>

      <FormWrapper label={'상대방의 성별'}>
        <div>
          {userReducer.matchUserInfo.gender}
        </div>
      </FormWrapper>

      <FormWrapper label={'상대방의 MBTI'}>
        <div>
          {userReducer.matchUserInfo.mbti}
        </div>
      </FormWrapper>
      <FormWrapper label={'상대방의 한마디'}>
        <div>
          {userReducer.matchUserInfo.introduce}
        </div>
      </FormWrapper>
      <FormWrapper label={'상대방의 Open Kakao Link'}>
        <div>
          {userReducer.matchUserInfo.contact}
        </div>
        <a href={userReducer.matchUserInfo.contact}>연락하기</a>
      </FormWrapper>
    </div>
  );
};

export default Matching;
