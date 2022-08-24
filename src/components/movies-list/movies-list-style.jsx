import styled from "styled-components";

export const Li = styled.li`
  box-shadow: 5px 5px 15px #b6b4b4;
  background-color: rgba(255, 255, 255, 1);

  position: relative;
  max-width: 454px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  :nth-last-child(-n + 2) {
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    max-width: 930px;
    width: 100%;
    height: 100%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  background-color: #dca7c536;
  list-style: none;
  padding: 30px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  background: ghostwhite;
  max-width: 1010px;
  width: 100%;
  height: 100%;
`;
