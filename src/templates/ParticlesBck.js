/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Particles from 'particlesjs';
import { withTheme } from 'styled-components';

const ParticlesBck = ({ theme }) => {
  useEffect(() => {
    const particles = () => {
      Particles.init({
        selector: '.background',
        speed: 0.3,
        color: theme.color.particles,
        connectParticles: true,
        maxParticles: 55,
        sizeVariations: 2,
        minDistance: 130,
        responsive: [
          {
            breakpoint: 400,
            options: {
              maxParticles: 15,
            },
          },
          {
            breakpoint: 576,
            options: {
              maxParticles: 20,
            },
          },
          {
            breakpoint: 768,
            options: {
              maxParticles: 30,
            },
          },
          {
            breakpoint: 992,
            options: {
              maxParticles: 35,
            },
          },
          {
            breakpoint: 1200,
            options: {
              maxParticles: 45,
            },
          },
        ],
      });
    };
    window.addEventListener('load', () => { particles(); particles(); });
  });

  return (
    <canvas className="background" />
  );
};

ParticlesBck.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(ParticlesBck);
