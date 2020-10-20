import packageJSON from '../package.json';
export function customMiddleware({getState}) {
  return next => action => {
      let defaultState = getState();
    next(action);
  }
}

