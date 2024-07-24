//mulai kembali dari index models
const dbConfig = require("../config/project.db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});
  
// membuat module
const db = {};

// sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model
db.user = require("./user.model.js")(sequelize, Sequelize);
db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.fasilitas = require("./fasilitas.model.js")(sequelize, Sequelize);
db.galery = require("./galery.model.js")(sequelize, Sequelize);
db.JenisFasilitas = require("./JenisFasilitas.model.js")(sequelize, Sequelize);
db.JenisKamar = require("./JenisKamar.model.js")(sequelize, Sequelize);
db.kamar = require("./kamar.model.js")(sequelize, Sequelize);
db.kategori = require("./kategori.model.js")(sequelize, Sequelize);
db.produk = require("./produk.model.js")(sequelize, Sequelize);
db.reservasi = require("./reservasi.model.js")(sequelize, Sequelize);
db.transaksi = require("./transaksi.model.js")(sequelize, Sequelize);

module.exports = db;
