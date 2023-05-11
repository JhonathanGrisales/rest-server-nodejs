const Role = require('../models/role')
const Usuario = require('../models/usuario')


const esRoleValido = async (rol = "") => {
    const existRol = await Role.findOne({ rol });
    if (!existRol) {
      throw new Error(`El rol ${rol} no esta emn la base de datos`)
    }
  }



const emailExiste = async (email) => {
  const user = await Usuario.findOne({ email });
  if (user) {
    throw new Error(`El email ${email} ya existe`)
  }
};


const usuarioExisteId = async (id) => {
    const existeUsuario = await Usuario.findById( id );
    if (!existeUsuario) {
      throw new Error(`El usuario con id ${id} no existe`)
    }
  };

  


  module.exports ={
    esRoleValido,
    emailExiste,
    usuarioExisteId
  }