const db = require("../models");
const Cliente = db.clientes;

exports.create = async (req, res) => {
  try {
    const data = await Cliente.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Cliente.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Cliente.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const num = await Cliente.update(req.body, { where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Actualizado" : "No se encontró el cliente" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const num = await Cliente.destroy({ where: { id: req.params.id } });
    res.send({ message: num == 1 ? "Eliminado" : "No se encontró el cliente" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
