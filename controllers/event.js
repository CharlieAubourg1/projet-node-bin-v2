const Event = require("../models/event");

module.exports = {
  getAll: async (req, res, next) => {
    res.json(await Event.findAll());
  },
  create: async (req, res, next) => {
    res.status(201).json(await Event.create(req.body));
  },
  getOne: async (req, res, next) => {
    const event = await Event.findByPk(parseInt(req.params.id));
    if (event) {
      res.json(event);
    } else {
      res.sendStatus(404);
    }
  },
  update: async (req, res, next) => {
    const nbUpdated = await Event.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
      //returning: true
    });
    if (!nbUpdated) return res.sendStatus(404);

    res.json(await Event.findByPk(parseInt(req.params.id)));
  },
  delete: async (req, res, next) => {
    //if (req.event.id !== parseInt(req.params.id)) return res.sendStatus(403);

    const nbDeleted = await Event.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.sendStatus(nbDeleted ? 204 : 404);
  },
};