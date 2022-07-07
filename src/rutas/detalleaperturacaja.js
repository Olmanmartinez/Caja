const { post, get, put, del, getPorId } = require("../controladores/detalleaperturacaja")
const { validator } = require("../config/validator");
const { body, param } = require("express-validator");
const router = require("express").Router()

//c
router.post("/",
  body("idregistro").isInt(),
  body("idapertura").isInt(),
  body("iddenominacion").isInt(),
  body("cantidad").isInt(),
  body("monto").isFloat(),
  body("aperturacaja_idregistro").isInt(),
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
  body("idapertura").isInt().optional({ nullable: true }),
  body("iddenominacion").isInt().optional({ nullable: true }),
  body("cantidad").isInt().optional({ nullable: true }),
  body("monto").isFloat().optional({ nullable: true }),
  body("aperturacaja_idregistro").isInt().optional({ nullable: true }),

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
