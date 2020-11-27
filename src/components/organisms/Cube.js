import React, { useRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import ProjectOnCubeBox from 'components/molecules/ProjectOnCubeBox';
import CubeMoveProvider from 'Providers/CubeMoveProvider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledCube = styled.div`
    position: relative;
    display: block;
    height: ${({ theme: { wallSize } }) => `${wallSize * 2}px`};
    width: 100%;
    padding-top: ${({ theme: { wallSize } }) => `${wallSize * 0.45}px`};
    perspective: 1300px;
`;
const StyledSurface = styled.div`
    touch-action: none;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ theme: { wallSize } }) => `${wallSize * 1.8}px`};
    height: 100%;
    display: block;
    user-select: none;
    cursor: pointer;
    :active{
      cursor: move;
    }
`;

const StyledCybeContainer = styled.div.attrs(({ rotateX, rotateY, activeMove }) => ({
  style: {
    transform: `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
    transition: activeMove ? 'transform 0s cubic-bezier(0, 0.55, 0.45, 1)' : 'transform 1s cubic-bezier(0, 0.55, 0.45, 1)',
  },
}))`
    margin: 0 auto;
    position: relative;
    width: ${({ theme: { wallSize } }) => `${wallSize}px`};
    height: ${({ theme: { wallSize } }) => `${wallSize}px`};
    transform-style: preserve-3d;
`;

const StyledWall = styled.div`
    width: ${({ theme: { wallSize } }) => `${wallSize}px`};
    height: ${({ theme: { wallSize } }) => `${wallSize}px`};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme, theme: { wallSize } }) => `inset 0 0 ${wallSize / 5}px ${theme.color.particles}`};
    background-color: ${({ theme }) => theme.color.back};
`;

const StyledWallLeft = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `rotateY(-90deg) translateZ(${wallSize / 2}px)`};
`;
const StyledWallRight = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `translateZ(${wallSize / 2}px)`};
`;
const StyledWallTop = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `rotateX(90deg) translateZ(${wallSize / 2}px)`};
`;
const StyledWallBackRight = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `rotateY(180deg) translateZ(${wallSize / 2}px)`};
`;
const StyledWallBackLeft = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `rotateY(90deg) translateZ(${wallSize / 2}px)`};
`;
const StyledWallBottom = styled(StyledWall)`
  transform: ${({ theme: { wallSize } }) => `rotateX(-90deg) translateZ(${wallSize / 2}px)`};
`;

const Cube = ({ data, setInstructionVisible }) => {
  const cubeRef = useRef(null);
  const [animatedStart, setAnimatedStart] = useState(false);
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: cubeRef.current,
      start: 'top 30%',
      onEnter: () => setAnimatedStart(true),
    });
    return () => st.kill();
  });
  return (
    <CubeMoveProvider
      setInstructionVisible={setInstructionVisible}
      startAnimation={animatedStart}
      render={
        (upSideDown, start, stop, moving, startTouch, stopTouch, movingTouch, rotateX, rotateY, activeMove, wallSize) => (
          <ThemeProvider theme={{ wallSize }}>
            <StyledCube ref={cubeRef}>
              <StyledSurface
                onMouseDown={start}
                onMouseUp={stop}
                onMouseLeave={stop}
                onMouseMove={moving}
                onTouchStart={startTouch}
                onTouchEnd={stopTouch}
                onTouchCancel={stopTouch}
                onTouchMove={movingTouch}
              />
              <StyledCybeContainer
                rotateX={rotateX}
                rotateY={rotateY}
                activeMove={activeMove}
              >
                <StyledWallLeft>
                  <ProjectOnCubeBox title={data && data[1].title} images={data && data[1].images} upSideDown={upSideDown} />
                </StyledWallLeft>
                <StyledWallRight>
                  <ProjectOnCubeBox title={data && data[0].title} images={data && data[0].images} upSideDown={upSideDown} />
                </StyledWallRight>
                <StyledWallTop>
                  <ProjectOnCubeBox title={data && data[2].title} images={data && data[2].images} />
                </StyledWallTop>
                <StyledWallBackRight>
                  <ProjectOnCubeBox title={data && data[3].title} images={data && data[3].images} upSideDown={upSideDown} />
                </StyledWallBackRight>
                <StyledWallBackLeft>
                  <ProjectOnCubeBox title={data && data[4].title} images={data && data[4].images} upSideDown={upSideDown} />
                </StyledWallBackLeft>
                <StyledWallBottom>
                  <ProjectOnCubeBox title={data && data[5].title} images={data && data[5].images} />
                </StyledWallBottom>
              </StyledCybeContainer>
            </StyledCube>
          </ThemeProvider>
        )
      }
    />
  );
};

// Cube.propTypes = {

// };

export default Cube;
