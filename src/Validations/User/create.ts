import { validate, Joi } from "express-validation";

export default validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    isAdm: Joi.boolean().required(),
  }),
});
