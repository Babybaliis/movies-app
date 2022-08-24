import styled from "styled-components";

export const Div = styled.div`
  font-family: Inter, sans-serif;
  background-color: #dca7c536;
  margin: 0 auto;
  max-width: 1010px;
  width: 100%;
  height: auto;
`;

export const Section = styled.section`
  padding: 30px 0;
`;

export const Input = styled.input`
  margin: 0 4%;
  padding: 0 20px;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 22px;
  width: 92%;
  @media (max-width: 550px) {
    max-width: 85%;
    margin: 0 8%;
  }
`;

export const DivSpin = styled.div`
  width: 100%;
  margin: 200px 0;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
  background-color: rgba(247, 247, 247, 1);
`;
