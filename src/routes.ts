import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/items', async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const items = await knex('items').select('*')
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `${url}/uploads/${item.image}`,
    }
  })
  return res.json(serializedItems)
})

routes.post('/points', async (req, res) => {
  // ¯\_(ツ)_ /¯
  if (!req.headers["content-type"]?.includes('application/json')) {
    return res.status(400)
      .json({ success: false, details: 'Content-Type must be JSON.' })
  }
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = req.body
  const trx = await knex.transaction()
  try {
    const insertedIds = await trx('points').insert({
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    })
    const point_id = insertedIds[0]
    const pointItems = items.map((item_id: number) => {
      return { item_id, point_id, }
    })
    await trx('point_items').insert(pointItems)
    await trx.commit()
  } catch (e) {
    await trx.rollback()
    return res.status(500).json({ success: false, details: e.message })
  }
  return res.json({ success: true })
})

export default routes