module.exports = function(app, databaseService) {

    app.get('/users', (request, response) => {
        databaseService.getUsers()
            .then(users => response.json(users))
            .catch(e => response.status(500).send(e));
    });

    app.post('/users', (request, response) => {
        const newUser = request.body;
        console.log(newUser);

        databaseService.createUser(newUser)
            .then(() => {
                response.json({ "mensaje": "usuario creado" });
            }).catch(e => {
                response.status(500).json(e);
            });
    });
}