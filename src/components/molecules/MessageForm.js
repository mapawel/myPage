import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
// import PropTypes from 'prop-types';

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  margin-bottom: 7rem;
`;

const MessageForm = () => (
  <StyledForm
    onSubmit={(e) => e.preventDefault()}
    >
    <Input
    name="name"
    id="name"
    labelTxt="or company..."
    headerTxt="name"
    />
    <Input
    name="mail"
    id="mail"
    labelTxt="example@example.com"
    headerTxt="e-mail"
    />
    <Input
    name="category"
    id="category"
    labelTxt="choose one..."
    headerTxt="category"
    select={[['---', '---'], ['cooperation', 'cooperation'], ['opinion', 'opinion']]}
    />
    <Input
    name="content"
    id="content"
    labelTxt="your message..."
    headerTxt="contents"
    textarea
    />
    <StyledButtonBox>
    <Button>send</Button>
    <Button>clear</Button>
    </StyledButtonBox>
  </StyledForm>

);

// MessageForm.propTypes = {

// };

export default MessageForm;
