import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { breakpoint } from 'breakpoints';
import Switch from 'templates/Switch';
import MenuBar from 'components/molecules/MenuBar';

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
  const [manuOpen, setMenuOpen] = useState(false);
  const menuListRef = useRef(null);
  const switchRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (manuOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [manuOpen]);

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
      menuElementsAnim();
    };
    if (e.target.closest('#switch')) {
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
      <MenuBar
        handleClick={handleClick}
        manuOpen={manuOpen}
      />
    </>
  );
};

Menu.propTypes = {
  sectiontitles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
