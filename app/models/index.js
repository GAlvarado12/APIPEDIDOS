const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // importante para evitar problemas de certificado
    }
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.productos = require("./producto.model.js")(sequelize, Sequelize);
db.pedidos = require("./pedido.model.js")(sequelize, Sequelize);
db.detalle_pedidos = require("./detalle_pedido.model.js")(sequelize, Sequelize);

// Relaciones
db.clientes.hasMany(db.pedidos, { foreignKey: "id_cliente" });
db.pedidos.belongsTo(db.clientes, { foreignKey: "id_cliente" });

db.pedidos.hasMany(db.detalle_pedidos, { foreignKey: "id_pedido" });
db.detalle_pedidos.belongsTo(db.pedidos, { foreignKey: "id_pedido" });

db.productos.hasMany(db.detalle_pedidos, { foreignKey: "id_producto" });
db.detalle_pedidos.belongsTo(db.productos, { foreignKey: "id_producto" });

module.exports = db;
