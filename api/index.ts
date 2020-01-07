import express from 'express'
import cors from 'cors'

const app = express()
const port = 1337

app.use(cors())

app.get('/', (req, res) => res.send({ message: 'api is up and running!' }))

app.listen(port, () => console.log('api listening on port ' + port))
