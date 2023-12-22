import styled from 'styled-components';

export const OrderFormSection = styled.section`
  width: 100%;
  padding: 39px 0 61px;
  @media (min-width: 1024px) {
    padding: 56px 0 430px;
  }
`;
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  gap: 29px;
  @media (min-width: 768px) {
    gap: 39px;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 1024px) {
    gap: 9px;
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 37px;
  }
`;
export const Title = styled.h3`
  color: #000;
  text-align: center;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  text-transform: uppercase;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: normal;
  }
`;
export const ElipsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background: #d9d9d9;
  border-radius: 13px;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (min-width: 1024px) {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 18px;
    line-height: normal;
  }
`;
export const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    gap: 8px;
  }
`;
export const OrderBtn = styled.button`
  max-width: 189px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  padding: 8.5px 0;
  background: #000000;
  color: #ffffff;
  border: none;
  @media (min-width: 768px) {
    max-width: 362px;
    padding: 10px 0;
    font-size: 26px;
    line-height: 36px;
  }
`;
