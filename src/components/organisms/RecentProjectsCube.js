import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import Cube from 'components/organisms/Cube';

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ repeat: -1 });

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
    margin-top: 3rem;
    margin-bottom: 3rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin-top: 4rem;
    margin-bottom: 5rem;
    align-self: flex-end;
    margin-right: 2rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 2.5rem 3rem;
    margin-right: 6rem;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 11rem;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 15rem;
    }
`;

const StyledParagraph = styled(Paragraph)`
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.textPrimary};
  text-shadow:${({ theme }) => `0 0 3px ${theme.color.textPrimaryShadow}`};
  @media screen and (min-width: ${breakpoint.S}) {
  font-size: ${({ theme }) => theme.fontSize.s};
    }
  @media screen and (min-width: ${breakpoint.M}) {
  font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

const RecentProjectsCube = ({ title, data, sectionId }) => {
  const instrucionsRef = useRef(null);
  const [instructionVisible, setInstructionVisible] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const animation = tl.to(instrucionsRef.current, {
      opacity: 1,
      duration: 0.25,
    }).to(instrucionsRef.current, {
      opacity: 0.1,
      duration: 0.25,
    }).to(instrucionsRef.current, {
      opacity: 1,
      duration: 0.25,
    }).to(instrucionsRef.current, {
      opacity: 1,
      duration: 1.5,
    })
      .to(instrucionsRef.current, {
        opacity: 0,
        duration: 0.25,
      });
    const st = ScrollTrigger.create({
      trigger: instrucionsRef.current,
      start: 'top 25%',
      end: 'buttom',
      animation,
    });
    return () => st.kill();
  });

  const handleDetailsClick = () => {
    history.push('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section id={sectionId}>
      <Wrapper>
        <SectionHeading>
          {title}
        </SectionHeading>
        <StyledContainer>
          {instructionVisible && <StyledParagraph ref={instrucionsRef}>rotate the cube!</StyledParagraph>}
          <Cube
            data={data}
            setInstructionVisible={setInstructionVisible}
          />
          <StyledButton variant="cta" onClick={handleDetailsClick}>see projects details</StyledButton>
        </StyledContainer>
      </Wrapper>
    </section>
  );
};

RecentProjectsCube.propTypes = {
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecentProjectsCube;
