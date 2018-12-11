import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import otherCityReducer from './reducers/otherCityReducer';

const rootReducer = combineReducers({
  weatherReducer,
  otherCityReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;