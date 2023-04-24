import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateSongMutationVariables = Types.Exact<{
  song: Types.SongInput;
}>;


export type CreateSongMutation = { __typename?: 'Mutations', createSong: { __typename?: 'BaseResponseOfBoolean', description: string, statusCode: Types.StatusCode, data: boolean } };

export type DeleteSongMutationVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
}>;


export type DeleteSongMutation = { __typename?: 'Mutations', deleteSong: { __typename?: 'BaseResponseOfBoolean', data: boolean, description: string, statusCode: Types.StatusCode } };

export type EditSongMutationVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
  song: Types.SongInput;
}>;


export type EditSongMutation = { __typename?: 'Mutations', editSong: { __typename?: 'BaseResponseOfSong', description: string, statusCode: Types.StatusCode, data: { __typename?: 'Song', id?: any | null, mood: Types.Mood, songName: string, speed: Types.Speed, instrumental: Types.Instrumental, vocal: Types.Vocal } } };


export const CreateSongDocument = gql`
    mutation CreateSong($song: SongInput!) {
  createSong(song: $song) {
    description
    statusCode
    data
  }
}
    `;
export type CreateSongMutationFn = Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      song: // value for 'song'
 *   },
 * });
 */
export function useCreateSongMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, options);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const DeleteSongDocument = gql`
    mutation DeleteSong($id: UUID!) {
  deleteSong(id: $id) {
    data
    description
    statusCode
  }
}
    `;
export type DeleteSongMutationFn = Apollo.MutationFunction<DeleteSongMutation, DeleteSongMutationVariables>;

/**
 * __useDeleteSongMutation__
 *
 * To run a mutation, you first call `useDeleteSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSongMutation, { data, loading, error }] = useDeleteSongMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSongMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSongMutation, DeleteSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSongMutation, DeleteSongMutationVariables>(DeleteSongDocument, options);
      }
export type DeleteSongMutationHookResult = ReturnType<typeof useDeleteSongMutation>;
export type DeleteSongMutationResult = Apollo.MutationResult<DeleteSongMutation>;
export type DeleteSongMutationOptions = Apollo.BaseMutationOptions<DeleteSongMutation, DeleteSongMutationVariables>;
export const EditSongDocument = gql`
    mutation EditSong($id: UUID!, $song: SongInput!) {
  editSong(id: $id, song: $song) {
    data {
      id
      mood
      songName
      speed
      instrumental
      vocal
    }
    description
    statusCode
  }
}
    `;
export type EditSongMutationFn = Apollo.MutationFunction<EditSongMutation, EditSongMutationVariables>;

/**
 * __useEditSongMutation__
 *
 * To run a mutation, you first call `useEditSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSongMutation, { data, loading, error }] = useEditSongMutation({
 *   variables: {
 *      id: // value for 'id'
 *      song: // value for 'song'
 *   },
 * });
 */
export function useEditSongMutation(baseOptions?: Apollo.MutationHookOptions<EditSongMutation, EditSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSongMutation, EditSongMutationVariables>(EditSongDocument, options);
      }
export type EditSongMutationHookResult = ReturnType<typeof useEditSongMutation>;
export type EditSongMutationResult = Apollo.MutationResult<EditSongMutation>;
export type EditSongMutationOptions = Apollo.BaseMutationOptions<EditSongMutation, EditSongMutationVariables>;