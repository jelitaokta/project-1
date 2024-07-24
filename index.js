const express = require("express")
const cors = require("cors")
const app = express();
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models")
db.sequelize.sync()

// routes
app.put("/test/:nama", (req, res) => {
  console.log(req.params.nama);
  const data ={
    "name" : "kelompok 2",
    "message" : "App started"
  }

  res.json(req.params.nama);

//logging
res.json(data);
console.log(data);
console.error("salah");
});

// secured routes
require("./app/routes/user.route")(app)
require("./app/routes/produk.routes")(app)
require("./app/routes/fasilitas.routes")(app)
require("./app/routes/kamar.routes")(app)
require("./app/routes/JenisKamar.routes")(app)
require("./app/routes/kategori.routes")(app)
require("./app/routes/admin.routes")(app)
require("./app/routes/transaksi.routes")(app)
require("./app/routes/reservasi.routes")(app)
require("./app/routes/galery.routes")(app)
require("./app/routes/JenisFasilitas.routes")(app)

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});