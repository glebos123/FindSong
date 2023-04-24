export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: any;
};

export type BaseResponseOfBoolean = {
  __typename?: 'BaseResponseOfBoolean';
  data: Scalars['Boolean'];
  description: Scalars['String'];
  statusCode: StatusCode;
};

export type BaseResponseOfIEnumerableOfSong = {
  __typename?: 'BaseResponseOfIEnumerableOfSong';
  data: Array<Song>;
  description: Scalars['String'];
  statusCode: StatusCode;
};

export type BaseResponseOfSong = {
  __typename?: 'BaseResponseOfSong';
  data: Song;
  description: Scalars['String'];
  statusCode: StatusCode;
};

export enum Instrumental {
  Electronic = 'ELECTRONIC',
  Live = 'LIVE',
  SemiElectronic = 'SEMI_ELECTRONIC'
}

export enum Mood {
  Despair = 'DESPAIR',
  Energy = 'ENERGY',
  Fear = 'FEAR',
  Malice = 'MALICE',
  Melancholy = 'MELANCHOLY',
  Yearning = 'YEARNING'
}

export type Mutations = {
  __typename?: 'Mutations';
  createSong: BaseResponseOfBoolean;
  deleteSong: BaseResponseOfBoolean;
  editSong: BaseResponseOfSong;
};


export type MutationsCreateSongArgs = {
  song: SongInput;
};


export type MutationsDeleteSongArgs = {
  id: Scalars['UUID'];
};


export type MutationsEditSongArgs = {
  id: Scalars['UUID'];
  song: SongInput;
};

export type Queries = {
  __typename?: 'Queries';
  byName: BaseResponseOfSong;
  similar: BaseResponseOfIEnumerableOfSong;
  song: BaseResponseOfSong;
  songs: BaseResponseOfIEnumerableOfSong;
};


export type QueriesByNameArgs = {
  name: Scalars['String'];
};


export type QueriesSimilarArgs = {
  instrumental: Instrumental;
  mood: Mood;
  name: Scalars['String'];
  speed: Speed;
  vocal: Vocal;
};


export type QueriesSongArgs = {
  id: Scalars['UUID'];
};

export type Song = {
  __typename?: 'Song';
  id?: Maybe<Scalars['UUID']>;
  instrumental: Instrumental;
  mood: Mood;
  songName: Scalars['String'];
  speed: Speed;
  vocal: Vocal;
};

export type SongInput = {
  id?: InputMaybe<Scalars['UUID']>;
  instrumental: Instrumental;
  mood: Mood;
  songName: Scalars['String'];
  speed: Speed;
  vocal: Vocal;
};

export enum Speed {
  Fast = 'FAST',
  Middle = 'MIDDLE',
  Slow = 'SLOW'
}

export enum StatusCode {
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  Ok = 'OK'
}

export enum Vocal {
  NoVocal = 'NO_VOCAL',
  Vocal = 'VOCAL'
}
