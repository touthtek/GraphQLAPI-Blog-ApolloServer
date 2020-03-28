const { ApolloServer, gql } = require('apollo-server');
const Schema = gql`
    type Mutation {
      createusers(value : Userinput) : ReturnMessage
      addarticle(value : Articleinput) : ReturnMessage
    }
    type Query {
       users : [User]
       user(id : String!) : User
       login(email: String!, password : String!): User

       article(id : String) : Article
       articles : [Article]
    
    }
    type User {
      id : String
      surname : String
      othername : String
      email : String
      password : String
      token : String
      article : [Article]
    }
    input Userinput {
      surname : String!
      othername : String!
      email : String!
      password : String!
    }
    type ReturnMessage{
      isSuccess : Boolean
      message : String
    }

    type Article{
      id : String
      title : String
      content : String
      type : String
      createdOn : String
      isActive : Boolean
      createdBy : String
      user : User
      

    }
    input Articleinput{
      id : String
      title : String
      content : String
      type : String
      isActive : Boolean
      createdBy : String
    }
    
  `;
  module.exports = Schema;