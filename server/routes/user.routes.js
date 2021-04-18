const UserController = require('../controllers/user.controller');
// const { authRole } = require('../basicAuth')
// const User = require('../models/user.model')

const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/users', authenticate, UserController.getAll);
    app.get('/api/users/:id', authenticate, UserController.getOne);
    app.put('/api/users/:id', authenticate, UserController.update);
    app.post('/api/user/register', UserController.register);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/logout', UserController.logout);
    app.delete('/api/users/:id', authenticate, UserController.delete)
}