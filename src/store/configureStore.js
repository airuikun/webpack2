import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers'
import { createLogger } from 'redux-logger' // 写法跟之前相比有改动，主要是redux-logger版本升级原因

const rootReducer = combineReducers({
  ...reducers
})

export default (initialState) => {
  const store = compose(
      applyMiddleware(
          thunkMiddleware,
          createLogger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f //可以帮助自动生成redux的devtool界面
  )(createStore)(rootReducer, initialState);
  return store;
};