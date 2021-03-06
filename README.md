<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Sacamuelas Backend</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
This is a project to prove our skills on SQL based backend.

## 🏁 Getting Started <a name = "getting_started"></a>

First things first, you need our [repo](https://github.com/devian5/saca-muelas-back/tree/dev), where you can take all the data.

BOTON GET ON POSTMAN

This button will take you to postman, where you can interact with our data base via API.

### Prerequisites
This is the commad to install sequelize, the ORM we used.
```
npm install sequelize-cli -g
```
All our project is docker based. You'll need to have several containers in order to run sql,sequelize and phpmyadmin.
```
docker-compose up
```
Run npm.
```
npm start
```

Then, create a database with this command.
```
sequelize db:create
```
Migrate all our tables.
```
sequelize db:migrate
```
Fill the models with this seeds.
```
sequelize db:seed:all
```
Since we work with docker you don't need to have anything but docker installed on your computer.

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

We've been working with Trello for organization pourposes. Here is a picture of the workflow and a [link to it](https://trello.com/b/5JMx6vgG/sacamuelas-kanban).

![alt text](./IMG/trello.png)



First we made a sketch on [diagrams](https://app.diagrams.net/)
![alt text](./IMG/sketch.png "Title")

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [mySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [docker](https://docker.org/) - Container Manager
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org) -SQL ORM

## ✍️ Authors <a name = "authors"></a>

- [@DanielC1492](https://github.com/DanielC1492) - Idea & Initial work
- [@devian5](https://github.com/devian5) - Idea & Initial work

See also the list of [contributors](https://github.com/FullStackDeveloperValenciaGeeksHubs0121) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
