/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import { inputMixin } from 'components/atoms/inputMixin';

const StyledInputContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 3rem;
`;

const StyledSelect = styled.select`
${inputMixin};
`;

const StyledInput = styled.input`
${inputMixin};
`;

const StyledTextArea = styled.textarea`
    ${inputMixin};
    min-height: 10rem;
    padding-top: 3rem;
    line-height: 1.4;
    &:focus ~label, &:not(:placeholder-shown) ~label {
        transform: scale(.6) translate(-40%, 0);
        top: 5px;
    }
`;

const StyledLabel = styled.label`
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translate(0, -50%);
    color: ${({ theme }) => theme.color.particles};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: .05rem;
    font-style: italic;
    transition: .3s;
`;

const StyledOption = styled.option`
    color: ${({ theme }) => theme.color.textPrimary};
    background-color: ${({ theme }) => theme.color.back};
`;

const StyledInputHeader = styled(Paragraph)`
    margin-left: .5rem;
    margin-bottom: .5rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: .05rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.textSecondary};
    text-transform: uppercase;
`;

const Input = ({
  select, textarea, id, onChange, value, labelTxt, children, className, name, headerTxt, ...props
}) => {
  let Tag = select ? StyledSelect : StyledInput;
  Tag = textarea ? StyledTextArea : Tag;
  const options = select ? select.map((sel) => <StyledOption key={sel} value={sel[0]}>{sel[1]}</StyledOption>) : null;

  return (
    <>
      <StyledInputHeader>
        {headerTxt}
      </StyledInputHeader>
      <StyledInputContainer>
        <Tag
          key={id}
          name={name}
          type="text"
          id={id}
          placeholder=" "
          autoComplete="none"
          onChange={onChange}
          value={value}
          {...props}
        >
          {select && options}
        </Tag>
        <StyledLabel
          htmlFor={id}
        >
          {labelTxt}
        </StyledLabel>
        {children}
      </StyledInputContainer>
    </>
  );
};

Input.propTypes = {
  select: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  textarea: PropTypes.oneOf([1]),
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  labelTxt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  headerTxt: PropTypes.string,
};

Input.defaultProps = {
  select: null,
  textarea: null,
  value: undefined,
  labelTxt: null,
  children: null,
  headerTxt: null,
};

export default Input;
