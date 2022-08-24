import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const MovieItemDiv = styled.div`
  display: flex;
`;

export const Img = styled.img`
  max-width: 183px;
  width: 100%;
  height: auto;
  @media (max-width: 549px) {
    position: absolute;
    max-width: 110px;
    width: 100%;
    height: auto;
    padding: 7px 10px 0 13px;
  }
`;

export const Label = styled.label`
  padding: 20px;
  @media (max-width: 1000px) {
    max-width: 930px;
    width: 100%;
    height: 100%;
    padding: 5px;
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 550px) {
    margin-left: 110px;
    margin-top: 10px;
  }
`;

export const DivTitle = styled.div`
  width: 100%;
`;

export const DivRating = styled.div`
  border-radius: 50%;
  border: 1px solid;
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 33px;
  border-color: ${({ rating }) =>
    rating < 3
      ? "#E90000"
      : rating < 5
      ? "#E97E00"
      : rating < 7
      ? "#E9D100"
      : "#66E900"};
`;

export const DivGenres = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.65);
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 15px;
  margin-top: 7px;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 550px) {
    padding-left: 110px;
    margin-bottom: 10px;
  }
`;

export const DivGenresItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #000;
  border-radius: 5px;
  color: #2c2b2b;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 3px 5px;
  text-decoration: none;
  @media (max-width: 550px) {
  }
`;

export const DivData = styled.div`
  color: #827e7e;
  font-size: 12px;
  line-height: 18px;
  margin-top: 7px;
  @media (max-width: 550px) {
    margin-left: 110px;
    margin-bottom: 20px;
  }
`;

export const DivInfo = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 7px;
  @media (max-width: 550px) {
    margin: 30px 10px 40px 10px;
  }
`;
