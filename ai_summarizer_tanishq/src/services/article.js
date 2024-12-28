import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';    

const rapidapiKey = import.meta.env.VITE_RAPIDAPI_KEY;


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key',rapidapiKey);
            headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `/summaries?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;
