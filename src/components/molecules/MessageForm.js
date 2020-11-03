import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Formik, ErrorMessage } from 'formik';
import { validatorSchema } from 'validators/validatorSchema';

// import PropTypes from 'prop-types';

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
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

const MessageForm = ({ togglePopup }) => (

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
      (values, { setSubmitting, resetForm  }) => {
        // wynkjawysylajaca(values);
        console.log(values)
        togglePopup();
        resetForm();
        
        setTimeout(() => {
          setSubmitting(false);
        }, 200);
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
            labelTxt="or company..."
            headerTxt="name"
          >
            <ErrorMessage component={StyledError} name="name" />
          </Input>
          <Input
            name="mail"
            id="mail"
            onChange={handleChange}
            value={values.mail}
            labelTxt="example@example.com"
            headerTxt="e-mail"
          >
            <ErrorMessage component={StyledError} name="mail" />
          </Input>
          <Input
            name="category"
            id="category"
            onChange={handleChange}
            value={values.category}
            labelTxt="choose one..."
            headerTxt="category"
            select={[['---', '---'], ['cooperation', 'cooperation'], ['opinion', 'opinion']]}
          >
            <ErrorMessage component={StyledError} name="category" />
          </Input>
          <Input
            name="content"
            id="content"
            onChange={handleChange}
            value={values.content}
            labelTxt="your message..."
            headerTxt="contents"
            textarea
          >
            <ErrorMessage component={StyledError} name="content" />
          </Input>
          <StyledButtonBox>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              send

          </Button>
            <Button onClick={resetForm}>clear</Button>
          </StyledButtonBox>
        </StyledForm>

      )}
  </Formik>

);

// MessageForm.propTypes = {

// };

export default MessageForm;
