import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  width: 100%;
  padding: 32px;
  background: #E02B57;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  height: 10%;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  height: 15rem;
  display: flex;
  flex: 1;
  align-items: stretch;
`;

export const TransactionsContainer = styled.div`
  height: 15rem;
  display: flex;
  flex: 1;
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 22rem;
  margin: 8px;
  background-color: #9599a6;
  border-radius: 50px;
  }
`;

export const BalanceContainer = styled.div`
width: 80%;
height: 80%;
margin: 0 8rem;
border-radius: 50px;
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: '100vh';
background-color: #9599a6;
}
`;

export const BalanceText = styled.h1`
font-family: 'Helvetica';
font-weight: 400;
font-size: 6rem;
`;

export const TransactionText = styled.h3`
font-family: 'Helvetica';
font-weight: 600;
font-size: 1rem;
color: #2f2f33;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
}

> a {
  color: #ff9000;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const Button = styled.button`
  background: #E02B57;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
  border-radius: 100px;
  height: 56px;
  min-width: 160px;
  min-height: 69px;
  height: 69px;
  line-height: 69px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 80%;
  font-weight: 600;
  margin-top: 8px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#f1587d')};
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const Input = styled.input`
    flex: 1;
    border: 0;
    background: #E3E4EB;
    border-radius: 100px;
    height: 56px;
    margin-top: 1rem;
    min-width: 160px;
    min-height: 69px;
    height: 69px;
    padding: 0 16px;
    padding-left: 30px;
    width: 80%;
    border: 4px solid #2f2f33;
    color: #666360;
    align-items: center;
    &::placeholder {
      color: #666360;
    }
`;

export const Span = styled.span`
font-size: 20px;
margin-left: 24px;
color: #fff;
font-weight: bold;
display: inline-block;
font-family: 'Helvetica';
`;
