export default (state = {}, action) => {
  switch (action.type) {
    case "GET_OBSERVATIONS":
      return {
        observations: {},
      };
    default:
      return state;
  }
};
