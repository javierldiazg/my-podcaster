import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itunes.apple.com' }),
  endpoints: builder => ({
    getPodcasts: builder.query({
      query: () => '/us/rss/toppodcasts/limit=100/genre=1310/json'
    }),
    getPodcast: builder.query({
      query: podcastId => `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    }),
  })
});

export const { useGetPodcastsQuery, useGetPodcastQuery } = apiSlice;
