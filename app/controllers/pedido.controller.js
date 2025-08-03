const db = require("../models");
const Pedido = db.pedidos;

exports.create = async (req, res) => {
  try {
    const data = await Pedido.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Pedido.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Pedido.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const num = await Pedido.update(req.body, { where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Actualizado" : "No se encontró el pedido" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const num = await Pedido.destroy({ where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Eliminado" : "No se encontró el pedido" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
