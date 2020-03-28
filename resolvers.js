
const queries = require('./query');
const mutation = require('./mutations');

const Resolvers = {
    ...mutation,
    ...queries,
  };

  module.exports = Resolvers;