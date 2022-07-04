const { post, get, put, del, getPorId } = require("../controladores/detallecierrecajaspos")
const { validator } = require("../config/validator");
const { body,param } = require("express-validator");

const router = require("express").Router()
//c
router.post("/", 
  body("idregistro").isInt(),
  body("idcierre").isInt(),
  body("idtipos").isInt(),
  body("devolucion").isFloat(),
  body("monto").isFloat(),
  body("cierrecaja_idregistro").isInt(),
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
  body("idtipos").isInt().optional({nullable:true}),
  body("devolucion").isFloat().optional({nullable:true}),
  body("monto").isFloat().optional({nullable:true}),
  body("cierrecaja_idregistro").isInt().optional({nullable:true}),
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
