import {Deserializable} from "./Deserializable";

export class Movie {
        vote_count: number;
        id: number;
        video: boolean;
        vote_average: number;
        title: string;
        popularity: number;
        poster_path: string;
        original_language: string;
        original_title: string;
        genre_ids: number[];
        backdrop_path: string;
        adult: boolean;
        overview: string;
        release_date: string;

        deserialize(input: any) {
            Object.assign(this, input);
            return this;
          }
}