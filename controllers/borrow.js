const Borrow = require("../models/borrow");
const { Op } = require('sequelize');

module.exports = {
  getAll: async (req, res, next) => {
    if (req.params.isReturn === 0)
      res.json(await Borrow.findAll({where: { return_date: null }}));
    else if (req.paramas.isReturn === 1)
      res.json(await Borrow.findAll({where: { return_date: { [Op.ne]: null } }}));
    else
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
        borrow_id: parseInt(req.params.id),
      },
      //returning: true
    });
    if (!nbUpdated) return res.sendStatus(404);

    res.json(await Borrow.findByPk(parseInt(req.params.id)));
  },
  //
  getBorrow: async (req,res,next) => {
    const borrows = null;
    if (req.params.isReturn === 0)
    {
      borrows = await Borrow.findAll({
        where: { 
          user_id: parseInt(req.params.id),
          return_date: null
        },
      });
    }
    else if (req.paramas.isReturn === 1)
    {
      borrows = await Borrow.findAll({
        where: {
          user_id: parseInt(req.params.id),
          return_date: { [Op.ne]: null }
        },
      });
    }
    else
    {
      borrows = await Borrow.findAll({
        where: {
          user_id: parseInt(req.params.id)
        },
      });
    }
    if(!borrows || borrows.length === 0) {
      res.sendStatus(404);
    }
    res.json(borrows);
  },
  getHistoricOfBook: async (req,res,next) => {
    const borrows = null;
    if (req.params.isReturn === 0)
    {
      borrows = await Borrow.findAll({
        where: { 
          book_id: parseInt(req.params.id),
          return_date: null
        },
      });
    }
    else if (req.paramas.isReturn === 1)
    {
      borrows = await Borrow.findAll({
        where: {
          book_id: parseInt(req.params.id),
          return_date: { [Op.ne]: null }
        },
      });
    }
    else
    {
      borrows = await Borrow.findAll({
        where: {
          book_id: parseInt(req.params.id)
        },
      });
    }
    if(!borrows || borrows.length === 0) {
      res.sendStatus(404);
    }
    if(!borrows || borrows.length === 0) {
      res.sendStatus(404);
    }
    res.json(borrows);
  }
};