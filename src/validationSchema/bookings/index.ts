import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  session_time: yup.date().required(),
  end_customer_id: yup.string().nullable(),
  practitioner_id: yup.string().nullable(),
});
