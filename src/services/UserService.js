import axios from 'axios';

const USERS_URL = 'http://localhost:4000/api/user';

class UserService {
    loginUser(creds) {
        return axios.post(USERS_URL + "/login", creds)
    }
}


export default new UserService();