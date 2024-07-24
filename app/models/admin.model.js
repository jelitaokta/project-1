module.exports = (sequelize, DataTypes) => {

    const admin = sequelize.define("admin", {
          id: {
            autoIncrement: true,
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

    }, {

      sequelize,
      tableName: 'admin',
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

    return admin;
  }; 