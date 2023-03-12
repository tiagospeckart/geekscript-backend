import { validate, Joi } from 'express-validation';

export default validate({
  body: Joi.object({
    purchaseIdList: Joi.array().required(),
    purchaseTotal: Joi.number().strict().required(),
    discountName: Joi.string()
  }),
});
