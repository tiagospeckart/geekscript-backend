import { validate, Joi } from 'express-validation';

export default validate({
  body: Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().required(),
    price: Joi.number().strict().required(),
    description: Joi.string().required(),
    category_id: Joi.number().strict().required(),
  }),
});
