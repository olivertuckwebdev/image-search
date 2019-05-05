import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 271f0584d023654bd378a96807774e5429d7c78fa0b1450052f0b6c33d9d2340'
  }
});
