import React from 'react';
import * as S from './loginStyle';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const addUser = () => {
    localStorage.setItem('user', 'lfd123mkw1ewqsakl');
    navigate('/');
  };
  return(
    <S.PageContainer>
    <S.Logforms>
<S.LoginForm>

   <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                
              />
     
      <S.ExitButton onClick={addUser}>Войти
      </S.ExitButton>
      <S.RegistrationButton>Зарегистрироваться</S.RegistrationButton>
      
    </S.LoginForm>
    </S.Logforms>
    </S.PageContainer>
    );
};
export default Login;
