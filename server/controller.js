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
    }
}