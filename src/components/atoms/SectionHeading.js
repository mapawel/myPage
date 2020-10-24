import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Svg = styled.svg`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 900;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 8rem;
  text-transform: uppercase;
  stroke: ${({ theme }) => theme.color.textSecondary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    }

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

const SectionHeading = ({ children, className }) => (
  <Svg classNam={className} viewbox="0 0 200 120">
    <text x="50%" y="120" textAnchor="middle" fill="none" strokeWidth="1">{children}</text>
  </Svg>
);

export default SectionHeading;
