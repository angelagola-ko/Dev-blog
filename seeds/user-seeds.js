const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'a@gmail.com',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'b@gmail.com',
    password: 'password1'
  },
  {
    username: 'iboddam2',
    email: 'c@gmail.com',
    password: 'password1'
  },
  {
    username: 'dstanmer3',
    email: 'd@gmail.com',
    password: 'password1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
