// store.commit('exampleMutation', payload);

export default {
  exampleMutation(state, payload) {
    state.count += payload;
  }
}