import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Formik, ErrorMessage } from 'formik';
import { validatorSchema } from 'validators/validatorSchema';
import { sendMail } from 'actions/sendmail';
import SentMailPopUp from 'components/organisms/SentMailPopUp';
import spinnerIcon from 'assets/icons/spinner.svg';

// import PropTypes from 'prop-types';
const spin = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

const StyledSubmitButton = styled(Button)`
${({ disabled }) => disabled && css`
position: relative;
    ::after{
      content: '';
      position: absolute;
      top: 0;
      right: -6rem;
      width: 4rem;
      height: 4rem;
      background-image: url('${spinnerIcon}');
      animation: ${spin} 2s infinite linear;
    }
`}
`;

const StyledForm = styled.form`
  margin-bottom: 7rem;
`;

const StyledError = styled.p`
  position: absolute;
  width: 100%;
  bottom: -2rem;
  left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  color: ${({ theme }) => theme.color.textSecondary};
  text-decoration: underline;
`;

const MessageForm = ({ data }) => {
  const [sentMailStatus, setSentMailStatus] = useState(0);
  const handleSentMailFeedback = (status) => {
    setSentMailStatus(status);
  };
  return (
    <>
      <Formik
        initialValues={
          {
            name: '',
            mail: '',
            category: '',
            content: '',
          }
        }
        validationSchema={validatorSchema}
        onSubmit={
          async (values, { setSubmitting, resetForm }) => {
            await sendMail(values, handleSentMailFeedback);
            resetForm();
            setSubmitting(false);
          }
        }
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => (

            <StyledForm
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                name="name"
                id="name"
                onChange={handleChange}
                value={values.name}
                labelTxt={data && data.placeholder1}
                headerTxt={data && data.title1}
              >
                <ErrorMessage component={StyledError} name="name" />
              </Input>
              <Input
                name="mail"
                id="mail"
                onChange={handleChange}
                value={values.mail}
                labelTxt={data && data.placeholder2}
                headerTxt={data && data.title2}
              >
                <ErrorMessage component={StyledError} name="mail" />
              </Input>
              <Input
                name="category"
                id="category"
                onChange={handleChange}
                value={values.category}
                headerTxt={data && data.title3}
                select={data && [['---', '---'], ...data.placeholder3.map((category) => [category, category])]}
              >
                <ErrorMessage component={StyledError} name="category" />
              </Input>
              <Input
                name="content"
                id="content"
                onChange={handleChange}
                value={values.content}
                labelTxt={data && data.placeholder4}
                headerTxt={data && data.title4}
                textarea={1}
              >
                <ErrorMessage component={StyledError} name="content" />
              </Input>
              <StyledButtonBox>
                <StyledSubmitButton
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  send

              </StyledSubmitButton>
                <Button onClick={resetForm}>clear</Button>
              </StyledButtonBox>
            </StyledForm>

          )}
      </Formik>
      {(sentMailStatus !== 0) ? <SentMailPopUp togglePopup={handleSentMailFeedback} sentStatus={sentMailStatus} /> : null}
    </>

  );
};

// MessageForm.propTypes = {

// };

export default MessageForm;
