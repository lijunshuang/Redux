import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'


export function* helloSaga() {
    yield console.log('Hello Sagas!');
}
function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
  
  
  function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }
  
  
  // notice how we now only export the rootSaga
  // single entry point to start all Sagas at once
  export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }