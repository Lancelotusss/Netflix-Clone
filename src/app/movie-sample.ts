export interface Movie {
  page: number;
  results: [{
    name: string;
    release_date: string;
    poster_path: string | null;
    adult: boolean;
    overview: string;
    genre_ids: number[] | null
    id: number
    original_title: string;
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number;
    vote_count: number
    video: boolean
    vote_average: number
  }
  ]
  total_results: number
  total_pages: number
}
