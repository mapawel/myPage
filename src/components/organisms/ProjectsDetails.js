import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import ProjectsMobileBox from 'components/molecules/ProjectsMobileBox';
import ProjectsDesktopBox from 'components/molecules/ProjectsDesktopBox';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
    margin-top: 2rem;
    margin-bottom: 3rem;

  @media screen and (min-width: ${breakpoint.M}) {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 2.5rem 3rem;
    margin-left: 6rem;
    }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: 11rem;
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-left: 15rem;
    }
`;

const ProjectsDetails = ({ title, data, sectionId }) => {
  const [isDesktop, setIsDestkop] = useState(false);
  const history = useHistory();
  const desktopBreakpoint = breakpoint.M.split('px')[0] * 1;

  useEffect(() => {
    const getWidth = () => {
      if (window.innerWidth >= desktopBreakpoint) setIsDestkop(true);
      else setIsDestkop(false);
    };
    window.addEventListener('resize', getWidth);
    getWidth();
    return () => window.removeEventListener('resize', getWidth);
  }, [desktopBreakpoint]);

  const handleBackClick = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  return (
    <section id={sectionId}>
      <Wrapper>
        <StyledContainer>
          <SectionHeading nomargin>
            {title}
          </SectionHeading>
          <StyledButton onClick={handleBackClick}>home</StyledButton>
        </StyledContainer>
        <ProjectsDesktopBox
          isDesktop={isDesktop}
          data={data}
        />
        <ProjectsMobileBox
          isDesktop={isDesktop}
          data={data}
          mobile
        />
        <StyledContainer>
          <StyledButton
            onClick={handleBackClick}
          >
            home

          </StyledButton>
        </StyledContainer>
      </Wrapper>
    </section>
  );
};

ProjectsDetails.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsDetails;
