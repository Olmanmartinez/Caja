const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
//c
exports.post = async (req, res) => {
  try {
    const data = await prisma.detalle_aperturacaja.create({
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
    const data = await prisma.detalle_aperturacaja.findUnique({
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
    const data = await prisma.detalle_aperturacaja.findMany()
    const model = await prisma.$queryRaw`desc detalle_aperturacaja`
    res.json({ data,info:{
      msg:"esta ruta soporta el metodo post para el cual se espera los siguirntes datos:",
      model
    } })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

//u
exports.put = async (req, res) => {
  const idregistro = req.params.id
  try {
    const data = await prisma.detalle_aperturacaja.update({
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
    const data = await prisma.detalle_aperturacaja.delete({
      where:{
        idregistro
      }
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}
