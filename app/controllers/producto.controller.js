const db = require("../models");
const Producto = db.productos;

exports.create = async (req, res) => {
  try {
    const data = await Producto.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Producto.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Producto.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const num = await Producto.update(req.body, { where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Actualizado" : "No se encontró el producto" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const num = await Producto.destroy({ where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Eliminado" : "No se encontró el producto" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
