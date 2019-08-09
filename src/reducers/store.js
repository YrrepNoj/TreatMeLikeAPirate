import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import OBSERVATION_TYPES from "../utils/observation_types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index"
const initialState = {
  ufoObservations: [
    {
      id: 0,
      type: OBSERVATION_TYPES.UFO,
      year: 2012,
      description: "Hello world",
      coord: { lat: 49.1234, long: 12.001 },
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
  ]
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  let store =  createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga)
  return store;

}
