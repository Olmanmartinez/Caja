const { post, get, put, del, getPorId } = require("../controladores/detallecierrecajas")

const router = require("express").Router()
//c
router.post("/", post)
//r
router.get("/", get)
router.get("/:id", getPorId)

//u
router.put("/:id", put)

//d
router.delete("/:id", del)


module.exports = router
