import React, { useEffect, useState } from 'react';
import Wrapper from 'templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { breakpoint } from 'breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import ProjectsMobileBox from 'components/molecules/ProjectsMobileBox';
import ProjectsDesktopBox from 'components/molecules/ProjectsDesktopBox';

gsap.registerPlugin(ScrollTrigger);

const RecentProjects = ({ title, data }) => {
  const [isDesktop, setIsDestkop] = useState(false);
  const desktopBreakpoint = breakpoint.M.split('px')[0] * 1;

  useEffect(() => {
    const getWidth = () => {
      if (window.innerWidth >= desktopBreakpoint) setIsDestkop(true);
      else setIsDestkop(false);
    };
    window.addEventListener('resize', getWidth);
    getWidth();
  }, [desktopBreakpoint]);

  return (
    <section>
      <Wrapper>
        <SectionHeading>
          {title}
        </SectionHeading>
        <ProjectsDesktopBox
          isDesktop={isDesktop}
          data={data}
        />
        <ProjectsMobileBox
          isDesktop={isDesktop}
          data={data}
          mobile
        />
      </Wrapper>
    </section>
  );
};

RecentProjects.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecentProjects;
