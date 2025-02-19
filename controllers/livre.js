const Livre = require("../models/livre");

module.exports = {
  getAll: async (req, res, next) => {
    res.json(await Livre.findAll());
  },
  create: async (req, res, next) => {
    res.status(201).json(await Livre.create(req.body));
  },
  getOne: async (req, res, next) => {
    const livre = await Livre.findByPk(parseInt(req.params.id));
    if (livre) {
      res.json(livre);
    } else {
      res.sendStatus(404);
    }
  },
  delete: async (req, res, next) => {
    const nbDeleted = await Livre.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.sendStatus(nbDeleted ? 204 : 404);
  },
};