const db = require('./data/dbqueries');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'makethislongandrandom';
const Queries ={
   Query: {

     // Login
      login(_, { email, password }) {
        let result = db.users();
        const user = result.find(user => user.email === email && user.password == password);
        if (!user) {
          throw Error('incorrect credentials');
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        user.token = token
        return user;
      },
    

    //user
      users: (_, args, {user}) => {
          
        if(user === true)
        {
          return db.users()
        }
        else{
            throw Error('Unauthorised');
        }
      },
      user: (_, { id }) => db.users().find(user => user.id === id),

      //article

       articles: () => {
        let result = db.article();
        return result;
       },
      article: (_, { id }) => db.article.find(article => article.id === id),

}
}

module.exports = Queries;