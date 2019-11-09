import axios from 'axios'
import api from '../../utils/services'

export const loadHome = () => {
  return axios.get(api.url + '/homes')
    .then(res => res.data)
    .catch(err => err.response.data)
};