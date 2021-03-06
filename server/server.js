const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = 4000;

//ENDPOINTS
app.get(`/api/dinosaurs`, controller.getDinosaurs);
app.get(`/api/dinosaurs/:id`, controller.getADinosaur);
app.put(`/api/dinosaurs`, controller.buyDinosaur);

//USER ENDPOINTS
app.post(`/api/user/login`, controller.loginUser);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));