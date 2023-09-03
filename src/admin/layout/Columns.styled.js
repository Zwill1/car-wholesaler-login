import { styled } from "styled-components";

export const FullWidth = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column1of2 = styled.div`
  flex: 0 0 30%;
  padding: 10px;
  background-color: #d4d4d4;
  height: 90vh;

  @media only screen and (max-width: 1200px) {
    flex: 100%;
  }
`;
export const Column2of2 = styled.div`
  flex: 0 0 70%;
  padding: 10px;
  background-color: #f4f4f4;
`;
