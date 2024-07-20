import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://tracktik-challenge.staffr.com',
});

export default baseQuery
