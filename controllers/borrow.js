const Borrow = require("../models/borrow");

module.exports = {
  getAll: async (req, res, next) => {
    res.json(await Borrow.findAll());
  },
  create: async (req, res, next) => {
    res.status(201).json(await Borrow.create(req.body));
  },
  getOne: async (req, res, next) => {
    const borrow = await Borrow.findByPk(parseInt(req.params.id));
    if (borrow) {
      res.json(borrow);
    } else {
      res.sendStatus(404);
    }
  },
  update: async (req, res, next) => {
    const nbUpdated = await Borrow.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
      //returning: true
    });
    if (!nbUpdated) return res.sendStatus(404);

    res.json(await Borrow.findByPk(parseInt(req.params.id)));
  }
};