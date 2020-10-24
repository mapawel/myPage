import React from 'react';
import GlobalStyle from 'themes/GlobalStyle';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import mainTheme from 'themes/mainTheme';
import ParticlesBck from 'templates/ParticlesBck';
import noise from 'assets/images/noise.png';

const moveGrain = keyframes`
  0% {transform: translate(0, 0)}
  10% {transform: translate(-5%, -10%)}
  20% {transform: translate(-15%, 5%)}
  30% {transform: translate(7%, -25%)}
  40% {transform: translate(-5%, 25%)}
  50% {transform: translate(-15%, 10%)}
  60% {transform: translate(15%, 0%)}
  70% {transform: translate(0%, 15%)}
  80% {transform: translate(3%, 35%)}
  90% {transform: translate(-10%, 10%)}
  100 {transform: translate(0, 0)}
`;

const Noise = styled.div`
  position: fixed;
  z-index: -1;
  animation: ${moveGrain} 8s steps(10) infinite;
  background-image: url(${noise});
  width: 300vw;
  height: 300vh;
  left: -50%;
  top: -100%;
  opacity: 0.0;
`;

const RootTemplate = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <ParticlesBck />
    <Noise />
    {children}
  </ThemeProvider>
);

export default RootTemplate;
