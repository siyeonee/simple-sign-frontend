import axios from 'axios';

axios.defaults.withCredentials = true;

export default function getBoxDetail(boxId) {
  const url = `http://localhost:8080/approvbox/box/detail?boxId=${boxId}`;
  return axios.get(url);
}
