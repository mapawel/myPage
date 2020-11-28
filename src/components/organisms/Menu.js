import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeProvider, css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { breakpoint } from 'breakpoints';
import Wrapper from 'templates/Wrapper';
import Switch from 'templates/Switch';

gsap.registerPlugin(ScrollToPlugin);

const tl = gsap.timeline();
const tl2 = gsap.timeline({ paused: true });

const menuExpandXAnim = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(0) scaleY(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(.001);
  }
`;
const menuExpandYAnim = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(.001));
  }
  to {
    transform: translate(-50%, -50%) rotate(-45deg) scaleX(1) scaleY(1);
  }
`;

const StyledBlend = styled.div`
  position: fixed;
  z-index: 900;
  width: 270vw;
  height: 270vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg) scaleX(0) scaleY(0);
  transition: transform .5s;
  background-color: ${({ theme }) => theme.color.back};
  ${({ manuOpen }) => manuOpen && css`
    animation: ${menuExpandXAnim} .6s both, ${menuExpandYAnim} .85s .25s both;
  `}
`;

const StyledContainer = styled.div`
  position: relative;
  z-index: 1000;
  margin-left: auto;
  width: 10rem;
  opacity: ${({ manuBarVisible }) => (manuBarVisible ? 1 : 0)};
  transition: opacity .3s;
`;

const StyledTrianglesBox = styled.div`
  display: ${({ manuBarVisible }) => (manuBarVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  transform: ${({ theme: { manuBarWide } }) => (manuBarWide ? 'scale(1)' : 'scale(.7)')};
  transition: transform .2s;
  cursor: pointer;
`;

const StyledTriangleSmall = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-20px);
  width: 0; 
  height: 0; 
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: ${({ theme }) => `6rem solid ${theme.color.particles}`};
  border-left: 4rem solid transparent;
  border-right: 4rem solid transparent;
  border-top: ${({ theme }) => `4rem solid ${theme.color.particles}`};
  opacity: .6;
`;

const StyledTriangleBig = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  transform: translateX(60px);
  width: 0; 
  height: 0; 
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: ${({ theme }) => `6rem solid ${theme.color.particles}`};
`;

const StyledMenuBack = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 0; 
  height: 0; 
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-bottom: ${({ theme }) => `6rem solid ${theme.color.back}`};
  transform: ${({ theme: { manuBarWide } }) => (manuBarWide ? 'translate(0)' : 'translate(20px, -20px)')};
  transition: transform .2s;
`;

const StyledButton = styled.button`
  position: relative;
  height: 6rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: none;
  padding: 2.8rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::before, ::after{
    content: '';
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.color.textPrimary};
    height: 2px;
    width: 4rem;
    transform: ${({ theme: { manuBarWide } }) => (manuBarWide ? 'scaleX(1) translate(0, 0)' : 'scaleX(.65) translate(-18px, 10px)')};
    transform-origin: left;
    transition: transform .2s;
  }
  ::before{
    bottom: 14px;
  }
  ::after{
    content: '';
    bottom: 24px;
  }

  ${({ manuOpen }) => manuOpen && css`
    ::after{
      transform-origin: center;
      transform: translate(2px, 5px) rotate(45deg) ;
    }
    ::before{
      transform-origin: center;
      transform: translate(2px, -5px) rotate(-45deg) ;
    }
  `}
`;

const StyledListContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: ${({ manuOpen }) => (manuOpen ? 'flex' : 'none')};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
`;

