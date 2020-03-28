const db = require('./data/dbqueries');
const path = require('path');
const fs = require('fs');
const {v4} = require('uuid');
const express = require('express');
app = express();
const moment = require('moment');
const todaydate = moment().format('MMMM Do YYYY, h:mm:ss a');
let guid = v4();
let error = [];
const fullpath = path.join(path.dirname(process.mainModule.filename), 'data', 'user.json');
const userfullpath = path.join(path.dirname(process.mainModule.filename), 'data', 'user.json');
const articlefullpath = path.join(path.dirname(process.mainModule.filename), 'data', 'article.json');
const Mutation = { 
  Mutation: {
      
      createusers : (_, {value}) => {
      
       try{
          let result  = db.users();
       
        console.log(result);
     
        const user = {id: guid, surname : value.surname, othername : value.othername, email : value.email, password : value.password};
        const match = result.find(user => user.email === values.email);
        if (match) throw Error('This user already exists');
        result.push(user);
        fs.writeFileSync(userfullpath, JSON.stringify(result));
        return {isSuccess : true, message:'User created successfully'};
       }
       catch(e)
       {
          error.push({action : 'usercreation', errormessage : e.message})
          return {isSuccess : false, message:'user creation failed'};
       }
       finally {
           console.log(error);
       }
      
      },

       addarticle : (_, {value}) => {
      
       try{
          let result  = db.article();
       
        console.log(result);
     
        const article = {id: guid, title : value.title, content : value.content, type : value.type, isActive : value.isActive, createdBy : value.createdBy, createdOn : todaydate};
        const match = result.find(article => article.title === values.title);
        if (match) throw Error('This article already exists');
        result.push(article);
        fs.writeFileSync(articlefullpath, JSON.stringify(result));
      
       
        return {isSuccess : true, message:'User created successfully'};
       }
       catch(e)
       {
          error.push({action : 'addarticle', errormessage : e.message})
          return {isSuccess : false, message:'article creation failed'};
       }
       finally {
           console.log(error);
       }
      
      },


    },
};

    module.exports = Mutation;