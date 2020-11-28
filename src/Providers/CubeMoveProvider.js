import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const CubeMoveProvider = ({ render, setInstructionVisible, startAnimation }) => {
  const [wallSize, setWallSize] = useState(220);
  const [startX, setStartX] = useState(0);
  const [veryStartX, setVeryStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rotateX, setRotateX] = useState(135);
  const [rotateY, setRotateY] = useState(-5);
  const [upSideDown, setUpSideDown] = useState(false);
  const [activeMove, setActiveMove] = useState(false);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    const choseWallSize = () => {
      if (window.innerWidth < 375) setWallSize(220);
      else if (window.innerWidth < 440) setWallSize(240);
      else if (window.innerWidth < 480) setWallSize(260);
      else if (window.innerWidth < 570) setWallSize(280);
      else if (window.innerWidth < 660) setWallSize(300);
      else if (window.innerWidth < 850) setWallSize(360);
      else if (window.innerWidth < 1250) setWallSize(500);
      else if (window.innerWidth < 2500) setWallSize(530);
      else setWallSize(580);
    };
    const debounced = debounce(choseWallSize, 300);
    window.addEventListener('resize', debounced);
    choseWallSize();
    return () => window.removeEventListener('resize', debounced);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 849) setRotateY(-10);
  }, []);

  useEffect(() => {
    const modY = rotateY % 360;
    if (modY >= -360 && modY < -270) {
      setUpSideDown(false);
    } else if (modY >= -270 && modY < -90) {
      setUpSideDown(true);
    } else if (modY >= -90 && modY < 90) {
      setUpSideDown(false);
    } else if (modY >= 90 && modY < 270) {
      setUpSideDown(true);
    } else if (modY >= 270 && modY < 360) {
      setUpSideDown(false);
    }
  }, [rotateY]);

  useEffect(() => {
    if (startAnimation) {
      setRotateX(45);
      if (window.innerWidth > 849) setRotateY(-27);
      else setRotateY(-15);
    }
  }, [startAnimation]);

  const move = (endX, endY) => {
    const yMove = (startY - endY);
    setRotateY((prevState) => prevState + yMove / 2);
    setMoveY(yMove);
    const modY = rotateY % 360;
    let moveX = 0;
    if (modY >= -360 && modY < -270) {
      moveX = (endX - startX);
    } else if (modY >= -270 && modY < -90) {
      moveX = (startX - endX);
    } else if (modY >= -90 && modY < 90) {
      moveX = (endX - startX);
    } else if (modY >= 90 && modY < 270) {
      moveX = (startX - endX);
    } else if (modY >= 270 && modY < 360) {
      moveX = (endX - startX);
    }
    setRotateX((prevState) => prevState + moveX / 2);
    setInstructionVisible(false);
  };

  const startTouch = (e) => {
    setActiveMove(true);
    setStartX(e.changedTouches[0].pageX);
    setStartY(e.changedTouches[0].pageY);
    setVeryStartX(e.changedTouches[0].pageX);
  };

  const start = (e) => {
    setActiveMove(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    setVeryStartX(e.clientX);
  };

  const stopTouch = (e) => {
    if (activeMove) {
      setActiveMove((prevState) => !prevState);
      move((e.changedTouches[0].pageX * 2 - veryStartX), (e.changedTouches[0].pageY + moveY));
    }
  };

  const stop = (e) => {
    if (activeMove) {
      setActiveMove((prevState) => !prevState);
      move((e.clientX * 2 - veryStartX), (e.clientY + moveY));
    }
  };

  const movingTouch = (e) => {
    if (activeMove) {
      setStartX(e.changedTouches[0].pageX);
      setStartY(e.changedTouches[0].pageY);
      setTimeout(() => move(e.changedTouches[0].pageX, e.changedTouches[0].pageY), 10);
      const interval = setInterval(setVeryStartX(e.changedTouches[0].pageX), 500);
      clearInterval(interval);
    }
  };

  const moving = (e) => {
    if (activeMove) {
      setStartX(e.clientX);
      setStartY(e.clientY);
      setTimeout(() => move(e.clientX, e.clientY), 10);
      const interval = setInterval(setVeryStartX(e.clientX), 500);
      clearInterval(interval);
    }
  };

  return (
    <>
      {render(upSideDown, start, stop, moving, startTouch, stopTouch, movingTouch, rotateX, rotateY, activeMove, wallSize)}
    </>
  );
};

CubeMoveProvider.propTypes = {
  render: PropTypes.func.isRequired,
  setInstructionVisible: PropTypes.func.isRequired,
  startAnimation: PropTypes.bool.isRequired,
};

export default CubeMoveProvider;
