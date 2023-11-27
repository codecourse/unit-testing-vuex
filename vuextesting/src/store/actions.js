import * as api from '@/api'

export const deleteTask = ({ commit, dispatch }, taskId) => {
  commit('removeFromTasks', taskId)

  api.deleteTask(taskId).then(() => {
    dispatch('setMessage', 'Deleted!')
  })
}

export const getTasks = ({ commit }) => {
  api.getTasks().then((response) => {
    commit('setTasks', response.data)
  })
}

export const setMessage = ({ commit }, message) => {
  commit('setMessage', message)

  setTimeout(() => {
    commit('setMessage', null)
  }, 3000)
}

export const saveTask = ({ commit, dispatch, state }) => {
  if (!state.task.body) {
    dispatch('setMessage', 'Please enter a task')
    return
  }

  api.storeTask({ body: state.task.body }).then((response) => {
    commit('prependToTasks', response.data)
    dispatch('setMessage', 'Task saved')
    commit('setTaskBody', null)
  })
}
