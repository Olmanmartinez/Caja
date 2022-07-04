const { post, get, put, del, getPorId } = require("../controladores/monedas")
const { validator } = require("../config/validator");
const { body,param } = require("express-validator");

const router = require("express").Router()
//c
router.post("/", 
  body("idregistro").isInt(),
  body("nombre").isString(),
  body("descripcion").isString(),
  body("simbolo").isString(),
  body("cambio").isFloat(),
  body("nacional").isInt(),
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
  // nullable en caso de no recbir este campo no se actualiza dicho campo
  body("nombre").isString().optional({nullable:true}),
  body("descripcion").isString().optional({nullable:true}),
  body("simbolo").isString().optional({nullable:true}),
  body("cambio").isFloat().optional({nullable:true}),
  body("nacional").isInt().optional({nullable:true}),
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

