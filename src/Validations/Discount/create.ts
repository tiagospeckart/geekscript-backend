import { validate, Joi } from 'express-validation';

export default validate({
  body: Joi.object({
    coupon_name: Joi.string().required(),
    discount_value: Joi.number().strict().required(),
  }),
});
