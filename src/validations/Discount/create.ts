import { validate, Joi } from 'express-validation';

export default validate({
  body: Joi.object({
    name: Joi.string().required(),
    value: Joi.number().strict().required(),
  }),
});
