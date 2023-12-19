const express = require('express');
const swaggerDocs = require('../docs/user.swagger');
const {
  createUser, findUser, deteleUser, editUser,
} = require('../controllers/user.controller');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    UserModel:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: the auto-generated id of task
 *        fullname:
 *          type: string
 *          description: the name of the task
 *        email:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - fullname
 *        - email
 *        - password
 *      example:
 *        fullname: Juan Fernandez
 *        email: juan@gmail.com
 *        password: admin123
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found User
 *      example:
 *        msg: User was not found
 *  parameters:
 *    id:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 *  /v1/user/findAll:
 *   get:
 *    summary: return to users list
 *    tags: [User]
 *    responses:
 *      200:
 *        description: return list of users
 *        content:
 *           application/json:
 *            schema:
 *              type: array
*/

/**
 * @swagger
 *  /v1/user/create:
 *   post:
 *    summary: create new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserModel'
 *    responses:
 *      200:
 *        description: return to user created
 *        content:
 *           application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserModel'
 *      500:
 *        description: Some server error
*/

/**
 * @swagger
 *  /v1/user/edit/{id}:
 *   put:
 *    summary: edit user
 *    tags: [User]
 *    parameters:
 *      - $ref: '#/components/parameters/id'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserModel'
 *    responses:
 *      200:
 *        description: return to user edited
 *        content:
 *           application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserModel'
 *      500:
 *        description: Some server error
*/

/**
 * @swagger
 *  /v1/user/delete/{id}:
 *   delete:
 *    summary: delete user
 *    tags: [User]
 *    parameters:
 *      - $ref: '#/components/parameters/id'
 *    responses:
 *      200:
 *        description: return to user deleted
 *        content:
 *           application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserModel'
 *      500:
 *        description: Some server error
*/

router
  .get('/findAll', findUser)
  .post('/create', createUser)
  .put('/edit/:id', editUser)
  .delete('/delete/:id', deteleUser);

module.exports = { router, swaggerDocs };
