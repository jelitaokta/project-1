module.exports = (sequelize, DataTypes) => {

    const transaksi = sequelize.define("transaksi", {
        id_transaksi: {
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true
         },  
      
        nama: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         email: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          password: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          no_hp: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

         metode_pembayaran: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },


    }, {

      sequelize,
      tableName: 'transaksi',
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

    return transaksi;
  }; 