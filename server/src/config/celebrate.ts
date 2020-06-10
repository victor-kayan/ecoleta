import { celebrate, Joi } from 'celebrate';

const createPointValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    number: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().max(2),
    items: Joi.string().required(),
  })
}, {
  abortEarly: false
});

export { createPointValidation };