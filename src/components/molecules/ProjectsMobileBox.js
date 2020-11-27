import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectBox from 'components/molecules/ProjectBox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledMobileBox = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  opacity: 0;
`;

const ProjectsMobileBox = ({ isDesktop, data, mobile }) => {
  const projectsMobileRef = useRef(null);
  useEffect(() => {
    if (data && !isDesktop) {
      setTimeout(() => {
        gsap.set(projectsMobileRef.current, { opacity: 1 });
        const projects = gsap.utils.toArray(projectsMobileRef.current.children);
        projects.forEach((project) => {
          gsap.fromTo(project,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: 0.2,
              duration: 0.4,
              scrollTrigger:
              {
                trigger: project,
                start: 'top 65%',
              },
            });
        });
      }, 100);
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [data, isDesktop]);
  return (
    <StyledMobileBox
      ref={projectsMobileRef}
      isDesktop={isDesktop}
    >
      {data && data.map(({
        id, title, images, description, code, live,
      }) => (
        <ProjectBox key={id} title={title} images={images} description={description} code={code} live={live} mobile={mobile} />
      ))}
    </StyledMobileBox>
  );
};

ProjectsMobileBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDesktop: PropTypes.bool.isRequired,
  mobile: PropTypes.bool,
};

ProjectsMobileBox.defaultProps = {
  mobile: null,
};

export default ProjectsMobileBox;
