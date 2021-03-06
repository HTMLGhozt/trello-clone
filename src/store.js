import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
