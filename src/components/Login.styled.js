import { styled } from "styled-components";

export const StyledLogin = styled.main`
  height: 100vh;
  /* background-color: var(--color-red-800); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  background: url("src/assets/images/car-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
`;

export const LoginBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 0.5rem;
  }
`;

export const RegisterLink = styled.span`
  font-weight: 600;
  color: #d64036;
`;
