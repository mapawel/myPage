import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';

const StyledContainer = styled.div`
  display: flex;
  max-width: 42rem;
  margin: 3rem 0 8rem;
`;

const StyledIconBox = styled.div`
  width: 5rem;
  flex-shrink: 0;

  @media screen and (min-width: ${breakpoint.M}) {
    width: 7rem;
    }
`;

const StyledImg = styled.img`
  margin-top: 1.5rem;

  @media screen and (min-width: ${breakpoint.L}) {
    margin-top: 3.5rem;
    }
`;

const StyledTxtBox = styled.div`
  padding-left: 2rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: 4.8rem;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: 5rem;
    }
`;

const IconInfo = ({ title, content, icon }) => (
  <StyledContainer>
    <StyledIconBox>
      <StyledImg src={icon && icon} alt=">" />
    </StyledIconBox>
    <StyledTxtBox>
      <StyledHeading>{title && title.toUpperCase()}</StyledHeading>
      {content && content.map((bullet) => (
        <Paragraph key={bullet}>{bullet}</Paragraph>
      ))}
    </StyledTxtBox>
  </StyledContainer>
);

IconInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconInfo;
