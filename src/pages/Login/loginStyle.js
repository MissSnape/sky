import styled from "styled-components";
export const inputLog = styled.input`
width: 100%;
    border: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
`;
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
`;