import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  max-width: 34rem;
  flex-shrink: 0;
  flex-grow: 0;

  @media screen and (min-width: ${breakpoint.XS}) {
    max-width: 42rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: 66rem;
    }
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: 0;
  left: -5rem;
  transform: rotate(5deg);

  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
    }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media screen and (max-width: 390px) {
    font-size: 3.4rem;
    }

  @media screen and (min-width: ${breakpoint.XS}) {
    margin-bottom: 3rem;
    }

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 2rem;
    font-size: 4.8rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 6.8rem;
    }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  opacity: ${({ isToolVisible }) => (isToolVisible ? 0 : 1)};
`;

const StyledImgBox = styled.div`
  position: relative;
  z-index: 0;
  height: 30rem;
  margin-bottom: 2rem;

  &:hover>div::after{
    opacity: 0;
  }

  &:hover>div:nth-child(1) {
      transform: translate(-40%, -30%);
    }
    &:hover>div:nth-child(2) {
      transform: translate(10%, 30%);
    }

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 36rem;
    }

  @media screen and (min-width: ${breakpoint.S}) {
    height: 32rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 43rem;
    }
`;

const StyledImg = styled.div`
  position: absolute;
  z-index: 0;
  width: calc(100% - 80px);
  height: calc((100% - 80px)/3*2);
  border: ${({ theme }) => `1px solid ${theme.color.textSecondary}`};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: .25;
    transition: opacity .35s;
  }

  &:nth-child(1){
    left: 50%;
    z-index: 5;
    transform: translate(-50%, 0);
    transition: transform .25s;
  }
  &:nth-child(2){
    bottom: 0;
    z-index: 0;
    transform: translate(0, 0);
    transition: transform .25s;
  }
  &:nth-child(3){
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0;
`;

const StyledHedingBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledToolBox = styled.div`
  position: absolute;
  z-index: ${({ isToolVisible }) => (isToolVisible ? 5 : -1)};
  width: 54rem;
  height: 54rem;
  top: 0;
  left: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(5deg);
  padding: 9rem;
  background-color: #000000e2;
  opacity: ${({ isToolVisible }) => (isToolVisible ? 1 : 0)};
  transition: opacity .4s;
  
  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
    }
`;

const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-5deg);
`;

const ProjectBox = ({ title = '', images = [], description = '' }) => {
  const [isToolVisible, setToolVisible] = useState(false);
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <StyledContainer>
        <StyledHedingBox>
          <StyledHeading>{title.toUpperCase()}</StyledHeading>
          <h1 onMouseOver={() => setToolVisible(true)}>?</h1>
        </StyledHedingBox>
        <StyledImgBox>
          {images.length !== 0 && images.map((image, index) => (
            <StyledImg key={index} src={image} />
          ))}
        </StyledImgBox>
        <StyledParagraph isToolVisible={isToolVisible}>{description}</StyledParagraph>
        <StyledRect />
        <StyledToolBox isToolVisible={isToolVisible} onMouseLeave={() => setToolVisible(false)}>
          <StyledButtonBox>
            <StyledButton>visit live page</StyledButton>
            <StyledButton>check code source</StyledButton>
          </StyledButtonBox>
        </StyledToolBox>
      </StyledContainer>
    </div>
  );
};

// ProjectBox.propTypes = {

// };

export default ProjectBox;
