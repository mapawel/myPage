import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import { breakpoint } from 'breakpoints';

const reverseAnim = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0);
  }
  49% {
    opacity: 0;
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: rotate(180deg);
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 3rem 3rem;
  flex-shrink: 0;
  flex-grow: 0;

  ${({ upSideDown }) => upSideDown && css`
  animation: ${reverseAnim} .35s 1.2s both;
  `}
  
  @media screen and (min-width: ${breakpoint.M}) {
    padding: 4rem 5rem 5rem;

  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media screen and (max-width: 390px) {
    font-size: 1.8rem;
    }

  @media screen and (min-width: ${breakpoint.XS}) {
    margin-bottom: 3rem;
    }

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 2rem;
    font-size: 3.6rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 5.8rem;
    }
`;

const StyledImgBox = styled.div`
  position: relative;
  z-index: 0;
  height: 11rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 15rem;
    }

  @media screen and (min-width: ${breakpoint.S}) {
    height: 17rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 25rem;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    height: 26rem;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    height: 30rem;
    }
`;

const StyledImg = styled.div`
  position: absolute;
  z-index: 0;
  width: calc(100% - 20px);
  height: 70px;
  border: ${({ theme }) => `1px solid ${theme.color.textSecondary}`};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  ::after{
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

  :nth-child(1){
    left: 50%;
    z-index: 5;
    transform: translate(-50%, 0);
    transition: transform .25s;
  }
  :nth-child(2){
    bottom: 0;
    z-index: 0;
    transform: translate(0, 0);
    transition: transform .25s;
  }
  :nth-child(3){
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 100px;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 160px;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    height: 190px;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    height: 220px;
    }
`;

const ProjectOnCubeBox = ({
  title, images, upSideDown,
}) => (
  <StyledContainer upSideDown={upSideDown}>
    <StyledHeading>{title && title.toUpperCase()}</StyledHeading>
    <StyledImgBox>
      {images && images.length !== 0 && images.map(({ id, url }) => (
        <StyledImg key={id} src={url} />
      ))}
    </StyledImgBox>
  </StyledContainer>
);

ProjectOnCubeBox.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  upSideDown: PropTypes.bool,
};

ProjectOnCubeBox.defaultProps = {
  upSideDown: null,
};

export default ProjectOnCubeBox;
