import * as yup from 'yup';

const schema = yup.object().shape({
    Name: yup
      .string()
      .required(['name is required'])
      .min(2, ['name must be at least 2 characters']),
  });
  

export default schema;