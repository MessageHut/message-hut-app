import { Request, Response, Router } from 'express'

const router = Router()

router.use('/hello', (_req: Request, res: Response) => {
  res.send('Hello world!')
})

export default router
