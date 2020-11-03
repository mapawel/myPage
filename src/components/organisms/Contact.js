import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Heading from 'components/atoms/Heading';
import MessageForm from 'components/molecules/MessageForm';
import TwoColumns from 'templates/TwoColumns';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { breakpoint } from 'breakpoints';
import { ReactSVG } from 'react-svg';
import messangerIcon from 'assets/icons/messanger.svg';
import linkedInIcon from 'assets/icons/linkedin.svg';
import githubIcon from 'assets/icons/github.svg';
import SentMailPopUp from 'components/organisms/SentMailPopUp';

gsap.registerPlugin(ScrollTrigger);

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

const StyledReactSVG = styled(ReactSVG)`
  width: 5rem;
  margin: 0 3rem 2rem;
  color: ${({ theme }) => theme.color.textPrimary};
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

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false)
  useEffect(() => {
    // gsap.fromTo(txtBoxRef.current.children,
    //   { x: '+=200', opacity: 0 },
    //   {
    //     x: '0',
    //     opacity: 1,
    //     stagger: 0.6,
    //     duration: 0.4,
    //   });

    // gsap.fromTo(triangleRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 3,
    //   });

    // gsap.fromTo(imgRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 3,
    //   });
  });

  const togglePopup = () => {
    setPopupVisible(currentState => !currentState)
  }
  return (
    <StyledSection id="contactSection">
      <Wrapper>
        <SectionHeading >
          {'<contact />'}
        </SectionHeading>
        <TwoColumns>
          <StyledMediaBox>
            <StyledReactSVG src={linkedInIcon} />
            <StyledReactSVG src={githubIcon} />
            <StyledReactSVG src={messangerIcon} />
          </StyledMediaBox>
          <StyledMessageBox>
            <StyledHeading>leave me a message</StyledHeading>
            <MessageForm togglePopup={togglePopup} />
          </StyledMessageBox>
        </TwoColumns>
      </Wrapper>
      {popupVisible && <SentMailPopUp togglePopup={togglePopup} />}
      
    </StyledSection>
  );
};

export default Contact;
