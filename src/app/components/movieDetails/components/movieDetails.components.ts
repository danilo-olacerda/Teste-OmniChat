import { WebService } from '../../../services/webService.service'; 
import { ActivatedRoute } from '@angular/router';
import Genre from '../../../models/genre.model';
import Movie from '../../../models/movie.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-movie-details',
    templateUrl: '../templates/movieDetails.html',
    styles: [`
        .movie-title
            font-size: 30px

        .movie-container
            padding: 20px

        img 
            width: 100%
            border-radius: 5px
            margin-top: 20px

        .title-container
            display: flex
            justify-content: space-between
            align-items: center

        .back-button
            background: none
            border: none
            cursor: pointer
            font-size: 20px
            font-weight: bold
            color: #651FFF

        p 
            font-size: 20px
            margin-top: 20px
    `]
})

export class MovieDetailsComponent {
    constructor(
        private route: ActivatedRoute,
        private webService: WebService
    ) { }

    id: number = 0;
    movie: Movie = {} as Movie;
    spinner: boolean = true;
    genres: Genre[] = [];

    async ngOnInit() {

        const response = await this.webService.getGenres();

        if (response) {
            this.genres = response.genres;
        }

        this.route.params.subscribe(params => {
            const id = params['id'];

            if (id) {
                this.id = id;
                this.getMovie();
            }
        });
    }

    async getMovie() {
        this.spinner = true;

        const response = await this.webService.getMovieById(this.id);
        if (response) {
            this.movie = response;
        }

        this.spinner = false;
    }

    generateGenreString(genres: Genre[] = []): string {
        return genres.map((genre) => genre.name).join(', ');
    }
}