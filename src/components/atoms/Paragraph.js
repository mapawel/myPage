import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: 1.5;

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export default Paragraph;
