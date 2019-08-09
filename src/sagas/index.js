import { takeLatest, put, call } from 'redux-saga/effects';
// import GET_UFO_OBSERVATIONS_REQUESTED from '../utils/observation_types'
import { 
    GET_SHIPWRECK_OBSERVATIONS_REQUESTED, 
    GET_SHIPWRECK_OBSERVATIONS_SUCCESS,
    GET_SHIPWRECK_OBSERVATIONS_FAILED, 
    GET_UFO_OBSERVATIONS_REQUESTED,
    GET_UFO_OBSERVATIONS_FAILED, 
    GET_UFO_OBSERVATIONS_SUCCESS } from '../reducers/actions';

const endpointURI = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
const ufoTitle = 'List_of_reported_UFO_sightings'
const shipwrecks = {
    internationalWatersTitle: 'List_of_shipwrecks_in_international_waters',
    atlanticOceanTitle: 'List_of_shipwrecks_in_the_Atlantic_Ocean',
    pacificOceanTitle: 'List_of_shipwrecks_in_the_Pacific_Ocean',
    indianOceanTitle: 'List_of_shipwrecks_in_the_Indian_Ocean',
    unitedStateTitle: 'List_of_shipwrecks_of_the_United_States'
}
const shipwrecksArray = [
     'List_of_shipwrecks_in_international_waters',
     'List_of_shipwrecks_in_the_Pacific_Ocean',
     'List_of_shipwrecks_in_the_Indian_Ocean',
     'List_of_shipwrecks_of_the_United_States'
]
const originString = "&origin=*"

export function* fetchUFOObservations(){
    let parsedData = "temp";
    try {
        let endpoint = endpointURI + ufoTitle + originString;

        yield fetch(endpoint, {method: "GET", headers: {'Content-Type':'application/json'}}).then(function(response){
            return response.json();
        }).then(function(data){
            parsedData = data
        })
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
    let parsedData = []
    try {
        yield* shipwrecksArray.map(function* (articleTitle) {
            let endpoint = endpointURI + articleTitle + originString
            yield fetch(endpoint, {method: "GET", headers: {'Content-Type':'application/json'}}).then(function(response){
                return response.json();
            }).then(function(data){
                parsedData.push(data)
            })
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
    yield takeLatest(GET_UFO_OBSERVATIONS_REQUESTED, fetchUFOObservations);
    yield takeLatest(GET_SHIPWRECK_OBSERVATIONS_REQUESTED, fetchShipwreckObservations);
}