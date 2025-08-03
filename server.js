const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http:/localhost:8081"
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync(); // Esto crea las tablas

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "API Pedidos funcionando" });
});

// Aquí irán las rutas (más adelante)
require("./app/routes/cliente.route")(app);
require("./app/routes/producto.route")(app);
require("./app/routes/pedido.route")(app);
require("./app/routes/detalle_pedido.route")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
