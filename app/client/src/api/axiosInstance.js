// import axios from 'axios';

// export const ENDPOINTS = {
//   FORMAT_JSON: '/format-json',
//   GET_HISTORY: '/history',
//   ENCODE: '/encode',
//   DECODE: '/decode',
// };

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default instance;





import axios from 'axios';

export const ENDPOINTS = {
  FORMAT_JSON: '/format-json',
  GET_HISTORY: '/history',
  ENCODE: '/encode',
  DECODE: '/decode',
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

// import axios from 'axios';

// export const ENDPOINTS = {
//   FORMAT_JSON: '/format-json',
//   GET_HISTORY: '/history',
//   ENCODE: '/encode',
//   DECODE: '/decode',
// };

// const instance = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default instance;