import axios from 'axios';

const DINOSAUR_URL = 'http://localhost:4000/api/dinosaurs';

class DinosaurService {
    getDinosaurs(){
        return axios.get(DINOSAUR_URL);
    }

    getADinosaur(dinoId){
        return axios.get(DINOSAUR_URL + '/' + dinoId);
    }

    buyDinosaur(cart) {
        return axios.put(DINOSAUR_URL, cart)
    }
}


export default new DinosaurService();