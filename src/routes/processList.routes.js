const express = require('express');
const {
  postProcessList,
  getProcessList,
} = require('../controllers/processList.controller');

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ProcessModel:
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
 *    ProcessNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found User
 *      example:
 *        msg: Process was not found
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
 *  /v1/process-detail/findAll:
 *   get:
 *    summary: return to process list
 *    tags: [ProcessModel]
 *    responses:
 *      200:
 *        description: return list of process
 *        content:
 *           application/json:
 *            schema:
 *              type: array
*/

/**
 * @swagger
 *  /v1/process-detail/create:
 *   post:
 *    summary: create new process
 *    tags: [ProcessModel]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProcessModel'
 *    responses:
 *      200:
 *        description: return to user created
 *        content:
 *           application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProcessModel'
 *      500:
 *        description: Some server error
*/

router.post('/', postProcessList);
router.get('/', getProcessList);

module.exports = router;
