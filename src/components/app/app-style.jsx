import styled from "styled-components";

export const Div = styled.div`
  font-family: Inter, sans-serif;
  background-color: rgba(255, 237, 246, 0.74);
  margin: 0 auto;
  max-width: 1010px;
  width: 100%;
  height: auto;
`;

export const Section = styled.section`
  padding: 30px 0;
`;

export const DivSearch = styled.div`
  padding: 20px 0;
  margin: 0 30px;
`;

export const Input = styled.input`
  padding: 0 20px;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.89);
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 22px;
  width: 100%;
  outline: none;
  
  :focus{
    border:#35a5e5 1px solid;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
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
