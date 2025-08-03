module.exports = (sequelize, Sequelize) => {
  return sequelize.define("cliente", {
    nombre: Sequelize.STRING,
    correo: Sequelize.STRING,
    telefono: Sequelize.STRING
  });
};
