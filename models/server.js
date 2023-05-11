const express = require("express");
const cors = require("cors");

const {dbConnection} =  require('../database/config')

class Server {
  //Constructor
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath= '/api/usuarios'
    this.conectarDb();

    //Conectar a DB

    //Middlewares
    this.middlewares();

    //Routs app
    this.routes();
  }

  //Métodos
  
  async conectarDb (){
    await dbConnection()
  }

  middlewares() {
    this.app.use(express.static("public")); //Directory public
    this.app.use(cors());
    this.app.use(express.json()) //Parsear json
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Run in port ${this.port}`);
    });
  }
}

module.exports = Server;
