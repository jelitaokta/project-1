module.exports = (sequelize, DataTypes) => {

    const fasilitas = sequelize.define("fasilitas", {
          id_jenis_kamar: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         nama_jenis_kamar: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          fasilitas: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          harga : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },


    }, {

      sequelize,
      tableName: 'fasilitas',
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

    return fasilitas;
  }; 