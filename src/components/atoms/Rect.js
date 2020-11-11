import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
    width: 500px;
    height: 500px;
    z-index: -1;
    fill: transparent;
    stroke: ${({ theme }) => theme.color.primary};
    stroke-width: 90;
`;

const Rect = React.forwardRef(({ className }, ref) => (
  <Svg ref={ref} className={className} viewBox="0 0 500 500">
    <rect width="500" height="500" />
  </Svg>
));

Rect.propTypes = {
  className: PropTypes.string,
};

Rect.defaultProps = {
  className: null,
};

export default Rect;
