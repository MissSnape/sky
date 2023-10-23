import styled from "styled-components";

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;
export const Logforms = styled.div`
--modal-width: 366px;
    --modal-height: 439px;
    position: absolute;
    left: calc(50% - (var(--modal-width) / 2));
    top: calc(50% - (var(--modal-height) / 2));
    box-sizing: border-box;
    width: var(--modal-width);
    min-height: var(--modal-height);
    background-color: #ffffff;
    border-radius: 12px;
    
    padding: 43px 47px 47px 40px;
`;
export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 366px;
  padding: 44px;
  
    align-items: center;
`;
export const ExitButton = styled.button`
color: #ffffff;
background-color: #580ea2;
display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

&:hover {
  background-color: #3f007d;
}

&:active {
  background-color: #271a58;
}

`;
export const RegistrationButton = styled.button`
color: #000000;
display: flex;

    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  background-color: transparent;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

