const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index.js");

const Bill = db.define("bills", {
  name: {
    type: DataTypes.STRING,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
  paymentAmount: {
    type: DataTypes.STRING,
  },
  billType: {
    type: DataTypes.STRING,
  },
  paymentType: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  recurring: {
    type: DataTypes.BOOLEAN,
  },
  category: {
    type: DataTypes.STRING,
  },
});

Bill.sync({ alter: true });

module.exports = Bill;
