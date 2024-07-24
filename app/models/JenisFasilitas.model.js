module.exports = (sequelize, DataTypes) => {

    const JenisFasilitas = sequelize.define("JenisFasilitas", {
          id_jenis_fasilitas: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         nama_fasilitas: {
            type: DataTypes.STRING(50),
            allowNull: true
          },


    }, {

      sequelize,
      tableName: 'JenisFasilitas',
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

    return JenisFasilitas;
  }; 