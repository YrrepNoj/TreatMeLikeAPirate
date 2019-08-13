import {
  GET_SHIPWRECK_OBSERVATIONS_SUCCESS,
  GET_SHIPWRECK_OBSERVATIONS_FAILED,
  GET_UFO_OBSERVATIONS_SUCCESS,
  GET_UFO_OBSERVATIONS_FAILED,
  SET_INTERVAL_FILTER,
} from "./actions";

import { parseUFOData, parseShipwreckData } from "../utils/dataParser";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SHIPWRECK_OBSERVATIONS_SUCCESS:
      let formattedShipwreckObservations = parseShipwreckData(
        action.shipwreckObservations,
      );
      return {
        shipwreckObservations: formattedShipwreckObservations,
        ...state,
      };
    case GET_SHIPWRECK_OBSERVATIONS_FAILED:
      return {
        shipwreckObservations: [],
        ...state,
      };
    case GET_UFO_OBSERVATIONS_SUCCESS:
      let formattedUfoObservations = parseUFOData(action.ufoObservations);
      console.log(formattedUfoObservations);
      return {
        ufoObservations: formattedUfoObservations,
        ...state,
      };
    case GET_UFO_OBSERVATIONS_FAILED:
      return {
        ufoObservations: [],
        ...state,
      };
    case SET_INTERVAL_FILTER:
      return {
        ...state,
        filters: { ...state.filters, interval: [...action.interval] },
      };
    default:
      return state;
  }
};
