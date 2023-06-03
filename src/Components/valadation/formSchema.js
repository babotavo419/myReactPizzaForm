import * as yup from 'yup';

const schema = yup.object().shape({
  Name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
});

export default schema;
