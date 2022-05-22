import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {
	
	getUsers() {
		return axios.get(USERS_REST_API_URL);
	}

	addUser(user) {
		axios.post(USERS_REST_API_URL + "/add", user);
	}

	deleteUser(id) {
		axios.delete(USERS_REST_API_URL + `/delete/${id}`);
	}
	
}

export default new UserService();