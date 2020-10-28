import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    width: 500px;
    height: 500px;
    z-index: -1;
    fill: transparent;
    stroke: ${({ theme }) => theme.color.primary};
    stroke-width: 65;
`;

const Triangle = React.forwardRef(({ className }, ref) => (
    <Svg ref={ref} className={className} viewBox="0 0 1000 893">
        <polygon points="500,100 900,793 100,793" />
    </Svg>
));

export default Triangle;