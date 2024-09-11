const Refrigerante = require("../models/refrigerante_models.js")

const store = (req, res) => {
    Refrigerante.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = Refrigerante.find().exec();
    res.json(content);
};

const show = (req, res) => {
    const content = Refrigerante;findById(req.params.id).exec();
    req.json(content);
}

const update = (req, res) => {
    Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
}

const destroy = (req, res) => {
    Refrigerante.findByIdAndDelete(req.params.id, req.body).exec();
    res.json();
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};