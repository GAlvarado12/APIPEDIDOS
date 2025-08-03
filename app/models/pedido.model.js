module.exports = (sequelize, Sequelize) => {
  return sequelize.define("pedido", {
    fecha: Sequelize.DATE,
    total: Sequelize.DECIMAL
  });
};
