import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';
import Genre from '../models/genre.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}

  private apiKey = environment.apiKey;
  private genres: Genre[] = [];

  async getMovies({
    page,
    with_genres,
    year,
  }: {
    page: number;
    with_genres: string[];
    year: string;
  }): Promise<{ results: Movie[] } | null> {
    try {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.apiKey}`,
      });

      const params = {
        page: page,
        with_genres: with_genres.join(',') || '',
        primary_release_year: year,
        language: 'pt-BR'
      };

      const response = await firstValueFrom(
        this.http.get('https://api.themoviedb.org/3/discover/movie', {
          headers,
          params
        })
      );

      return response as { results: Movie[] };
    } catch (error) {
      return null;
    }
  }

  async getGenres(): Promise<{ genres: Genre[] } | null> {
    try {
      if (this.genres.length) {
        return { genres: this.genres };
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.apiKey}`,
      });

      const params = {
        language: 'pt-BR'
      };

      const response = await firstValueFrom(
        this.http.get('https://api.themoviedb.org/3/genre/movie/list', {
          headers,
          params
        })
      );

      this.genres = (response as { genres: Genre[] })['genres'];

      return response as { genres: Genre[] };
    } catch (err) {
      return null;
    }
  }

  async getMovieById(id: number): Promise<Movie | null> {
    try {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.apiKey}`,
      });

      const params = {
        language: 'pt-BR'
      };

      const response = await firstValueFrom(
        this.http.get(`https://api.themoviedb.org/3/movie/${id}`, {
          headers,
          params
        })
      );

      return response as Movie;
    } catch (err) {
      return null;
    }
  }
}
