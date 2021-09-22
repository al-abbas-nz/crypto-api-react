import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//3. now we need to query an API with the help of provided functions from RTK.
// now go back to the store to connect this API to the store.

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'c59d84eb6bmshe7c4b366c694dbep14f598jsn285ef968c1dd',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

//RTK creates a hook that you can use to call your query!!!
//RTK creates this from the "getCryptos" method created in the above function. add use + Query (standard hook shape).

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
