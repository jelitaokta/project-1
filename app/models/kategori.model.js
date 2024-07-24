module.exports = (sequelize, DataTypes) => {

    const kategori = sequelize.define("kategori", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         kategori: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          fasilitas: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },


    }, {

      sequelize,
      tableName: 'kategori',
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

    return kategori;
  }; 