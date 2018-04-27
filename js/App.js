import React from 'react';
import createLogger from 'redux-logger';
import dva from './utils/dva';
import Router, { routerMiddleware } from './router';
import appModel from './models/app';
import routerModel from './models/router';

const app = dva({
  initalState: {},
  models: [appModel, routerModel],
  onAction: [routerMiddleware, createLogger],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);

export default App;
