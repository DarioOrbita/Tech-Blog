const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'sdafafafdf',
    email: 'adfafasdf0@ttv.cnn',
    password: 'password'
  },
  {
    username: 'jeanman',
    email: 'jeanman@jeans.gov',
    password: 'password'
  },
  {
    username: 'beepus',
    email: 'steepusboopus@fm.radio',
    password: 'password'
  },
  {
    username: 'asmongold',
    email: 'asmongold@google.google',
    password: 'password'
  },
  {
    username: 'steve',
    email: 'steve1@thegovernment.gov',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;