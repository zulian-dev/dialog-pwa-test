const log = require("debug")('api:main')
const express = require('express')
const {graphqlHTTP} = require("express-graphql")
const schema = require("./usuarios")

import { Request, Response, NextFunction } from 'express';

const PORT = process.env.PORT || 4000
const app = new express()

app.use((req:Request, res:Response, next:NextFunction):void => {
    log(`request at ${new Date().toISOString()}`)
    return next()
})
app.use("/graphql", graphqlHTTP({
    schema,
    graphql: true,
}))

app.get("/teste", (_req:Request, res:Response):void =>{
    res.send("Foi!")
})

app.listen(PORT, ():void=>
    log(`⚡️ [server]: Server is running at https://localhost:${PORT}`)
)