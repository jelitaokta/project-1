module.exports = (sequelize, DataTypes) => {

    const galery = sequelize.define("galery", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         fasilitas_hotel: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          deskripsi: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },


    }, {

      sequelize,
      tableName: 'galery',
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

    return galery;
  }; 