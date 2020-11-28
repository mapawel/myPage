/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from 'templates/Wrapper';

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

const MenuBar = ({ handleClick, manuOpen }) => {
  const [pageHeight, setPageHeight] = useState(600);
  const [manuBarVisible, setMenuBarVisible] = useState(false);
  const [manuBarWide, setMenuBarWide] = useState(true);

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

  return (
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
  );
};

MenuBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  manuOpen: PropTypes.bool.isRequired,
};

export default MenuBar;