const StyledListElement = styled.li`
  padding: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.color.textPrimary};
  white-space: nowrap;
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;

const Menu = ({ sectiontitles }) => {
  const [pageHeight, setPageHeight] = useState(600);
  const [manuBarWide, setMenuBarWide] = useState(true);
  const [manuBarVisible, setMenuBarVisible] = useState(false);
  const [manuOpen, setMenuOpen] = useState(false);
  const menuListRef = useRef(null);
  const switchRef = useRef(null);
  const history = useHistory();
  let prevScrollY = 0;

  useEffect(() => {
    const direction = () => {
      if (window.scrollY > prevScrollY) {
        setMenuBarWide(false);
        prevScrollY = window.scrollY;
      } else {
        setMenuBarWide(true);
        prevScrollY = window.scrollY;
      }
    };
    window.addEventListener('scroll', direction);
    return () => window.removeEventListener('scroll', direction);
  }, []);

  useEffect(() => {
    if (manuOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [manuOpen]);

  useEffect(() => {
    const checkHeight = () => {
      setPageHeight(window.innerHeight);
    };
    window.addEventListener('resize', checkHeight);
    checkHeight();
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  useEffect(() => {
    const showMenuBar = () => {
      if (window.scrollY > (pageHeight * 0.7)) setMenuBarVisible(true);
    };
    window.addEventListener('scroll', showMenuBar);
    return () => window.removeEventListener('scroll', showMenuBar);
  }, [pageHeight]);

  const menuElementsAnim = () => {
    tl.clear();
    tl.fromTo(menuListRef.current.children,
      {
        x: '-200',
        opacity: 0,
        rotate: '+=15',
      },
      {
        rotate: '0',
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.25,
        stagger: 0.15,
      })
      .fromTo(switchRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          delay: 1,
        });
  };

  const hoverMenuElAnim = (e, start) => {
    const test = tl2
      .set(e.target,
        {
          textShadow: '2px 1px 0 transparent, -2px -1px 0 transparent',
        })
      .to(e.target,
        {
          textShadow: '2px 1px 0 blue, -2px -1px 0 red',
          duration: 1,
          repeat: -1,
          yoyo: true,
        })
      .to(e.target,
        {
          textShadow: '2px 1px 0 red, -2px -1px 0 blue',
          duration: 1,
          repeat: -1,
          yoyo: true,
        })
      .to(e.target,
        {
          scale: '1.04',
          duration: 0.2,
          delay: -2,
        });
    if (start) test.play();
    else tl2.seek(0).pause().clear();
  };

  const handleClick = (e) => {
    const close = () => {
      setMenuOpen((prevState) => !prevState);
      setMenuBarWide(true);
      menuElementsAnim();
    };
    if (e.target.closest('#test')) {
      setTimeout(close, 300);
    } else {
      close();
    }
  };

  const handleMenuClick = (linkToTitle, path) => {
    history.push(path);
    gsap.to(window, { duration: 1, scrollTo: { y: `#${linkToTitle}`, offsetY: path === '/projects' ? 0 : -85 } });
  };

  return (
    <>
      <StyledBlend manuOpen={manuOpen} />
      <StyledListContainer
        manuOpen={manuOpen}
        onClick={(e) => handleClick(e)}

      >
        <StyledList
          ref={menuListRef}
        >
          {
            sectiontitles.map((sectiontitle) => (
              <StyledListElement
                onClick={() => handleMenuClick(sectiontitle.titleMenuId, sectiontitle.path)}
                onMouseOver={(e) => hoverMenuElAnim(e, true)}
                onMouseOut={(e) => hoverMenuElAnim(e, false)}
                key={sectiontitle.title}
              >
                {sectiontitle.title}
              </StyledListElement>
            ))
          }
        </StyledList>
        <Switch
          ref={switchRef}
        />
      </StyledListContainer>
      <Wrapper>
        <ThemeProvider theme={{ manuBarWide }}>
          <StyledContainer manuBarVisible={manuBarVisible}>
            <StyledTrianglesBox
              manuBarVisible={manuBarVisible}
              onMouseOver={() => setMenuBarWide(true)}
              onClick={handleClick}
            >
              <StyledMenuBack>
                <StyledButton manuOpen={manuOpen} />
              </StyledMenuBack>
              <StyledTriangleSmall />
              <StyledTriangleBig />
            </StyledTrianglesBox>
          </StyledContainer>
        </ThemeProvider>
      </Wrapper>
    </>
  );
};

Menu.propTypes = {

};

export default Menu;
