const Aeroporto = require("../models/aeroporto_models.js")
const cep_endereco = require("../middlewares/cep_endereco.js")


const store = (req, res) => {
    Aeroporto.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = Aeroporto.find().exec();
    res.json(content);
};

const show = (req, res) => {
    const content = Aeroporto;findById(req.params.id).exec();
    req.json(content);
}

const update = (req, res) => {
    Aeroporto.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
}

const destroy = (req, res) => {
    Aeroporto.findByIdAndDelete(req.params.id, req.body).exec();
    res.json();
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};