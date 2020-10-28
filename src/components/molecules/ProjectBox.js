import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  max-width: 46rem;
  margin: 2rem auto 0;
  margin-bottom: 10rem;
  flex-shrink: 0;

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: 66rem;
    }
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: -1rem;
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

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: 4.8rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 6.8rem;
    }
`;

const StyledImgBox = styled.div`
  position: relative;
  height: 36rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoint.M}) {
    height: 46rem;
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
    <Paragraph>{description}</Paragraph>
    <StyledRect />
  </StyledContainer>
  </div>
);

// ProjectBox.propTypes = {

// };

export default ProjectBox;
