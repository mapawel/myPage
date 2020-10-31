import React, { useEffect, useRef, useState } from 'react';
import Wrapper from 'templates/Wrapper';
import styled, { keyframes } from 'styled-components';
import SectionHeading from 'components/atoms/SectionHeading';
import { ReactSVG } from 'react-svg';
import scrollIcon from 'assets/icons/scroll.svg';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PropTypes from 'prop-types';
import ProjectBox from 'components/molecules/ProjectBox';

import expensesplanner1Image from 'assets/images/expensesplanner1.jpg';
import expensesplanner2Image from 'assets/images/expensesplanner2.jpg';
import expensesplanner3Image from 'assets/images/expensesplanner3.jpg';
import positive1Image from 'assets/images/positive1.jpg';
import positive2Image from 'assets/images/positive2.jpg';
import positive3Image from 'assets/images/positive3.jpg';
import mealsearcher1Image from 'assets/images/mealsearcher1.jpg';
import mealsearcher2Image from 'assets/images/mealsearcher2.jpg';
import mealsearcher3Image from 'assets/images/mealsearcher3.jpg';
import menu1Image from 'assets/images/menu1.jpg';
import menu2Image from 'assets/images/menu2.jpg';
import mymemo1Image from 'assets/images/mymemo1.jpg';
import mymemo2Image from 'assets/images/mymemo2.jpg';
import mymemo3Image from 'assets/images/mymemo3.jpg';
import webpage1Image from 'assets/images/webpage1.jpg';
import webpage2Image from 'assets/images/webpage2.jpg';
import webpage3Image from 'assets/images/webpage3.jpg';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

const projectsList = [
  {
    title: 'expenses planner',
    images: [expensesplanner1Image, expensesplanner2Image, expensesplanner3Image],
    description: 'React, Redux, React Router, Styled Components, Formik, my own calendar project, integrated with Firestore, SPA, RWD',
  },
  {
    title: 'positive thinker',
    images: [positive1Image, positive2Image, positive3Image],
    description: 'React, Material UI, Firestore, Firebase storage, Authentication, Formik, Toastify, SPA, RWD',
  },
  {
    title: 'myMemo',
    images: [mymemo1Image, mymemo2Image, mymemo3Image],
    description: 'JavaScript, CSS, WebComponents (Custom elements, Shadow DOM), local storage, RWD',
  },
  {
    title: 'meal searcher',
    images: [mealsearcher1Image, mealsearcher2Image, mealsearcher3Image],
    description: 'JavaScript, HTML, CSS/SASS, Public API, RWD',
  },
  {
    title: 'takiStyl',
    images: [webpage1Image, webpage2Image, webpage3Image],
    description: 'HTML, CSS/SASS, RWD, Bootstrap elements, JavaScript, Slick, RWD, example of a standard web page',
  },
  {
    title: 'active menu',
    images: [menu1Image, menu2Image],
    description: 'JavaScript responsive menu for mobile and desktop with scroll spy, magic line, animated burger, animated. Element to use on web pages.',
  },
];

const pulse = keyframes`
  from {
    opacity: .3;
  }
  to {
    opacity: .8;
  }
`;

const StyledSlideBox = styled.div`
  display: ${({ isDesktop }) => isDesktop ? 'flex' : 'none'};
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

const StyledMobileBox = styled.div`
  display: ${({ isDesktop }) => isDesktop ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
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

const RecentProjects = () => {
  const [isScrollVisible, setScrollVisible] = useState(false);
  const [isDesktop, setIsDestkop] = useState(false);
  const desktopBreakpoint = breakpoint.M.split('px')[0] * 1;
  const projectsRef = useRef(null);

  useEffect(() => {
    let sliderTop;
    const handleSliderVisibility = () => {
      sliderTop = projectsRef.current.getBoundingClientRect().top;
      if (sliderTop !== 0 && sliderTop < 100) setScrollVisible(true);
      else setScrollVisible(false);
    };
    window.addEventListener('resize', handleSliderVisibility);
    window.addEventListener('scroll', handleSliderVisibility);
  }, []);

  useEffect(() => {
    const getWidth = () => {
      if (window.innerWidth >= desktopBreakpoint) setIsDestkop(true);
      else setIsDestkop(false);
    };
    window.addEventListener('resize', getWidth);
    getWidth();
  }, []);

  useEffect(() => {
    const projects = gsap.utils.toArray(projectsRef.current.children);
    gsap.to(projects, {
      xPercent: -100 * (projects.length - 1),
      ease: 'none',
      overwrite: 'false',
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
  }, []);

  const test = () => console.log('da daaad da daaaaa');

  return (
    <section>
      <Wrapper>
        <SectionHeading>
          {'<recent projects />'}
        </SectionHeading>
        <StyledSlideBox
          ref={projectsRef}
          isDesktop={isDesktop}
          onLoadStart={test}
        >
          {projectsList.map(({ title, images, description }, index) => (
            <ProjectBox key={index} title={title} images={images} description={description} />
          ))}
        </StyledSlideBox>
        <StyledMobileBox
          isDesktop={isDesktop}
        >
          {projectsList.map(({ title, images, description }, index) => (
            <ProjectBox key={index} title={title} images={images} description={description} mobile />
          ))}
        </StyledMobileBox>
        {isDesktop && isScrollVisible && <StyledReactSvg src={scrollIcon} />}
      </Wrapper>
    </section>
  );
};

// RecentProjects.propTypes = {

// };

export default RecentProjects;
