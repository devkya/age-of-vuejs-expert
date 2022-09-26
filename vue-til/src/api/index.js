import axios from 'axios';

function registerUser(userData) {
	const url = 'http://localhost:3000/signup';
	return axios.post(url, userData);
	// .then(res => {
	// 	console.log(res.data);
	// })
	// .catch(err => {
	// 	console.log(err.message);
	// });
}

export { registerUser };
