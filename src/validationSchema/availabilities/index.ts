import * as yup from 'yup';

export const availabilityValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  user_id: yup.string().nullable(),
});
