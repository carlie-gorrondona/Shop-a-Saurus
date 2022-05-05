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

const dino_table = "dinosaurs";
const user_table = "users";

module.exports = {
    getDinosaurs: (req, res) => {
        sequelize.query(`
        SELECT * FROM ${dino_table};
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    getADinosaur: (req, res) => {
        let {id} = req.params;

        sequelize.query(`
        SELECT * FROM ${dino_table}
        WHERE dino_id = ${id};
        `)
            .then(dbRes => res.status(200).send(dbRes[0])) 
            .catch(err => console.log(err))
    },
    buyDinosaur: async (req, res) => {
        console.log(req.body)
        var cart = req.body

        const statements = [];
        for (let i = 0; i < cart.length; i++) {
            statements.push(
                sequelize.query(
                  `UPDATE ${dino_table} 
                  SET dino_quantity = dino_quantity - ${cart[i].quantity} 
                  WHERE dino_id = ${cart[i].id};`
                )
            );
        }

        const result = await Promise.all(statements)
        .then(
            res.status(200).send("OK")
        ).catch(err => {
            console.log(err)
        });

        console.log(result)
        
    },

    loginUser: (req, res) => {
        var creds = req.body

        console.log(creds.email)
        console.log(creds.password)
        sequelize.query(`
            SELECT * FROM ${user_table}
            WHERE user_email = '${creds.email}'
            AND user_password = '${creds.password}';
        `)
        .then(dbRes => res.status(200).send(dbRes[0])) 
        .catch(err => console.log(err))
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