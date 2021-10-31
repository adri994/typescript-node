import express,{Application} from 'express';
import router from '../routers/user.router';
import cors from 'cors'
import db from '../db/connect';

class Server {
  private app:Application;
  private port: string;
  private apiPaths = {
    users: '/api/user'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbConnect()
    this.middleware()
    this.router()
  }

  async dbConnect() {

    try {
      await db.authenticate()
      console.log('Conexion')
    } catch (error) {
      throw new Error( 'No se conecto' )
    }
  }
  middleware() {
    this.app.use( cors() )
    this.app.use( express.json() )
  }

  router() {
    this.app.use( this.apiPaths.users, router );
  }

  listen() {
    this.app.listen( this.port, ()=>{
      console.log(`Servidor corriendo en el puerto!! ${this.port}`)
    })
  }
}

export default Server