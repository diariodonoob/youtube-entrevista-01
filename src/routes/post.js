module.exports = app => {
    const Controller = require('../controllers/post')
    
    app.route('/posts')
        .post(Controller.create)
        .get(Controller.listAll)

    app.route('/posts/:id')
        .get(Controller.listOne)
        .put(Controller.update)
        .delete(Controller.delete)
}