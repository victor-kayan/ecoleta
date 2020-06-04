import express from 'express';

import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serverUrl = 'localhost:3333';
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_ur: `http://${serverUrl}/uploads/${item.image}`,
    }
  });

  return response.json(serializedItems);
});

routes.post('/point', async (request, response) => {
  const {
    // image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    number,
    city,
    uf,
    items
  } = request.body;

  const trx = await knex.transaction();

  const insertedIds = await trx('points').insert({
    image: 'fake-image...',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    number,
    city,
    uf
  });

  const point_id = insertedIds[0];
  const pointItems = items.map((item_id: number) => {
    return { item_id, point_id };
  });

  await trx('point_items').insert(pointItems);

  return response.json({ success: true });
});

export default routes;