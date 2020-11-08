import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 200vh;
`;

const StyledBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  top: -60px;
  background-color: darkblue;
  transition: transform .4s;
  transform: ${({ position }) => position > 100 ? 'translateY(60px)' : 'translateY(0)' };
`;

const Test = () => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const setScrollFn = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', setScrollFn);
    return () => window.removeEventListener('scroll', setScrollFn);
  }, []);
  return (
    <StyledSection>
      <StyledBox position={scrollPos} />
    </StyledSection>
  );
};

export default Test;
