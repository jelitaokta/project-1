module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("user", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          email: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          password : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

           no_hp: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          }

    }, {

      sequelize,
      tableName: 'user',
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

    return user;
  }; 