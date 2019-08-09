import { createStore } from "redux";
import reducer from "./reducer";
import OBSERVATION_TYPES from "./utils/observation_types";

const initialState = {
  observations: [
    {
      id: 0,
      type: OBSERVATION_TYPES.UFO,
      year: 2012,
      description: "Hello world",
      coord: { lat: 49.1234, long: 12.001 },
    },
  ],
};

export default function configureStore() {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}