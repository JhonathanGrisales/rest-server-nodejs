const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    require: [true, "El correo es requerido"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "La contraseña es requerido"],
  },
  img: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    require: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado: {
    type: Boolean,
    require: true,
    default: true
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model('Usuario', UsuarioSchema)
