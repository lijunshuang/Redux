import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from "./serviceWorker";
import reducer from "./reducers";
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'

//创建saga中间件
// const sagaMiddleware = createSagaMiddleware()

// logger 中间件
const logger = store => next => action => {
    // console.log('dispatching', action);
    let result = next(action)
    console.log('next state', store.getState());
    return result;
}
// error中间件
const error = store => next => action => {
    try {
        next(action)
    } catch (e){ 
        console.log(`error ${e}`);
    }
}
// 配置中间件
const store = createStore(reducer, {}, applyMiddleware(thunk, logger, error));
//调用
// sagaMiddleware.run(rootSaga)

// 使用Provider 把store传给子组件
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
      );
};
render();
// store.subscribe(render)
serviceWorker.unregister();
