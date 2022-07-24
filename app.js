import express from 'express'
import bodyParser from 'body-parser'
import _ from 'lodash'
import { Posts } from './models/postModel.js'
import router from './routes.js'
import './models/db.js'

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.set('view engine', 'ejs')

app.locals._ = _

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
