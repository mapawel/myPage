import React from 'react';
import styled, { keyframes } from 'styled-components';
// import PropTypes from 'prop-types';

const buttonShadowAnim = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`
const buttonAnim = keyframes`
0% {
  opacity: 1;
}
20% {
  opacity: 0.2;
}
40% {
  opacity: 0.7;
}
55% {
  opacity: 0.3;
}
70% {
  opacity: 0.85;
}
85% {
  opacity: 0.4;
}
100% {
  opacity: 1;
}
`

const StyledButton = styled.button`
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  border: ${({ theme }) => `2px solid ${theme.color.textPrimary}`};
  padding: 1.5rem 2rem;
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 1rem lime;
    opacity: 0;
  }
  &:hover{
    animation: ${buttonAnim} .5s;
    &::before{
      animation: ${buttonShadowAnim} .6s .2s both;
    }
  }
`;

const Button = ({ children, className, onClick, disabled, type }) => (
  <StyledButton className={className} onClick={onClick} disabled={disabled} type={type}>
    {children}
  </StyledButton>
);

// button.propTypes = {

// };

export default Button;
