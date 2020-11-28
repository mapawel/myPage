import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Svg = styled.svg`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 900;
  width: 100%;
  margin-top: ${({ nomargin }) => (nomargin ? '0rem' : '2rem')};
  margin-bottom: 3rem;
  text-transform: uppercase;
  stroke: ${({ theme }) => theme.color.textSecondary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: ${({ nomargin }) => (nomargin ? '2rem' : '8rem')};
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-top: ${({ nomargin }) => (nomargin ? '3rem' : '13rem')};
    margin-bottom: 8rem;
    }
  
  @media screen and (min-width: ${breakpoint.L}) {
    margin-top: ${({ nomargin }) => (nomargin ? '5rem' : '16rem')};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-top: ${({ nomargin }) => (nomargin ? '2rem' : '20rem')};
    font-size: ${({ theme }) => theme.fontSize.extraWide};
    }
`;

const SectionHeading = ({ children, className, nomargin }) => {
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const checkIsWide = () => setIsWide(window.innerWidth >= 440);
    window.addEventListener('resize', checkIsWide);
    checkIsWide();
    return () => window.removeEventListener('resize', checkIsWide);
  }, []);

  return (
    <Svg className={className} nomargin={nomargin} viewbox="0 0 200 95">
      {isWide ? (
        <text x="50%" y="95" textAnchor="middle" fill="none" strokeWidth="1">{children}</text>
      ) : (
        <text x="50%" y="95" textAnchor="middle" fill="none" strokeWidth="1" textLength="340" lengthAdjust="spacingAndGlyphs">{children}</text>
      )}
    </Svg>
  );
};

SectionHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  nomargin: PropTypes.bool,
};

SectionHeading.defaultProps = {
  className: null,
  nomargin: null,
};

export default SectionHeading;
