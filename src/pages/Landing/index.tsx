import React from 'react';

import LandingImage from '../../assets/LandingImage.png'

import './styles.css'
import Button from '../../components/Button';

const Landing = () => {
  return (
    <div className={'page-wrapper'}>
      <div className={'header'}>
        <div className={'title'}>
          찰떡궁합 이성 찾기
        </div>
        <div className={'description'}>
          MBTI 입력하고 <br />
          딱 맞는 이성친구와 연락하세요.
        </div>

        <Button onClick={() => null}>
          이성친구 찾으러 가기
        </Button>

        <div className={'link-wrapper'}>
          <a href={'https://www.16personalities.com/ko'}>
            내 MBTI 확인하기
          </a>
        </div>
      </div>

      <div className={'contents-wrapper'}>
        <div className={'contents-card'}>
          <div className={'contents-title'}>
            최소한의 정보로 <br />
            나와 맞는 이성친구를 만나요.
          </div>
          <div className={'contents-description'}>
            나랑 잘 맞는지 확인하려 이리저리 재보고 밀당하는 데 지치셨나요? 필요한 것은 성별, 그리고 연락을 위한 오픈채팅 링크밖에 없습니다.
          </div>
        </div>

        <div className={'contents-card'}>
          <div className={'contents-title'}>
            누가 나와 딱 맞는 사람이냐구요?
          </div>
          <div className={'contents-description'}>
            MBTI 궁합이 맞는 사람이요! <br />
            저희가 대화가 통하고 성격이 딱 맞는 사람을 소개시켜 드릴게요!
          </div>
        </div>

        <img src={LandingImage} className={'image'} alt={'궁합표'} />
      </div>
    </div>
  );
};

export default Landing;
