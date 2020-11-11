import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import PropTypes from 'prop-types';

const StyledSwitch = styled.div`
  display: none;
  z-index: 100;
  position: fixed;
  height: 0;
  left: 0;
  bottom: 6rem;
  transition: transform .3s;
  transform: ${({ switchVisible }) => (switchVisible ? 'translateX(0)' : 'translateX(-9rem)')};
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.S}) {
    display: flex;
    }
`;

const StyledSwitchArrow = styled.div`
  width: 0; 
  height: 0;
  border-top: 3rem solid transparent;
  border-bottom: 3rem solid transparent; 
  border-left: 4rem solid #000000; 
  opacity: .4;
`;

const StyledSwitchBox = styled.div`
  width: 8rem;
  height: 6rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: .4;
`;

const StyledGroove = styled.div`
  width: 1.4rem;
  height: 3.6rem;
  margin-right: .5rem;
  border: 1px solid lime;
  box-shadow: inset 0 0 5px lime;
`;

const StyledKnob = styled.div`
position: relative;
  top: 2px;
  left: 2px;
  width: 0.8rem;
  height: 0.8rem;
  background-color: lime;
  border-radius: 2px;
  transition: transform .2s;
  transform: ${({ grainVisible }) => (grainVisible ? 'translateY(22px)' : 'translateY(0)')};
`;

const StyledTxtBox = styled.div`
  width: 6rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledP = styled.div`
  font-size: 12px;
  color: lime;
  line-height: 2;
`;

const Switch = ({ grainVisible, setGrainVisible }) => {
  const [switchVisible, setSwitchVisible] = useState(false);
  return (
    <StyledSwitch
      switchVisible={switchVisible}
      onMouseOver={() => setSwitchVisible(true)}
      onMouseLeave={() => setSwitchVisible(false)}
      onClick={() => setGrainVisible((prevState) => !prevState)}
    >
      <StyledSwitchBox>
        <StyledTxtBox>
          <StyledP>clean</StyledP>
          <StyledP>grain</StyledP>
        </StyledTxtBox>
        <StyledGroove>
          <StyledKnob grainVisible={grainVisible} />
        </StyledGroove>
      </StyledSwitchBox>
      <StyledSwitchArrow />
    </StyledSwitch>
  );
};

Switch.propTypes = {
  grainVisible: PropTypes.bool.isRequired,
  setGrainVisible: PropTypes.func.isRequired,
};

export default Switch;
