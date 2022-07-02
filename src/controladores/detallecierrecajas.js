const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
//c
exports.post = async (req, res) => {
  try {
    const data = await prisma.detalle_cierrecaja.create({
      data: req.body
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }

}
//r
exports.getPorId = async (req, res) => {
  const idregistro = req.params.id
  try {
    const data = await prisma.detalle_cierrecaja.findUnique({
      where: {
        idregistro
      }
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}
exports.get = async (_req, res) => {
  try {
    const data = await prisma.detalle_cierrecaja.findMany()
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

//u
exports.put = async (req, res) => {
  const idregistro = req.params.id
  try {
    const data = await prisma.detalle_cierrecaja.update({
      data: req.body,
      where: {
        idregistro
      }
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

//d
exports.del = async (req, res) => {
  const idregistro = req.params.id
  try {
    const data = await prisma.detalle_cierrecaja.delete({
      where:{
        idregistro
      }
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

