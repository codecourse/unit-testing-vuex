export const removeFromTasks = (state, taskId) => {
  state.tasks = state.tasks.filter((task) => {
    return task.id !== taskId
  })
}

export const setTaskBody = (state, body) => {
  state.task.body = body
}

export const setTasks = (state, tasks) => {
  state.tasks = tasks
}

export const prependToTasks = (state, task) => {
  state.tasks.unshift(task)
}

export const setMessage = (state, message) => {
  state.message = message
}
