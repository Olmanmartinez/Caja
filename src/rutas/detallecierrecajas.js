const { post, get, put, del, getPorId } = require("../controladores/detallecierrecajas")
const { validator } = require("../config/validator");
const { body,param } = require("express-validator");
const router = require("express").Router()

//c
router.post("/",
  body("idregistro").isInt(),
  body("idcierre").isInt().default(1),
  body("iddenominacion").isInt().default(1),
  body("cantidad").isInt().default(1),
  body("monto").isFloat().default(1),
  body("detalle_aperturacaja_idregistro").isInt().default(1) ,
  body("denominacionmonedas_idregistro").isInt().default(1),
  validator,
  post
)

//r
router.get("/", get)

router.get("/:id", 
  param("id").toInt(),
  validator,
  getPorId
)

//u
router.put("/:id",
  param("id").toInt(),
  body("idcierre").isInt(),
  body("iddenominacion").isInt(),
  body("cantidad").isInt(),
  body("monto").isFloat(),
  body("detalle_aperturacaja_idregistro").isInt(),
  body("denominacionmonedas_idregistro").isInt(),
  validator,
  put
)

//d
router.delete("/:id", 
  param("id").toInt(),
  validator,
  del
)


module.exports = router
