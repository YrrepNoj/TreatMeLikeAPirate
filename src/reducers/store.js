import { createStore } from "redux";
import reducer from "./reducer";
import OBSERVATION_TYPES from "../utils/observation_types";

const initialState = {
  ufoObservations: [
    {
      id: 0,
      type: OBSERVATION_TYPES.UFO,
      year: 2012,
      description: "Hello world",
      coord: [43.1234, -80.001],
    },
    {
      id: 1,
      type: OBSERVATION_TYPES.UFO,
      year: 2012,
      description: "Hello world2",
      coord: [43.1234, -90.001],
    },
    {
      id: 2,
      type: OBSERVATION_TYPES.UFO,
      year: 2013,
      description: "Hello world3",
      coord: [38.1234, -85.001],
    },
  ],
  shipwreckObservations: [
    {
      id: 0,
      name: "USS Enterprise",
      type: OBSERVATION_TYPES.SHIPWRECK,
      year: 2016,
      decription: "Hello world",
      coord: { lat: 49.1234, long: 12.001 },
    },
  ],
  filters: {
    interval: [1800, 2019],
  },
};

export default function configureStore() {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
