import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3505fa06ab6d4289aafd07d1fe7b8406',
  },
})

