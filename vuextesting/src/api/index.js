import axios from 'axios'

export const deleteTask = (taskId) => {
  return axios.delete(`http://localhost:3000/tasks/${taskId}`)
}

export const storeTask = (payload) => {
  return axios.post(`http://localhost:3000/tasks`, payload)
}

export const getTasks = () => {
  return axios.get(`http://localhost:3000/tasks`)
}
