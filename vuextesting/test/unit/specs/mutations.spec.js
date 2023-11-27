import * as _ from 'lodash'
import * as mutations from '@/store/mutations'
import actualState from '@/store/state'

describe('mutations', () => {
  it('removeFromTasks', () => {
    const state = _.clone(actualState)

    state.tasks = [
      { id: 1, body: 'Task one' },
      { id: 2, body: 'Task two' }
    ]

    mutations.removeFromTasks(state, 1)

    expect(state.tasks).to.deep.equal([
      { id: 2, body: 'Task two' }
    ])

    expect(state.tasks.length).to.equal(1)
  })

  it('setMessage', () => {
    const state = {
      message: null
    }

    mutations.setMessage(state, 'Failed')

    expect(state.message).to.equal('Failed')
  })

  it('prependToTasks if empty', () => {
    const state = { tasks: [] }

    mutations.prependToTasks(state, { id: 1, body: 'A new task' })

    expect(state.tasks).to.deep.equal([
      { id: 1, body: 'A new task' }
    ])
  })

  it('prependToTasks if already contains items', () => {
    const state = _.clone(actualState)

    state.tasks = [
      { id: 1, body: 'Task one' }
    ]

    mutations.prependToTasks(state, { id: 2, body: 'A new task' })

    expect(state.tasks).to.deep.equal([
      { id: 2, body: 'A new task' },
      { id: 1, body: 'Task one' }
    ])
  })

  it('setTasks', () => {
    const state = _.clone(actualState)

    mutations.setTasks(state, [
      { id: 1, body: 'Task one' },
      { id: 2, body: 'Task two' }
    ])

    expect(state.tasks).to.deep.equal([
      { id: 1, body: 'Task one' },
      { id: 2, body: 'Task two' }
    ])
  })

  it('setTaskBody', () => {
    const state = {
      task: {
        body: null
      }
    }

    mutations.setTaskBody(state, 'A task')
    expect(state.task.body).to.equal('A task')
  })
})
