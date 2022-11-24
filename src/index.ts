import 'dotenv/config'
import express, { Request, Response, Application } from 'express'
import routes from './routes'
import cors from 'cors'

const app: Application = express()

app.use(express.json())

app.use(
  cors({
    origin: [String(process.env.REACT_ENV)],
    methods: 'GET',
    credentials: true
  })
)

// v1 routes
app.use('/api/v1', routes)

app.use('/', (req: Request, res: Response) => {
  res.send({
    Application: 'Node API',
    Version: 'beta'
  })
})

// not found
app.use(function (req: Request, res: Response, next: any) {
  const err = new Error('Not Found')
  res.status(404)
  next(err)
})

// catch all
app.use((error: any, req: Request, res: Response) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.listen(process.env.PORT, () => {
  const dtNow = new Date()
  console.log('--------------------------------------')
  console.log(`    Server running:${dtNow.getHours()}:${dtNow.getMinutes()}:${dtNow.getSeconds()}    `)
  console.log(`    ENV:${process.env.NODE_ENV ?? ''} PORT:${process.env.PORT ?? ''}`)
  console.log('--------------------------------------')
})
