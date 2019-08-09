import {
  GET_SHIPWRECK_OBSERVATIONS_SUCCESS,
  GET_SHIPWRECK_OBSERVATIONS_FAILED,
  GET_UFO_OBSERVATIONS_SUCCESS,
  GET_UFO_OBSERVATIONS_FAILED,
  SET_INTERVAL_FILTER,
} from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SHIPWRECK_OBSERVATIONS_SUCCESS:
      return {
        shipwreckObservations: action.shipwreckObservations,
        ...state,
      };
    case GET_SHIPWRECK_OBSERVATIONS_FAILED:
      return {
        shipwreckObservations: [],
        ...state,
      };
    case GET_UFO_OBSERVATIONS_SUCCESS:
      return {
        ufoObservations: action.ufoObservations,
        ...state,
      };
    case GET_UFO_OBSERVATIONS_FAILED:
      return {
        ufoObservations: action.ufoObservations,
        ...state,
      };
    case SET_INTERVAL_FILTER:
      return {
        filters: { ...state.filters, interval: [...action.interval] },
      };
    default:
      return state;
  }
};
