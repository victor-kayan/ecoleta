import { Request, Response } from 'express';

import knex from '../database/connection';
import serializeImageUrl from '../utils/serializeImageUrl';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = serializeImageUrl(items, 'image');

    return response.json(serializedItems);
  }
}

export default ItemsController;