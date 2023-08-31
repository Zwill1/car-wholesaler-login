import { styled } from "styled-components";

export const ColumnSide = styled.div`
  flex: 0 0 50%;
  padding: 10px;
`;

export const Column1of2 = styled.div`
  flex: 0 0 50%;
  padding: 10px;
  background: url("src/assets/images/car-on-the-road-homebackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  height: 90vh;

  @media only screen and (max-width: 1200px) {
    flex: 100%;
  }
`;
export const Column2of2 = styled.div`
  flex: 0 0 50%;
  padding: 10px;
  background-color: #f4f4f4;
`;
