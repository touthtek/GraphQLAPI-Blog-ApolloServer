const path = require('path');
const fs = require('fs');
const fullpath = path.join(path.dirname
(process.mainModule.filename), 'data', 'user.json');
const articlefullpath = path.join(path.dirname
(process.mainModule.filename), 'data', 'article.json');
let userList = [];
let articleList = [];
const Queries = {
  users : () =>{
      try{
          let result = fs.readFileSync(fullpath);
          userList = JSON.parse(result);
          return userList;
      }
      catch(e)
      {
        console.log(e);
            return userList;
      }
  },

   article : () => {
      try{
          let result = fs.readFileSync(articlefullpath);
          articleList = JSON.parse(result);
          console.log(articleList);
          return articleList;
      }
      catch(e)
      {
        console.log(e);
            return articleList;
      }
  }
}
module.exports = Queries;