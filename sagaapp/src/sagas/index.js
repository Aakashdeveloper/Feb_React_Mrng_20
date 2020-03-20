import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchFood() {
  const json = yield fetch('http://localhost:8900/food')
        .then(response => response.json(), );    
  yield put({ type: "FOOD_RECEIPE", json: json, });
}
function* fetchFood1() {
  const json = yield fetch('http://localhost:8900/food')
        .then(response => response.json(), );    
  yield put({ type: "FOOD_RECEIPE1", json: json, });
}


function* actionWatcher() {
     yield takeLatest('GET_FOOD', fetchFood)
}
function* actionWatcher1() {
  yield takeLatest('GET_FOOD1', fetchFood1)
}


export default function* rootSaga() {
   yield all([
   actionWatcher(),
   actionWatcher1()
   ]);
}