import User from '../../interfaces/github/User';
import http from '../http';

export default (): Promise<User> => {
    return new Promise((resolve, reject) => {
        http.get(`https://api.github.com/users/simonmaribo`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => reject(error.response.data));
    });
}