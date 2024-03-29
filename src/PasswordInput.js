import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useYBActions } from './context/Context';

const PasswordInput = () => {
  const actions = useYBActions();
  const pwdRef = useRef('');
  const password = process.env.REACT_APP_PASSWORD;
  const navigate = useNavigate();

  const passwordValidationHandler = (e) => {
    e.preventDefault();
    if (pwdRef.current.value !== password) {
      pwdRef.current.value = '';
      alert('비밀번호가 틀렸습니다.');
      return;
    }
    actions.authorize();
    navigate('/nickname');
  };

  return (
    <form onSubmit={passwordValidationHandler}>
      <div id="passwordInput">
        <img src={'images/profile.jpg'} alt="" />
        <p>2022년 5월 마지막 프메 날짜를 입력하세요</p>
        <input ref={pwdRef} type="text" placeholder="05XX" />
        <button type="submit">입력</button>
      </div>
    </form>
  );
};

export default PasswordInput;
