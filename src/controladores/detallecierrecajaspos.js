const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
//c
exports.post = async (req, res) => {
  try {
    const data = await prisma.detallecierrecajapos.create({
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
    const data = await prisma.detallecierrecajapos.findUnique({
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
    const data = await prisma.detallecierrecajapos.findMany()
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

//u
exports.put = async (req, res) => {
  const idregistro = req.params.id
  try {
    const data = await prisma.detallecierrecajapos.update({
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
    const data = await prisma.detallecierrecajapos.delete({
      where:{
        idregistro
      }
    })
    res.json({ data })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

