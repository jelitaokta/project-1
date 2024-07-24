module.exports = (sequelize, DataTypes) => {

    const produk = sequelize.define("produk", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         id_kamar: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          harga: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          jenis_kamar : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

          id_kategori: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

         deskripsi: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },


    }, {

      sequelize,
      tableName: 'produk',
      timestamps: true,
      indexes: [

        {

          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });

    return produk;
  }; 