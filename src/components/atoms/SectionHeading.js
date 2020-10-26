import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Svg = styled.svg`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 900;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  stroke: ${({ theme }) => theme.color.textSecondary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-top: 7rem;
    margin-bottom: 8rem;
    }
  
  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.extraWide};
    }
`;

const SectionHeading = ({ children, className }) => {
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const checkIsWide = () => setIsWide(window.innerWidth >= 440);
    window.addEventListener('resize', checkIsWide);
    checkIsWide()
  }, []);

  return (
    <Svg classNam={className} viewbox="0 0 200 120">
      {isWide ? (
        <text x="50%" y="120" textAnchor="middle" fill="none" strokeWidth="1">{children}</text>
      ) : (
          <text x="50%" y="120" textAnchor="middle" fill="none" strokeWidth="1" textLength="340" lengthAdjust="spacingAndGlyphs">{children}</text>
        )}
    </Svg>
  );
};

export default SectionHeading;
