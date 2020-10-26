import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Triangle from 'components/atoms/Triangle';
import Paragraph from 'components/atoms/Paragraph';
import Rect from 'components/atoms/Rect';
import { breakpoint } from 'breakpoints';
// import PropTypes from 'prop-types';

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
  margin-left: ${({ id }) => (id & 1) ? '2rem' : null};

  @media screen and (min-width: ${breakpoint.M}) {
    margin: ${({ theme }) => `${theme.fontSize.l} 0`};
    margin-left: ${({ id }) => (id & 1) ? '4rem' : null};
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

const TextBox = ({ rect, triangle, data = { title: '', content: [] } }) => (
  <StyledContainer>
    <StyledHeading bold>{data.title.toUpperCase()}</StyledHeading>
    {data.content.map((content, index) => (
      <StyledParagraph bold id={index} key={index}>{content}</StyledParagraph>
    ))}
    {rect && <StyledRect />}
    {triangle && <StyledTriangle />}
  </StyledContainer>
);

// TextBox.propTypes = {

// };

export default TextBox;
