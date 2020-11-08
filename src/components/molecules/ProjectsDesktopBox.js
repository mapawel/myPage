import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectBox from 'components/molecules/ProjectBox';
import { breakpoint } from 'breakpoints';
import { ReactSVG } from 'react-svg';
import scrollIcon from 'assets/icons/scroll.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// import PropTypes from 'prop-types';

const pulse = keyframes`
  from {
    opacity: .3;
  }
  to {
    opacity: .8;
  }
`;

const StyledSlideBox = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? 'flex' : 'none')};
  width: 380rem;
  height: calc(100vh - 70px);
  flex-wrap: nowrap;
  padding-left: 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    padding-left: 9rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 560rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 660rem;
    }
`;

const StyledReactSvg = styled(ReactSVG)`
  position: fixed;
  z-index: 100;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 5rem;
  color: ${({ theme }) => theme.color.textPrimary};
  animation: ${pulse} .5s infinite alternate;
`;

const ProjectsDesktopBox = ({ data, isDesktop }) => {
  const [isScrollVisible, setScrollVisible] = useState(false);
  const projectsRef = useRef();

  useEffect(() => {
    let sliderTop;
    const handleSliderVisibility = () => {
      sliderTop = projectsRef.current.getBoundingClientRect().top;
      if (sliderTop < 100 && sliderTop > 0) setScrollVisible(true);
      else setScrollVisible(false);
    };
    window.addEventListener('resize', handleSliderVisibility);
    window.addEventListener('scroll', handleSliderVisibility);
  }, []);

  useEffect(() => {
    if (data) {
      const projects = gsap.utils.toArray(projectsRef.current.children);
      gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: 'none',
        onInterrupt: () => ScrollTrigger.refresh(),
        onStart: () => ScrollTrigger.refresh(),
        onComplete: () => setScrollVisible(false),
        scrollTrigger: {
          trigger: projectsRef.current,
          pin: true,
          scrub: 1,
          start: 'top 70',
          end: () => `+=${projectsRef.current.offsetWidth}`,
        },
      });
    }
  }, [data]);
  return (
    <>
      <StyledSlideBox
        ref={projectsRef}
        isDesktop={isDesktop}
      >
        {data && data.map(({
          id, title, images, description, code, live,
        }) => (
            <ProjectBox key={id} title={title} images={images} description={description} code={code} live={live} />
          ))}
      </StyledSlideBox>
      {isDesktop && isScrollVisible && <StyledReactSvg src={scrollIcon} />}
    </>

  );
};

// ProjectsDesktopBox.propTypes = {

// };

export default ProjectsDesktopBox;
