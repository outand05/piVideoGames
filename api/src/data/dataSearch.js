const {VideoGames} = require("../db")
const { Op } = require("sequelize");
async function searchDatabase(name) {
    try {
        const response = await VideoGames.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            limit: 15
          });
          return response
    } catch (error) {
        throw error
    }
  }
  module.exports= {searchDatabase}