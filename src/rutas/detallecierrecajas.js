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
  body("idcierre").isInt().optional({nullable:true}),
  body("iddenominacion").isInt().optional({nullable:true}),
  body("cantidad").isInt().optional({nullable:true}),
  body("monto").isFloat().optional({nullable:true}),
  body("detalle_aperturacaja_idregistro").isInt().optional({nullable:true}),
  body("denominacionmonedas_idregistro").isInt().optional({nullable:true}),
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
