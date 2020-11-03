import * as Yup from 'yup';

export const validatorSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'too short')
    .max(30, 'too long')
    .required('this field is required'),
  mail: Yup.string().email()
    .required('this field is required'),
  category: Yup.string()
    .required('this field is required'),
  content: Yup.string()
    .min(8, 'too short...')
    .max(300, 'too long-max 300 letters')
    .required('this field is required'),
});
