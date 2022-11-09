# Hexagonal Architecture

The hexagonal architecture or ports-adapters architecture, is an architectural pattern used in software design. It aims at creating loosely coupled application components that can be easily connected to their software environment by means of ports and adapters. 

## Infrastructure Layer ##

The data layer is implemented using repositories, that hide the underlying data sources (database, network, cache, etc), and provides an abstraction over them so other parts of the application that make use of the repositories, don't care about the origin of the data and are decoupled from the specific implementations used, like the Mysql ORM that is used by this app.

## Domain Layer ##

The domain layer is implemented using services. They depend on the repositories to get the app models and apply the business rules on them. They are not coupled to a specific database implementation and can be reused if we add more data sources to the app or even if we change the database for example from MongoDB to Couchbase Server.

## Controller Layer ##

This layer depends on the domain layer (domain services). Here, we define the function, manage data that can be called from outside. 


# A domain driven design

To define domain-driven design we should first establish what we mean by domain in this context (and in development in general). The common dictionary definition of domain is: “A sphere of knowledge or activity.” Drilling down a bit from that, domain in the realm of software engineering commonly refers to the subject area on which the application is intended to apply. In other words, during application development, the domain is the “sphere of knowledge and activity around which the application logic revolves.”



## Communication flow

![myimage-alt-tag](https://miro.medium.com/max/810/1*b75xN3W9mQzta37pT-siRQ.png) 


## Dependencies

You need install Mysql in your localhost.
After that you on clone the project, downoland the packages and run it.

### Node version

- [Nodejs v16.15](https://nodejs.org/en/)

### ORM Prisma

- [Prisma v4.5.0](https://www.prisma.io/docs/)

### Base Framework

- [Express](https://expressjs.com/)


# Quick start #


```sh
$ git clone https://github.com/RM02/hexagonal-architecture-node.git
$ npm i
$ add DB_URL to .env file 
$ npx prisma db push
$ npm start

```

# Endpoints #


### Create an order ###

```shell
POST /api/management/order

```

### Get orders ###

```shell
GET /api/management/order

```

### Delete order ###

```shell
GET /api/management/order/:id

```
