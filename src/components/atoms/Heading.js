import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Heading = styled.h2`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.m)};
  font-weight: ${({ bold }) => (bold ? 900 : 700)};
  color: ${({ theme, secondary }) => (secondary ? theme.color.textSecondary : theme.color.textPrimary)};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
    }
  
  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.xl)};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xxxl : theme.fontSize.xxl)};
    }
`;

export default Heading;
