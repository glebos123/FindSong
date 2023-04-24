import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSongQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
}>;


export type GetSongQuery = { __typename?: 'Queries', song: { __typename?: 'BaseResponseOfSong', description: string, statusCode: Types.StatusCode, data: { __typename?: 'Song', id?: any | null, songName: string, speed: Types.Speed, mood: Types.Mood, instrumental: Types.Instrumental, vocal: Types.Vocal } } };

export type GetSongByNameQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetSongByNameQuery = { __typename?: 'Queries', byName: { __typename?: 'BaseResponseOfSong', description: string, statusCode: Types.StatusCode, data: { __typename?: 'Song', id?: any | null, songName: string, speed: Types.Speed, mood: Types.Mood, instrumental: Types.Instrumental, vocal: Types.Vocal } } };

export type GetSongsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSongsQuery = { __typename?: 'Queries', songs: { __typename?: 'BaseResponseOfIEnumerableOfSong', description: string, statusCode: Types.StatusCode, data: Array<{ __typename?: 'Song', id?: any | null, songName: string, speed: Types.Speed, mood: Types.Mood, instrumental: Types.Instrumental, vocal: Types.Vocal }> } };

export type GetSimilarSongQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  mood: Types.Mood;
  instrumental: Types.Instrumental;
  vocal: Types.Vocal;
  speed: Types.Speed;
}>;


export type GetSimilarSongQuery = { __typename?: 'Queries', similar: { __typename?: 'BaseResponseOfIEnumerableOfSong', description: string, statusCode: Types.StatusCode, data: Array<{ __typename?: 'Song', id?: any | null, songName: string, speed: Types.Speed, mood: Types.Mood, instrumental: Types.Instrumental, vocal: Types.Vocal }> } };


export const GetSongDocument = gql`
    query GetSong($id: UUID!) {
  song(id: $id) {
    description
    statusCode
    data {
      id
      songName
      speed
      mood
      instrumental
      vocal
    }
  }
}
    `;

/**
 * __useGetSongQuery__
 *
 * To run a query within a React component, call `useGetSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSongQuery(baseOptions: Apollo.QueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
      }
export function useGetSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
        }
export type GetSongQueryHookResult = ReturnType<typeof useGetSongQuery>;
export type GetSongLazyQueryHookResult = ReturnType<typeof useGetSongLazyQuery>;
export type GetSongQueryResult = Apollo.QueryResult<GetSongQuery, GetSongQueryVariables>;
export const GetSongByNameDocument = gql`
    query GetSongByName($name: String!) {
  byName(name: $name) {
    description
    statusCode
    data {
      id
      songName
      speed
      mood
      instrumental
      vocal
    }
  }
}
    `;

/**
 * __useGetSongByNameQuery__
 *
 * To run a query within a React component, call `useGetSongByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSongByNameQuery(baseOptions: Apollo.QueryHookOptions<GetSongByNameQuery, GetSongByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongByNameQuery, GetSongByNameQueryVariables>(GetSongByNameDocument, options);
      }
export function useGetSongByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongByNameQuery, GetSongByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongByNameQuery, GetSongByNameQueryVariables>(GetSongByNameDocument, options);
        }
export type GetSongByNameQueryHookResult = ReturnType<typeof useGetSongByNameQuery>;
export type GetSongByNameLazyQueryHookResult = ReturnType<typeof useGetSongByNameLazyQuery>;
export type GetSongByNameQueryResult = Apollo.QueryResult<GetSongByNameQuery, GetSongByNameQueryVariables>;
export const GetSongsDocument = gql`
    query GetSongs {
  songs {
    description
    statusCode
    data {
      id
      songName
      speed
      mood
      instrumental
      vocal
    }
  }
}
    `;

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSongsQuery(baseOptions?: Apollo.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
      }
export function useGetSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
        }
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<typeof useGetSongsLazyQuery>;
export type GetSongsQueryResult = Apollo.QueryResult<GetSongsQuery, GetSongsQueryVariables>;
export const GetSimilarSongDocument = gql`
    query GetSimilarSong($name: String!, $mood: Mood!, $instrumental: Instrumental!, $vocal: Vocal!, $speed: Speed!) {
  similar(
    name: $name
    mood: $mood
    instrumental: $instrumental
    vocal: $vocal
    speed: $speed
  ) {
    description
    statusCode
    data {
      id
      songName
      speed
      mood
      instrumental
      vocal
    }
  }
}
    `;

/**
 * __useGetSimilarSongQuery__
 *
 * To run a query within a React component, call `useGetSimilarSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarSongQuery({
 *   variables: {
 *      name: // value for 'name'
 *      mood: // value for 'mood'
 *      instrumental: // value for 'instrumental'
 *      vocal: // value for 'vocal'
 *      speed: // value for 'speed'
 *   },
 * });
 */
export function useGetSimilarSongQuery(baseOptions: Apollo.QueryHookOptions<GetSimilarSongQuery, GetSimilarSongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarSongQuery, GetSimilarSongQueryVariables>(GetSimilarSongDocument, options);
      }
export function useGetSimilarSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarSongQuery, GetSimilarSongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarSongQuery, GetSimilarSongQueryVariables>(GetSimilarSongDocument, options);
        }
export type GetSimilarSongQueryHookResult = ReturnType<typeof useGetSimilarSongQuery>;
export type GetSimilarSongLazyQueryHookResult = ReturnType<typeof useGetSimilarSongLazyQuery>;
export type GetSimilarSongQueryResult = Apollo.QueryResult<GetSimilarSongQuery, GetSimilarSongQueryVariables>;