module.exports = (sequelize, DataTypes) => {

    const JenisKamar = sequelize.define("JenisKamar", {
          id_jenis_kamar: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

        jenis: {
            type: DataTypes.STRING(50),
            allowNull: true
          },


    }, {

      sequelize,
      tableName: 'JenisKamar',
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

    return JenisKamar;
  }; 