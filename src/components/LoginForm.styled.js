import { styled } from "styled-components";

export const StyledLoginForm = styled.main`
  margin: 1.5rem;
  padding: 1.5rem 5rem;
  background-color: var(--color-grey-200);
`;
export const StyledForm = styled.form`
  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const StyledFormRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledFormLabel = styled.label`
  font-weight: 600;
  text-align: left;
  padding: 0px 10px;
`;

export const StyledFormInput = styled.input`
  padding: 12px 10px;
`;
