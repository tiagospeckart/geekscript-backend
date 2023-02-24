import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().required(),
    category_id: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().required()
  }),
});