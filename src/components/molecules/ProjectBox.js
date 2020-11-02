import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
import { ReactSVG } from 'react-svg';
import eyeIcon from 'assets/icons/eye.svg';
import OpenBoxProvider from 'Providers/OpenBoxProvider';
// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  max-width: 34rem;
  flex-shrink: 0;
  flex-grow: 0;

  @media screen and (min-width: ${breakpoint.XS}) {
    max-width: 42rem;
    }

  @media screen and (min-width: ${breakpoint.S}) {
    max-width: ${({ mobile }) => (mobile ? '50rem' : '42rem')};
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
  cursor: pointer;
`;

const StyledImgBox = styled.div`
  position: relative;
  z-index: 0;
  height: 30rem;
  margin-bottom: 2rem;
  cursor: pointer;

  :hover>div::after{
    opacity: 0;
  }

  :hover>div:nth-child(1) {
      transform: translate(-40%, -7%);
    }
    :hover>div:nth-child(2) {
      transform: translate(10%, 7%);
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
  height: 150px;
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
    height: 180px;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 320px;
    }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0;
`;

const StyledHedingBox = styled.div`
  position: relative;
  padding-right: 6rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity .3s;

  :hover{
  opacity: .5;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding-right: 8rem;
    }
`;

const StyledToolBox = styled.div`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: 0;
  left: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13rem;
  border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};
  background-color: #000000e2;
  transform: ${({ isToolVisible }) => (isToolVisible ? 'rotate(5deg) scale(1)' : 'rotate(5deg) scale(0)')};
  transition: transform .3s;
  
  @media screen and (max-width: 439px) {
    padding: 0 18rem 0 8rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
    }
`;

const StyledButtonBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-5deg);
`;

const StyledStandardButton = styled.button`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 6rem;
  height: 6rem;
  background: none;
  border: none;
  cursor: pointer;
  ::after, ::before{
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.color.textPrimary};;
    opacity: 1;
    transition: opacity .3s;
  }
  ::after{
    transform: rotate(45deg);
  }
  ::before{
    transform: rotate(-45deg);
  }
  :hover::after, :hover::before{
    opacity: .5;
  }

`;

const StyledReactSVG = styled(ReactSVG)`
  color: ${({ theme }) => theme.color.textPrimary};
  position: absolute;
  top: 1rem;
  right: 0;
  width: 4rem;

  @media screen and (min-width: ${breakpoint.M}) {
    top: 2rem;
    width: 7rem;
    }
`;

const StyledInnerSliderBox = styled.div`
  width: ${({ mobile }) => (mobile ? 'none' : '100%')};
  height: ${({ mobile }) => (mobile ? 'none' : '100%')};
  margin: ${({ mobile }) => (mobile ? '8rem 0' : 'none')};
  display: flex;
  align-items: center;
`;

const ProjectBox = ({
  title = '', images = [], description = '', mobile,
}) => (
    <StyledInnerSliderBox mobile={mobile}>
      <OpenBoxProvider
        render={
          (isToolVisible, setToolVisible) => (
            <StyledContainer mobile={mobile} onClick={() => setToolVisible(true)}>
              <StyledHedingBox>
                <StyledHeading>{title.toUpperCase()}</StyledHeading>
                <StyledReactSVG src={eyeIcon} />
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
                  <StyledStandardButton onClick={(e) => {e.stopPropagation(); setToolVisible(false)}} />
                  <StyledButton>visit live page</StyledButton>
                  <StyledButton>check code source</StyledButton>
                </StyledButtonBox>
              </StyledToolBox>
            </StyledContainer>
          )
        }
      />
    </StyledInnerSliderBox>
  );

// ProjectBox.propTypes = {

// };

export default ProjectBox;
