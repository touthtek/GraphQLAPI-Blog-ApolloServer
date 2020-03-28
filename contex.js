const jwt = require('jsonwebtoken');

const Context = ({ req }) => {
    let user = null;
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      user = jwt.verify(token, JWT_SECRET);
    } catch (error) {}
    return { user };
  }

  module.exports = Context;