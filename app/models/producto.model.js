module.exports = (sequelize, Sequelize) => {
  return sequelize.define("producto", {
    nombre: Sequelize.STRING,
    precio: Sequelize.DECIMAL,
    stock: Sequelize.INTEGER
  });
};
