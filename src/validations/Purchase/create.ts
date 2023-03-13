import { validate, Joi } from 'express-validation';

export default validate({
  body: Joi.object({
    user_id: Joi.number().strict().required(),
    total: Joi.number().strict().required(),
  }),
});
