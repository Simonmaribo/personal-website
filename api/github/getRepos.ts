import Repo from '../../interfaces/github/Repo';
import http from '../http';

export default (): Promise<Repo[]> => {
    return new Promise((resolve, reject) => {
        http.get(`https://api.github.com/users/simonmaribo/repos`)
            .then((response) => {
                if(response.status != 200)
                    reject(response.data);
                resolve(response.data);
            })
            .catch((error) => reject(error.response.data));
    });
}