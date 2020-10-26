import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';

// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  max-width: 42rem;
  margin: 3rem 0 8rem;

  /* @media screen and (min-width: ${breakpoint.L}) {
    margin: 3rem auto 8rem 0;
    } */
`;

const StyledIconBox = styled.div`
  width: 5rem;
  flex-shrink: 0;

  @media screen and (min-width: ${breakpoint.M}) {
    width: 7rem;
    }
`;

const StyledReactSVG = styled(ReactSVG)`
  color: ${({ theme }) => theme.color.textSecondary};
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

const IconInfo = ({ title = '', content = [], icon }) => {
  return (
    <StyledContainer>
      <StyledIconBox>
      <StyledReactSVG src={icon} />
      </StyledIconBox>
      <StyledTxtBox>
    <StyledHeading>{title.toUpperCase()}</StyledHeading>
    {content.map((bullet, index) => (
      <Paragraph key={index}>{bullet}</Paragraph>
    ))}
      </StyledTxtBox>
    </StyledContainer>
  );
};


// IconInfo.propTypes = {

// };


export default IconInfo;
