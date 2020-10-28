import React, { useEffect, useState, useRef } from 'react';
import Wrapper from 'templates/Wrapper';
import styled from 'styled-components';
import SectionHeading from 'components/atoms/SectionHeading';
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

gsap.registerPlugin(ScrollTrigger);

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
    title: 'full active menu',
    images: [menu1Image, menu2Image],
    description: 'JavaScript responsive menu for mobile and desktop with scroll spy, magic line, animated burger, animated. Element to use on web pages.',
  },
];

const StyledSlideBox = styled.div`
  width: 380rem;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (min-width: ${breakpoint.M}) {
    width: 560rem;
    }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 660rem;
    }
`;

const RecentProjects = () => {
  const projectsRef = useRef(null);
  useEffect(() => {
    const projects = gsap.utils.toArray(projectsRef.current.children);
    // ScrollTrigger.refresh();

    gsap.to(projects, {
      xPercent: -100 * (projects.length - 1),
      ease: 'none',
      onInterrupt: () => ScrollTrigger.refresh(),
      onStart: () => ScrollTrigger.refresh(),
      scrollTrigger: {
        trigger: projectsRef.current,
        pin: true,
        scrub: 1,
        start: 'top +10%',
        end: () => `+=${projectsRef.current.offsetWidth}`,
      },
    });
  }, []);
  return (
    <section>
      <Wrapper>
        <SectionHeading>
          {'<recent projects />'}
        </SectionHeading>
        <StyledSlideBox
          ref={projectsRef}
        >
          {projectsList.map(({ title, images, description }, index) => (
            <ProjectBox key={index} title={title} images={images} description={description} />
          ))}
        </StyledSlideBox>
      </Wrapper>
    </section>
  );
};

// RecentProjects.propTypes = {

// };

export default RecentProjects;