import { Request, Response, NextFunction } from 'express'
import z from 'zod'


const createUserV1Schema = z.object({
  username: z.string().min(2, 'Username is required'),
  email: z.string().email('Invalid email format'),
})

const createUserV2Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  surname: z.string().min(1, 'Surname is required'),
  email: z.string().email('Invalid email format'),
})

// 1. GET /v1/users
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
    const validation = createUserV1Schema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.error.flatten().fieldErrors,
      });
    }

    const { username, email } = validation.data;

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
    const validation = createUserV2Schema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.error.flatten().fieldErrors,
      });
    }

    const { name, surname, email } = validation.data;

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
