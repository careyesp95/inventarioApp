# Project - Inventario


## Objetivos del Proyecto

- Construir una App Web con el fin de darle manejo eficiente al inventario.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

#### Tecnologías necesarias:
- [ ] Express
- [ ] NodeJs
- [ ] ORM: Sequelize
- [ ] DB: PostgreSQL
- [ ] Angular

## Comenzando

 1. Clonar el repositorio.
 - git:  
 2. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma: 
 
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=inventario   
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con sus propias credenciales para conectarte a postgreSQL. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `inventario`

 3. instalar las dependencias en `api` y `client`
 

#### Frontend

Se desarrolla la interfaz de la APP con herramientas como: Angular.

#### Backend

Se desarrolla un servidor en NodeJs junto con Express.


#### Base de datos

El modelo de la base de datos deberá tener :

- [ ] Products:
  - ID: 
  - Name
  - Status
  



