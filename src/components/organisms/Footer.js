import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { breakpoint } from 'breakpoints';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
position: relative;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.back};
  display: flex;
  justify-content: center;
  align-items: center;
  ::before, ::after{
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 0; 
    height: 0; 
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    opacity: .3;
  }
  ::before{
    left: 5%;
    border-bottom: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }
  ::after{
    border-top: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: center;


  @media screen and (min-width: ${breakpoint.L}) {
  font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};
`;

const StyledArrowBox = styled.div`
  position: relative;
  width: 0; 
  height: 0; 
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-bottom: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  margin-left: 4rem;
  display: flex;
  justify-content: center;
  transition: opacity .3s;
  cursor: pointer;
  :hover{
    opacity: .5;
  }
`;

const StyledUpTxt = styled(StyledParagraph)`
  position: relative;
  top: 3rem;
  line-height: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.color.textSecondary};

`;

const Footer = () => {
  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: '#headerSection', offsetY: 0 } });
  };
  return (
    <StyledFooter>
      <StyledParagraph>
        &copy;
        {' '}
        <StyledLink href="https://github.com/mapawel">mapawel</StyledLink>
        , All rights reserved
      </StyledParagraph>
      <StyledArrowBox
        onClick={handleClick}
      >
        <StyledUpTxt>
          UP
        </StyledUpTxt>
      </StyledArrowBox>
    </StyledFooter>
  );
};

// Footer.propTypes = {

// };

export default Footer;
