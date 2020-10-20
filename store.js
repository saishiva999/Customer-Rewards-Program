import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import treeData from './app/reducers';
import {customMiddleware} from './libs/customMiddleWare';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,thunkMiddleware,customMiddleware)(createStore);
const store = createStoreWithMiddleware(treeData);

export default store;

