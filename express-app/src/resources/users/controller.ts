import { Request, Response, NextFunction } from 'express'


// 1. GET /v1/users -> Mevcut dummy data mantığı
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = [{ id: 1, username: 'muge123', email: 'muge@example.com' },
      { id: 2, username: 'johndoe', email: 'johndoe@gmail.com' },
    ]
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}


// 2. POST /v1/users -> username ve email bekler
const createV1 = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email } = req.body || {}

    if (!username || !email) {
      return res.status(400).json({ error: 'Username and email are required' })
    }

    const newUser = {
      username,
      email,
      createdAt: new Date().toISOString(),
    }

    return res.status(201).json({ data: newUser })
  } catch (error) {
    next(error)
  }
}


// 3. POST /v2/users -> name, surname ve email bekler
const createV2 = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, surname, email } = req.body || {}

    if (!name || !surname || !email) {
      return res.status(400).json({ error: 'Name, surname and email are required' })
    }

    const newUserV2 = {
      name,
      surname,
      email,
      createdAt: new Date().toISOString(),
    }

    return res.status(201).json({ data: newUserV2 })
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  createV1,
  createV2,
}
