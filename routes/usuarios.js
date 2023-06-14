const { Router } = require("express");
const { check } = require("express-validator");


const {validarCampos} = require('../middlewares/validar-campos')
const {
  esRoleValido,
  emailExiste,
  usuarioExisteId,
} = require("../helpers/db-validators");

const {
  obtenerUsuarios,
  crearUsuarios,
  actualizarUsuarios,
  borrarUsuarios,
} = require("../controllers/usuarios");



const router = Router();

router.get("/", obtenerUsuarios);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(usuarioExisteId),
    validarCampos,
  ],
  actualizarUsuarios
);

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es valido").isEmail(),
    check("password", "La clave debe ser de mas de 6 caracteres").isLength({
      min: 6,
    }),
    check("rol").custom(esRoleValido),
    check("email").custom(emailExiste),
    validarCampos,
  ],
  crearUsuarios
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(usuarioExisteId),
    validarCampos
  ],
  borrarUsuarios
);

module.exports = router;
