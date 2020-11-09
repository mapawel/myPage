import React from 'react';
import styled from 'styled-components';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Heading from 'components/atoms/Heading';
import MessageForm from 'components/molecules/MessageForm';
import TwoColumns from 'templates/TwoColumns';
import { breakpoint } from 'breakpoints';

const StyledMessageBox = styled.div`
  margin: 0 auto;
`;

const StyledMediaBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5rem;

  @media screen and (min-width: ${breakpoint.S}) {
  flex-direction: column;
    }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 5rem;
`;

const StyledImg = styled.img`
  width: 5rem;
  margin: 0 3rem 2rem;
  transition: opacity .3s;
  cursor: pointer;
  :hover{
    opacity: .5;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem 1rem 5rem;
    }
  @media screen and (min-width: ${breakpoint.XL}) {
    width: 7rem;
    }
`;

const StyledSection = styled.section`
  min-height: 100vh;
`;

const Contact = ({ title, data, icons }) => (
  <StyledSection id="contactSection">
    <Wrapper>
      <SectionHeading>
        {title}
      </SectionHeading>
      <TwoColumns>
        <StyledMediaBox>
          {icons && icons.map((icon) => <StyledImg key={icon.id} src={icon.icon.url} alt="contact" onClick={() => window.open(icon.link, '_blank')} />)}
        </StyledMediaBox>
        <StyledMessageBox>
          <StyledHeading>{data && data.heading}</StyledHeading>
          <MessageForm data={data} />
        </StyledMessageBox>
      </TwoColumns>
    </Wrapper>
  </StyledSection>
);

export default Contact;
