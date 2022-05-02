const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    getDinosaurs: (req, res) => {
        sequelize.query(`
        SELECT * FROM dinosaurs;
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    getADinosaur: (req, res) => {
        let {id} = req.params;

        sequelize.query(`
        SELECT * FROM dinosaurs
        WHERE dino_id = ${id};
        `)
            .then(dbRes => res.status(200).send(dbRes[0])) 
            .catch(err => console.log(err))
    },

    login: (req, res) => {
        sequelize.query(`
        SELECT user_id FROM users
        WHERE user_username = ${username};
        `)

        // if (username === user_username && password === user_password) {
        //     console.log('Logging in...')

        // } else if (username === user_username && password !== user_password) {
        //     console.log('Incorrect password');

        // } else if (username!== user_username) {
        //     console.log('Username and/or password incorrect.')
        // }
    },

    register: (req, res) => {
        sequelize.query(`
        SELECT * FROM users;
        `)

        // if (username !== user_username) {
        //     sequelize.query(`
        //     INSERT INTO users (user_first_name, user_last_name, user_email, user_username, user_password)
        //     VALUES (${firstName}, ${lastName}, ${email}, ${username}, ${password});
        //     `)
        // } else {
        //     sequelize.query(`
        //     INSERT INTO users (user_first_name, user_last_name, user_email, user_username, user_password)
        //     VALUES (${user.user_first_name})
        //     `)
        // }
    },

    getCart: (req, res) => {
        let {id} = req.params;

        sequelize.query(`
        SELECT * FROM cart
        WHERE user_id = ${id};
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
    },

    addToCart: (req, res) => {
        let {id} = req.params; //needs to be req.body

        sequelize.query(`
       
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    // removeFromCart: (req, res) => {
    //     let {id} = req.params;

    //     sequelize
    // }
}