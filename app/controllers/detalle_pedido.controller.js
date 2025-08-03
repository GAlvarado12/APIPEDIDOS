const db = require("../models");
const Detalle = db.detalle_pedidos;

exports.create = async (req, res) => {
  try {
    const data = await Detalle.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Detalle.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Detalle.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const num = await Detalle.update(req.body, { where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Actualizado" : "No se encontró el detalle" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const num = await Detalle.destroy({ where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Eliminado" : "No se encontró el detalle" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
