// store.dispatch('exampleAction', payload);

export default {
  exampleAction(state, payload) {
    state.commit('exampleMutation', payload);
  }
}