import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
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
`;

const StyledImgBox = styled.div`
  position: relative;
  height: 30rem;
  margin-bottom: 2rem;

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

const StyledImg = styled.img`
  position: absolute;
  width: calc(100% - 80px);
  border: ${({ theme }) => `1px solid ${theme.color.textSecondary}`};

  &:nth-child(1){
    left: 50%;
    z-index: 5;
    transform: translateX(-50%);
  }
  &:nth-child(2){
    bottom: 0;
    z-index: 0;
  }
  &:nth-child(3){
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
  }
`;

const ProjectBox = ({ title = '', images = [], description = '' }) => (
  <div style={{width: '100%', height: '100vh'}} >
  <StyledContainer>
    <StyledHeading>{title.toUpperCase()}</StyledHeading>
    <StyledImgBox>
      {images.length !== 0 && images.map((image, index) => (
        <StyledImg key={index} src={image} />
      )) }
    </StyledImgBox>
    <StyledParagraph>{description}</StyledParagraph>
    <StyledRect />
  </StyledContainer>
  </div>
);

// ProjectBox.propTypes = {

// };

export default ProjectBox;
