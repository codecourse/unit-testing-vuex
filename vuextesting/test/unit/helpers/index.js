export const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  const dispatch = (type, payload) => {}

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, dispatch, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

export const testActionDispatching = (action, payload, state, expectedActions, done) => {
  let count = 0

  const commit = (type, payload) => {}

  const dispatch = (type, payload) => {
    const action = expectedActions[count]
    expect(action.type).to.equal(type)
    if (payload) {
      expect(action.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedActions.length) {
      done()
    }
  }

  action({ commit, dispatch, state }, payload)

  if (expectedActions.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}
