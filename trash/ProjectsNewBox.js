import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectBox2 from 'components/molecules/ProjectOnCubeBox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledBox = styled.div`
  /* display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')}; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsNewBox = ({ isDesktop, data }) => {
  const projectsMobileRef = useRef(null);
  // useEffect(() => {
  //   if (data && !isDesktop) {
  //     setTimeout(() => {
  //       const projects = gsap.utils.toArray(projectsMobileRef.current.children);
  //       projects.forEach((project) => {
  //         gsap.fromTo(project,
  //           { opacity: 0 },
  //           {
  //             opacity: 1,
  //             stagger: 0.2,
  //             duration: 0.4,
  //             scrollTrigger:
  //             {
  //               trigger: project,
  //               start: 'top 65%',
  //             },
  //           });
  //       });
  //     }, 100);
  //   }
  // }, [data, isDesktop]);
  return (
    <StyledBox
      ref={projectsMobileRef}
      isDesktop={isDesktop}
    >
      {data && data.map(({
        id, title, images, description, code, live,
      }) => (
        <ProjectBox2 key={id} title={title} images={images} description={description} code={code} live={live} />
      ))}
    </StyledBox>
  );
};

ProjectsNewBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDesktop: PropTypes.bool.isRequired,
  mobile: PropTypes.bool,
};

ProjectsNewBox.defaultProps = {
  mobile: null,
};

export default ProjectsNewBox;
