import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Triangle from 'components/atoms/Triangle';
import Paragraph from 'components/atoms/Paragraph';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.div`
  position: relative;
  max-width: 42rem;
  margin: 2rem auto 0;
  margin-bottom: 10rem;
  flex-shrink: 0;

  @media screen and (min-width: ${breakpoint.M}) {
    max-width: 66rem;
    }
`;

const StyledHeading = styled(Heading)`
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

const StyledParagraph = styled(Paragraph)`
  margin: ${({ theme }) => `${theme.fontSize.s} 0`};
  margin-left: ${({ id }) => ((id & 1) ? '2rem' : null)};

  @media screen and (min-width: ${breakpoint.M}) {
    margin: ${({ theme }) => `${theme.fontSize.l} 0`};
    margin-left: ${({ id }) => ((id & 1) ? '4rem' : null)};
    }
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 54rem;
  height: 54rem;
  top: -4rem;
  left: -4rem;
  transform: rotate(5deg);

  @media screen and (min-width: ${breakpoint.M}) {
    width: 76rem;
    height: 76rem;
    }
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  width: 62rem;
  height: 62rem;
  top: -15rem;
  left: -20rem;
  transform: rotate(-30deg);

  @media screen and (min-width: ${breakpoint.M}) {
    width: 84rem;
    height: 84rem;
    }
`;

const TextBox = ({ rect, triangle, data }) => {
  const rectRef = useRef(null);
  const triangleRef = useRef(null);

  const pulseAnim = [
    { scale: '1.02' },
    {
      scale: '0.99',
      duration: 2,
      yoyo: true,
      repeat: -1,
      scrollTrigger:
      {
        trigger: rectRef.current,
        start: 'top 50%',
      },
    }];

  useEffect(() => {
    gsap.fromTo(rectRef.current, ...pulseAnim);
    gsap.fromTo(triangleRef.current, ...pulseAnim);
  });
  return (
    <StyledContainer>
      <StyledHeading bold>{data && data.title.toUpperCase()}</StyledHeading>
      {data && data.content.map((content, index) => (
        <StyledParagraph bold id={index} key={content}>{content}</StyledParagraph>
      ))}
      {rect && <StyledRect ref={rectRef} />}
      {triangle && <StyledTriangle ref={triangleRef} />}
    </StyledContainer>
  );
};

// TextBox.propTypes = {

// };

export default TextBox;
