import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/items', async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const items = await knex('items').select('*')
  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `${url}/uploads/${item.image}`,
    }
  })
  return res.json(serializedItems)
})

export default routes