import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Wrapper from 'templates/Wrapper';
import TwoColumns from 'templates/TwoColumns';
import Triangle from 'components/atoms/Triangle';
import Button from 'components/atoms/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { breakpoint } from 'breakpoints';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const imgAnim = keyframes`
0% {
  opacity: .3;
}
20% {
  opacity: 0.1;
}
40% {
  opacity: 0.5;
}
55% {
  opacity: 0.3;
}
70% {
  opacity: 0.7;
}
85% {
  opacity: 0.6;
}
100% {
  opacity: 1;
}
`;

const StyledTwoColumns = styled(TwoColumns)`
  position: relative;
  z-index: 0;
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
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-shadow: -2px 2px 6px black;
  font-weight: 700;
  line-height: 1.05;
  opacity: 0;

  
  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    }
  
  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.extraWide};
    }
`;

const StyledHeaderTxtSpan = styled(StyledHeaderTxt)`
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: ${({ theme }) => theme.fontSize.m};
  margin-bottom: ${({ theme }) => theme.fontSize.s};
  text-shadow: ${({ theme }) => `0 0 4px ${theme.color.textPrimaryShadow}`};
`;

const StyledTxtBox = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  padding-left: 1rem;

  @media screen and (min-width: ${breakpoint.L}) {
    width: 70%;
    height: 100%;
    }
      
  @media screen and (min-width: ${breakpoint.XL}) {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    }
`;

const StyledImgBox = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
  opacity: 0;

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
  z-index: 1;
  animation: ${imgAnim} .5s 4s both;

  @media screen and (min-width: ${breakpoint.S}) {
  max-width: 60%;
    }

  @media screen and (min-width: ${breakpoint.M}) {
  max-width: 100%;
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
  transform:  rotate(15deg);
  width: 300px;
  height: 300px;
  top: -10%;
  left: 25%;
  opacity: 0;


  @media screen and (min-width: ${breakpoint.S}) {
    top: -30%;
    width: 500px;
    height: 500px;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 800px;
    height: 800px;
    top: 0;
    left: 70%;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    left: 35%;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    width: 1000px;
    height: 1000px;
    }
`;

const Header = ({ data: { headings, headerImageUrl }, sectionId }) => {
  const txtBoxRef = useRef(null);
  const triangleRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    if (headings && headerImageUrl) {
      gsap.fromTo(txtBoxRef.current.children,
        { x: '+=200', opacity: 0 },
        {
          x: '0',
          opacity: 1,
          stagger: 0.6,
          duration: 0.4,
        });

      gsap.fromTo(triangleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
        });

      gsap.fromTo(imgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
        });
    }
  }, [headings, headerImageUrl]);

  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: `#${sectionId}`, offsetY: -100 } });
  };

  return (
    <header id="headerSection">
      <Wrapper>
        <StyledTwoColumns>
          <StyledTxtBox ref={txtBoxRef}>
            <StyledTriangle ref={triangleRef} />
            <StyledHeaderTxt>
              {headings && headings[0]}
              <br />
            </StyledHeaderTxt>
            <StyledHeaderTxtSpan>{headings && headings[1]}</StyledHeaderTxtSpan>
            <StyledHeaderTxt>
              {headings && headings[2]}
            </StyledHeaderTxt>
          </StyledTxtBox>
          <StyledImgBox ref={imgRef}>
            <StyledHeaderImg src={headerImageUrl && headerImageUrl} />
            <StyledButton onClick={handleClick}>contact me</StyledButton>
          </StyledImgBox>
        </StyledTwoColumns>
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])).isRequired,
};

export default Header;
