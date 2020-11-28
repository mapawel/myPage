import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import AppContext from 'Context';

const StyledSwitch = styled.div`
  display: none;
  align-self: flex-start;
  margin-bottom: 2rem;
  margin-left: 3rem;
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.S}) {
    display: flex;
    }
`;

const StyledSwitchBox = styled.div`
  width: 12rem;
  height: 6rem;
  padding: .8rem 1.5rem 1rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #00000035;
`;

const StyledGroove = styled.div`
  width: 4.6rem;
  height: 1.4rem;
  margin-right: .5rem;
  border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};
  box-shadow: ${({ theme }) => `inset 0 0 3px ${theme.color.textPrimary}`};
`;

const StyledKnob = styled.div`
position: relative;
  top: 2px;
  left: 2px;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.color.textPrimary};
  border-radius: 2px;
  transition: transform .2s;
  transform: ${({ grainVisible }) => (grainVisible ? 'translateX(32px)' : 'translateX(0)')};
`;

const StyledTxtBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.textPrimary};
  line-height: 2;
`;

const Switch = React.forwardRef((props, ref) => (
  <AppContext.Consumer>
    {
      ({ grainVisible, setGrainVisible }) => (
        <StyledSwitch
          ref={ref}
          id="switch"
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
        </StyledSwitch>

      )
    }
  </AppContext.Consumer>
));

export default Switch;
