import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseUrl'
import { SiteType, UserType } from '../types/types'
interface ApiResponse {
  data: SiteType[];
  totalPages: number;
}


export const tracktikAPI = createApi({

  reducerPath: 'tracktikAPI',
  tagTypes: ['challenges'],
  baseQuery,
  endpoints: (builder) => ({
    fetchSites: builder.query<ApiResponse, { page: number; limit: number; searchQuery?: string; filterQuery?: string }>({
      query: ({ page, limit, searchQuery,filterQuery  }) => {
        let url = `sites?_expand=client&_page=${page}&_limit=${limit}`;
        if (searchQuery) {
          url += `&q=${searchQuery}`;
        }
        if (filterQuery) {
          url += `&client.givenName=Tower`;
        }
        return url;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformResponse: (response: any, meta, arg) => {
    const totalCount = parseInt(meta?.response?.headers.get('X-Total-Count') || '0', 10);
    return { data: response, totalPages: Math.ceil(totalCount / arg.limit) };
  },
}),
    fetchClient: builder.query({
      query: () => "clients?_page=1&_limit=5"
    }),
    fetchSingleSite: builder.query<SiteType,string>({
      query: (id:string) => `sites/${id}?_expand=client`
    }),
    fetchUser: builder.query<UserType,null>({
      query: () => "me"
    }),
    addTodo:  builder.mutation({
      query: (data) => ({
        url: `sites`,
        method: 'GET',
        body: data,
      }),
    }),
  
    
    
    
})
})

export const {
    useFetchSitesQuery,
    useFetchClientQuery,
    useFetchUserQuery,
    useFetchSingleSiteQuery,
    useAddTodoMutation,

   
} = tracktikAPI