import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { WebService } from '../../../services/webService.service';
import { FormGroup, FormControl } from '@angular/forms';
import Movie from '../../../models/movie.model';
import Genre from '../../../models/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.html',
  styleUrls: ['../styles/home.sass']
})

export class HomeComponent {

  constructor(
    private webService: WebService,
    private router: Router
  ) {
    this.buildForm();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreMovies();
  }

  @ViewChild('loadTrigger') loadTrigger: ElementRef | null = null;
  queryForm: FormGroup = new FormGroup({});
  loadMoreSpinner: boolean = false;
  hasMoreMovies: boolean = true;
  showFilters: boolean = false;
  spinner: boolean = true;
  movies: Movie[] = [];
  genres: Genre[] = [];

  async ngOnInit() {
    this.spinner = true;

    const response = await this.webService.getMovies({ page: 1, with_genres: [], year: '' });

    if (response?.results?.length) {
      this.movies = response.results;
    }

    const genresResponse = await this.webService.getGenres();

    if (genresResponse && genresResponse.genres && genresResponse.genres.length) {
      this.genres = genresResponse.genres;
    }

    this.spinner = false;
  }

  updateMovies(movies: Movie[], page: number) {
    if (page === 1) {
      this.movies = movies;
    } else {
      this.movies = this.movies.concat(movies);
    }
  }

  generateGenreString(genreIds: number[]): string {
    const genreString = genreIds.reduce((acc, genreId) => {
      const genre = this.genres.find((genre) => genre.id === genreId);
      if (genre) {
        acc += `${genre.name}, `;
      }
      return acc;
    }, '');

    return genreString.slice(0, -2);
  }

  async getMoreMovies() {
    if (!this.hasMoreMovies || this.loadMoreSpinner) return;

    if (this.loadTrigger) {
        const nativeElement = this.loadTrigger.nativeElement;

        if (nativeElement.getBoundingClientRect().top < window.innerHeight) {
          this.loadMoreSpinner = true;

          const page = this.queryForm.get('page')?.value;

          this.queryForm.get('page')?.setValue(page + 1, { emitEvent: false });

          const response = await this.webService.getMovies(this.queryForm.value);
          
          if (response?.results?.length) {
            this.movies = this.movies.concat(response.results);
          }

          if (!response?.results?.length || response?.results?.length < 20 || response === null)
            this.hasMoreMovies = false;

          this.loadMoreSpinner = false;
        }
    }
  }

  async getNewQueryMovies(event: { page: number, with_genres: string[], year: string }) {
    this.spinner = true;
    this.hasMoreMovies = true;

    const response = await this.webService.getMovies(event);

    if (response?.results?.length) {
      this.movies = response.results;
    } else {
      this.movies = [];
    }

    this.spinner = false;
  }

  buildForm() {
    this.queryForm = new FormGroup({
      with_genres: new FormControl([]),
      year: new FormControl(''),
      page: new FormControl(1),
    });
  }

  redirectToMovieDetails(movieId: number) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`movie/${movieId}`]);
    });
  }
}
