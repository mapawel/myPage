import styled, { keyframes } from 'styled-components';
import spinnerIcon from 'assets/icons/spinner.svg';

const rotateAnim = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Waiter = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  opacity: .7;
  animation: ${rotateAnim} 2s infinite linear;
  background-image: url(${spinnerIcon});
  background-size: cover;
`;
