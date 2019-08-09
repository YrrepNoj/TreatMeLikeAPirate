import { takeLatest, put, call } from 'redux-saga/effects';
import GET_UFO_OBSERVATIONS_REQUESTED from '../utils/observation_types'
import { GET_SHIPWRECK_OBSERVATIONS_REQUESTED, GET_SHIPWRECK_OBSERVATIONS_SUCCESS, GET_UFO_OBSERVATIONS_FAILED, GET_SHIPWRECK_OBSERVATIONS_FAILED } from '../reducers/actions';

const endpointURI = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
const ufoTitle = 'List_of_reported_UFO_sightings'
const shipwrecks = {
    internationalWatersTitle: 'List_of_shipwrecks_in_international_waters',
    atlanticOceanTitle: 'List_of_shipwrecks_in_the_Atlantic_Ocean',
    pacificOceanTitle: 'List_of_shipwrecks_in_the_Pacific_Ocean',
    indianOceanTitle: 'List_of_shipwrecks_in_the_Indian_Ocean',
    unitedStateTitle: 'List_of_shipwrecks_of_the_United_States'
}

export function* fetchUFOObservations(){
    try {
        let endpoint = endpointURI + ufoTitle;
        const response = yield call(fetch, endpoint);
        const responseBody = response.json();
        let parsedData = []        //call the util @chris is making
    } catch (e) {
        yield put({type: GET_UFO_OBSERVATIONS_FAILED});
        return;
    }

    yield put({
        type: GET_UFO_OBSERVATIONS_SUCCESS,
        ufoObservations: parsedData
    });
}

export function* fetchShipwreckObservations(){
  
    try {
        // Loop through all of shipwreck locations we want to use
        Object.keys(shipwrecks).forEach(function(key){
            let endpoint = endpointURI + shipwrecks[key]
            const response = yield call(fetch, endpoint);
            const responseBody = response.json();
            let parsedData = []         //call the util @chris is making
        })
      } catch (e) {
          yield put({type: GET_SHIPWRECK_OBSERVATIONS_FAILED});
          return;
      }
  
      yield put({
          type: GET_SHIPWRECK_OBSERVATIONS_SUCCESS,
          shipwreckObservations: parsedData
      });
}


export default function* rootSaga(){
    yield takeEvery(GET_UFO_OBSERVATIONS_REQUESTED, fetchUFOObservations);
    yield takeEvery(GET_SHIPWRECK_OBSERVATIONS_REQUESTED, fetchShipwreckObservations);
}