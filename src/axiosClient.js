import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL.replace(/\/$/, ''),
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
})

export default axiosClient