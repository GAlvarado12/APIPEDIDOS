module.exports = (sequelize, Sequelize) => {
  return sequelize.define("detalle_pedido", {
    cantidad: Sequelize.INTEGER,
    subtotal: Sequelize.DECIMAL
  });
};
