import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import OBSERVATION_TYPES from "../utils/observation_types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
const initialState = {
  ufoObservations: [],
  shipwreckObservations: [],
  filters: {
    interval: [1800, 2019],
  },
};

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
