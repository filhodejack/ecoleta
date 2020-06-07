import { Request, Response } from 'express'
import knex from '../database/connection'
import Knex from 'knex'

class PointsController {
  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()))
    
    let points: Knex

    if (!city && !uf && !items) {
      points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .distinct()
        .select('points.*')
    } else {
      points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*')
    }

    return res.json(points)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const point = await knex('points').where('id', id).first()

    if (!point) {
      return res.status(400).json({ message: 'Point not found' })
    }

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)

    return res.json({ point, items })
  }

  async create(req: Request, res: Response) {
    const contentTypeIsJson = req.headers["content-type"]?.includes('json')

    if (!contentTypeIsJson) {
      return res.status(400).json({
        success: false,
        details: 'Content-Type must be JSON.'
      })
    }

    const {
      name,
      email,
      whatsapp,
      lat,
      long,
      city,
      uf,
      items,
    } = req.body

    const trx = await knex.transaction()

    try {
      const point = {
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        name,
        email,
        whatsapp,
        lat,
        long,
        city,
        uf,
      }
      const insertedIds = await trx('points').insert(point)
      const point_id = insertedIds[0]
      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id,
        }
      })

      await trx('point_items').insert(pointItems)
      await trx.commit()

      return res.json({
        id: point_id,
        ...point,
        items: pointItems
      })
    } catch (e) {
      await trx.rollback()

      return res.status(500).json({ success: false, details: e.message })
    }
  }
}

export default PointsController