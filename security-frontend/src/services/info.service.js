import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class InfoService {

  getInfo(username) {
    return axios.get(API_URL + 'user',
    {
      username
    })
  }
  
//   infoedit(username, name, surname, pesel,tel){
//     return axios.post(API_URL + "user/infoEdit-form",
//     {
//     username,
//     name,
//     surname,
//     pesel,
//     tel
// })

//   }
}

export default new InfoService();