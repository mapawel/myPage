import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wrapper from 'templates/Wrapper';
import TwoColumns from 'templates/TwoColumns';
import headerImage from 'assets/images/pmfoto450.png';
import Triangle from 'components/atoms/Triangle';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';

const appear = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const StyledTwoColumns = styled(TwoColumns)`
  position: relative;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.fontSize.l};

  @media screen and (min-width: ${breakpoint.M}) {
    padding-top: ${({ theme }) => theme.fontSize.xxl};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    padding-top: 0;
    }
`;

const StyledHeaderTxt = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-shadow: -2px 2px 6px black;
  font-weight: 700;

  
  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    }
  
  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    line-height: 1.05;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.extraWide};
    }
`;

const StyledHeaderTxtSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: ${({ theme }) => theme.fontSize.m};
  margin-bottom: ${({ theme }) => theme.fontSize.s};
  text-shadow: ${({ theme }) => `0 0 4px ${theme.color.textPrimaryShadow}`};

  @media screen and (min-width: ${breakpoint.L}) {
    margin-top: ${({ theme }) => theme.fontSize.xxxl};
    }
`;

const StyledTxtBox = styled.div`
  width: 100%;
  padding-left: 1rem;

  @media screen and (min-width: ${breakpoint.L}) {
    width: 70%;
    height: 100%;
    }
      
  @media screen and (min-width: ${breakpoint.XL}) {
    height: 100vh;
    display: flex;
    align-items: center;
    }
`;

const StyledImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;

  @media screen and (min-width: ${breakpoint.S}) {
  width: 55%;
  flex-direction: column;
  align-items: center;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 25%;
    }
          
  @media screen and (min-width: ${breakpoint.XL}) {
    height: 100vh;
    display: flex;
    justify-content: center;
    }
`;

const StyledHeaderImg = styled.img`
  max-width: 50%;
  animation: ${appear} 3s;

  @media screen and (min-width: ${breakpoint.S}) {
  max-width: 100%;
  max-height: 75%;
    }
`;

const StyledButton = styled(Button)`
  margin: 2rem 1rem 5rem;
  order: -1;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media screen and (min-width: ${breakpoint.S}) {
  order: 1;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
  margin-top: 10rem;
    }
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  z-index: -1;
  transform:  translateX(0) rotate(20deg);
  width: 300px;
  height: 300px;
  top: 15%;
  right: -3rem;

  @media screen and (min-width: ${breakpoint.S}) {
    transform:  translateX(-50%) rotate(20deg);
    width: 500px;
    height: 500px;
    top: -50px;
    right: none;
    left: 50%;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    transform:  translateX(-50%) rotate(20deg);
    width: 1000px;
    height: 1000px;
    top: -50px;
    right: none;
    left: 50%;
    }
`;

const Header = () => (
  <header>
    <Wrapper>
      <StyledTwoColumns>
        <StyledTxtBox>
          <StyledHeaderTxt>
            welcome!
            <br />
            {' '}
            <StyledHeaderTxtSpan>my name is Pawel,</StyledHeaderTxtSpan>
            {' '}
            I'm a front-end developer
          </StyledHeaderTxt>
        </StyledTxtBox>
        <StyledImgBox>
          <StyledHeaderImg src={headerImage} />
          <StyledButton>contact me</StyledButton>
        </StyledImgBox>
        <StyledTriangle />
      </StyledTwoColumns>
    </Wrapper>
  </header>
);

export default Header;
