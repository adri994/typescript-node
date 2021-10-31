import { Router } from 'express'
import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/user.controller'

const router:Router = Router()

router
  .get('/',       getUsers)
  .get('/:id',    getUser)
  .post('/',      postUser)
  .put('/:id',    putUser)
  .delete('/:id', deleteUser)

export default router