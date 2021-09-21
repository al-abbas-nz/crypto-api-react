import { configureStore } from '@reduxjs/toolkit';
//4. import the API!
// then pass the API reducerPath to the store reducer.
//RTK does the heavylifting - rinse and repeat.

import { cryptoApi } from '../services/cryptoApi';

//step 1 - create the store!
// then go to ./src/index.js

export default configureStore({
  reducer: { [cryptoApi.reducerPath]: cryptoApi.reducer },
});
