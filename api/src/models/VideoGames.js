const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "VideoGames",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
          notEmpty: true
        }
      },
      platForms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
          notEmpty: true,
        },
      },
      releasedDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isDate: true,
         
        },
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
    }
  );
};
