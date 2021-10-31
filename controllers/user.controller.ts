import { Request, Response } from 'express'
import { json } from 'sequelize/types'
import User from '../models/user'

export const getUsers = async( req: Request, res: Response):Promise<Response> =>{

  const users = await User.findAll()

  return res.json( {users} )
}

export const getUser = async ( req: Request, res: Response):Promise<Response> =>{
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if(user) return res.status(200).json({user})
    else return res.status(400).json({msg:'No se encontro'})

  } catch (error) {
    return res.status(500).json({msg:'Hubo un problema'})
  }

}
export const postUser = async( req: Request, res: Response) =>{

  const { body } = req;
      
      const existeEmail = await User.findOne({
          where: {
              email: body.email
          }
      });

      if (existeEmail) {
          return res.status(400).json({
              msg: 'Ya existe un usuario con el email ' + body.email
          });
      }


      const usuario = User.create(body);

      res.json( usuario );
}

export const putUser = async( req: Request, res: Response) =>{

  const { id }   = req.params;
  const { body } = req;

  try {
      
      const usuario = await User.findByPk( id );
      if ( !usuario ) {
          return res.status(404).json({
              msg: 'No existe un usuario con el id ' + id
          });
      }

      await usuario.update( body );

      res.json( usuario );


  } catch (error) {

      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })    
  } 
}

export const deleteUser = async( req: Request, res: Response) =>{

  const { id } = req.params;

  const usuario = await User.findByPk( id );
  if ( !usuario ) {
      return res.status(404).json({
          msg: 'No existe un usuario con el id ' + id
      });
  }

  await usuario.update({ estado: false });

  // await usuario.destroy();


  res.json(usuario);
}