const express = require("express");
const router = express.Router()
const cep_endereco = require("../middlewares/cep_endereco.js")

const aeroporto_controller = require("../controller/aeroporto_controller.js");

router.post("/", aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)
router.post("/", cep_endereco, (req, res) => {
    const code = aeroporto_controller.store(req.body)
    res.status(code).json()
})
router.put("/:id", cep_endereco, (req, res) => {
    const code = aeroporto_controller.update(req.body, req.params.id)
    res.status(code).json()
})
router.put("/:id", aeroporto_controller.update)
router.delete("/:id", aeroporto_controller.destroy)

module.exports = router