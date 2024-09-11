const Moto = require("../models/moto_models.js")

const store = (req, res) => {
    Moto.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = Moto.find().exec();
    res.json(content);
};

const show = (req, res) => {
    const content = Moto;findById(req.params.id).exec();
    req.json(content);
}

const update = (req, res) => {
    Moto.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
}

const destroy = (req, res) => {
    Moto.findByIdAndDelete(req.params.id, req.body).exec();
    res.json();
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};