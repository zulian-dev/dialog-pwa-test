"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = require("debug")('api:main');
var express = require('express');
var graphqlHTTP = require("express-graphql").graphqlHTTP;
var schema = require("./usuarios");
var PORT = process.env.PORT || 4000;
var app = new express();
app.use(function (req, res, next) {
    log("request at " + new Date().toISOString());
    return next();
});
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphql: true,
}));
app.get("/teste", function (_req, res) {
    res.send("Foi!");
});
app.listen(PORT, function () {
    return log("\u26A1\uFE0F [server]: Server is running at https://localhost:" + PORT);
});
