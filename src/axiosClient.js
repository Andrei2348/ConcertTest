import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL.replace(/\/$/, ''),
    // baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
})

export default axiosClient