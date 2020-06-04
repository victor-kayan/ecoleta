import express from 'express';

import knex from './database/connection';

const routes = express.Router();

routes.get('/itens', async (request, response) => {
  const itens = await knex('itens').select('*');

  const serverUrl = 'localhost:3333';
  const serializedItens = itens.map(item => {
    return {
      title: item.title,
      image_ur: `http://${serverUrl}/uploads/${item.image}`,
    }
  });

  return response.json(serializedItens);
});

export default routes;