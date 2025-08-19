import Axios from "axios"

export const BASE_URL = "https://hiwayati-7efbc0ac9205.herokuapp.com"

const Client = Axios.create({ baseURL: BASE_URL })
Client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`
    }
    return config
  },
  async (error) => {
    throw error
  }
)
export default Client
