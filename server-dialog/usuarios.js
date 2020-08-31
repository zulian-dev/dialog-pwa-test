"use strict";
var _a = require("graphql"), GraphQLObjectType = _a.GraphQLObjectType, GraphQLInt = _a.GraphQLInt, GraphQLString = _a.GraphQLString, GraphQLList = _a.GraphQLList, GraphQLSchema = _a.GraphQLSchema;
var db = require("../db.json");
var x = {
    "_id": "5f1b3f4b7917ef26107bd58c",
    "index": 0,
    "picture": "https://i.pravatar.cc/200?u=5f1b3f4b7917ef26107bd58c",
    "age": 37,
    "eyeColor": "brown",
    "name": "Weber Stein",
    "company": "VIAGRAND",
    "email": "weber.stein@viagrand.ca",
    "phone": "+1 (866) 533-3564",
    "friends": [
        {
            "_id": "5f1d7f3e8882c9c811b111ce",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce",
            "age": 23,
            "eyeColor": "green",
            "name": "Patti Mckenzie",
            "company": "DAISU",
            "email": "pattimckenzie@daisu.com",
            "phone": "+1 (960) 566-3327"
        },
    ],
    "greeting": "Hello, Weber! You have 9 unread messages."
};
var UsersType = new GraphQLObjectType({
    name: "Users",
    fields: function () { return ({
        _id: { type: GraphQLString },
        index: { type: GraphQLInt },
        picture: { type: GraphQLString },
        age: { type: GraphQLInt },
        eyeColor: { type: GraphQLString },
        name: { type: GraphQLString },
        company: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }); }
});
var RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: function () { return ({
        users: {
            type: new GraphQLList(UsersType),
            resolve: function () {
                return db;
            }
        }
    }); }
});
module.exports = new GraphQLSchema({
    query: RootQuery
});
