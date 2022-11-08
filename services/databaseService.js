const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    });

    const table = 'user';

    const getUsers = () => {
        return knex(table).select();
    };

    const createUser = ({ name, age, username, password, role }) => {
        return knex(table).insert({
            name: name,
            age: age,
            username: username,
            password: password,
            role: role,
        }); //retorna una promesa
    };

    return { createUser, getUsers };
}

module.exports = {
    databaseService
};