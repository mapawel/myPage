import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Triangle from 'components/atoms/Triangle';
import Rect from 'components/atoms/Rect';
// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 10rem;
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 1.5;
  margin: ${({ theme }) => `${theme.fontSize.s} 0`};
`;

const StyledRect = styled(Rect)`
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  top: 0;
  left: 0;
  transform: rotate(5deg);
  fill: ${({ theme }) => theme.color.primaryOpacity};
`;

const TextBox = ({ rect, triangle, data = {title: '', content: []} }) => {
  return (
    <StyledContainer>
      <Heading big>{data.title.toUpperCase()}</Heading>
      {data.content.map((content, index) => (
        <StyledText key={index}>{content}</StyledText>
      ))}
      {/* {rect && <StyledRect />} */}
      {triangle && <Triangle />}
    </StyledContainer>
  );
};


// TextBox.propTypes = {

// };


export default TextBox;
