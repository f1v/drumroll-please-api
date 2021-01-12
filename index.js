const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const db = require('./models/index')
const cors = require('cors')
const {
  Loop,
  Module
} = db
const bodyParser = require('body-parser').json()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Drumroll Please . . . ')
})

app.get('/modules', async (req, res) => {
  const modules = await Module.findAll()
  console.log(modules)
  res.send(modules)
})

app.get('/modules/:id', async (req, res) => {
  const { id } = req.params
  const module = await Module.findByPk(id)
  res.send(module)
})

app.post('/modules', bodyParser, async (req, res) => {
  const {
    name,
    instrument,
    volume,
    beat_1_1,
    beat_1_2,
    beat_1_3,
    beat_1_4,
    beat_2_1,
    beat_2_2,
    beat_2_3,
    beat_2_4,
    beat_3_1,
    beat_3_2,
    beat_3_3,
    beat_3_4,
    beat_4_1,
    beat_4_2,
    beat_4_3,
    beat_4_4,
    effects,
    loopId,
  } = req.body

  console.log(req.body)

  const module = await Module.create({
    name,
    instrument,
    volume,
    beat_1_1,
    beat_1_2,
    beat_1_3,
    beat_1_4,
    beat_2_1,
    beat_2_2,
    beat_2_3,
    beat_2_4,
    beat_3_1,
    beat_3_2,
    beat_3_3,
    beat_3_4,
    beat_4_1,
    beat_4_2,
    beat_4_3,
    beat_4_4,
    effects,
    loopId,
  })
  res.send(module)

})

app.put('/modules/:id', bodyParser, async (req, res) => {
  const {
    name,
    instrument,
    volume,
    beat_1_1,
    beat_1_2,
    beat_1_3,
    beat_1_4,
    beat_2_1,
    beat_2_2,
    beat_2_3,
    beat_2_4,
    beat_3_1,
    beat_3_2,
    beat_3_3,
    beat_3_4,
    beat_4_1,
    beat_4_2,
    beat_4_3,
    beat_4_4,
    effects,
    loopId,
  } = req.body

  const { id } = req.params

  const module = await Module.findByPk(id)

  const updatedModule = await module.update({
    name,
    instrument,
    volume,
    beat_1_1,
    beat_1_2,
    beat_1_3,
    beat_1_4,
    beat_2_1,
    beat_2_2,
    beat_2_3,
    beat_2_4,
    beat_3_1,
    beat_3_2,
    beat_3_3,
    beat_3_4,
    beat_4_1,
    beat_4_2,
    beat_4_3,
    beat_4_4,
    effects,
    loopId,
  })
  res.send(updatedModule)
})

app.delete('/modules/:id', async (req, res) => {
  const { id } = req.params
  const module = await Module.findByPk(id)
  await module.destroy()
  res.send(`module ${id} deleted`)
})

app.post('/loops', bodyParser, async (req, res) => {
  const {
    name,
  } = req.body
  console.log({ name })
  const loop = await Loop.create({
    name,
  })
  res.send(loop)
})

app.put('/loops/:id', bodyParser, async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const loop = await Loop.findByPk(id)
  const updatedLoop = await loop.update({ name })
  res.send(200)
})

app.delete('/loops/:id', bodyParser, async (req, res) => {
  const { id } = req.params
  const loop = await Loop.findByPk(id)
  await loop.destroy()
  res.send(`module ${id} deleted`)
})

app.get('/loops', async (req, res) => {
  const loops = await Loop.findAll()
  res.send(loops)
})

app.get('/loops/:id', async (req, res) => {
  const { id } = req.params
  const loop = await Loop.findByPk(id)
  const modules = await loop.getModules()
  res.send({
    ...loop.dataValues,
    modules,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})