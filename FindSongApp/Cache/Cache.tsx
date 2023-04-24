import {InMemoryCache, makeVar, ReactiveVar} from "@apollo/client";

export const MemoryCache: InMemoryCache = new InMemoryCache(
    {
        typePolicies: {
            Query: {
                fields: {
                    GetSong: {
                        read() {
                            return GetSong();
                        }
                    },
                  
                }
            },

        }
    }
)
export const GetSong: ReactiveVar<{  id?: any | null, songName: string, speed: string, mood: string } | null > = makeVar<{  id?: any | null, songName: string, speed: string, mood: string }  | null>(null)
