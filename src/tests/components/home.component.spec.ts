import { HomeComponent } from '../../app/components/home/components/home.component';
import { WebService } from '../../app/services/webService.service';
import { RouterTestingModule } from '@angular/router/testing';
import Movie from '../../app/models/movie.model';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
    let webService: WebService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
      providers: [WebService],
    }).compileComponents();

    webService = TestBed.inject(WebService);

    spyOn(webService, 'getMovies').and.returnValue(Promise.resolve({ results: [] }));
    spyOn(webService, 'getGenres').and.returnValue(Promise.resolve({ genres: [] }));
    spyOn(webService, 'getMovieById').and.returnValue(Promise.resolve({} as Movie));
  });

  it('should create the home', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should show spinner-container if spinner is true', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.spinner = true;
    fixture.detectChanges();

    const spinnerContainer = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(spinnerContainer).toBeTruthy();
  });

  it('should hide spinner-container if spinner is false', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.spinner = false;
    fixture.detectChanges();

    const spinnerContainer = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(spinnerContainer).toBeFalsy();
  });

  it('should show query-form if showFilters is true', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.showFilters = true;
    fixture.detectChanges();

    const queryForm = fixture.debugElement.query(By.css('app-query-form'));

    expect(queryForm).toBeTruthy();
  });

  it('should hide query-form if showFilters is false', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.showFilters = false;
    fixture.detectChanges();

    const queryForm = fixture.debugElement.query(By.css('app-query-form'));

    expect(queryForm).toBeFalsy();
  });

  it('should show spinner-container if loadMoreSpinner is true', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.loadMoreSpinner = true;
    fixture.detectChanges();

    const spinnerContainer = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(spinnerContainer).toBeTruthy();
  });

  it('should hide spinner-container if loadMoreSpinner is false', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.loadMoreSpinner = false;
    fixture.detectChanges();

    const spinnerContainer = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(spinnerContainer).toBeFalsy();
  });

  it('should show no movies found if movies is empty', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.movies = [];
    fixture.detectChanges();

    const noMoviesFound = fixture.debugElement.query(
      By.css('.no-movies-found')
    );

    expect(noMoviesFound).toBeTruthy();
  });

  it('should hide no movies found if movies is not empty', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.movies = [];
    fixture.detectChanges();

    const noMoviesFound = fixture.debugElement.query(
      By.css('.no-movies-found')
    );

    expect(noMoviesFound).toBeFalsy();
  });

  it('should show movies if movies is not empty', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.movies = [{} as Movie];
    fixture.detectChanges();

    const movies = fixture.debugElement.query(By.css('.movies-container'));

    expect(movies).toBeTruthy();
  });

  it('should hide movies if movies is empty', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.movies = [];
    fixture.detectChanges();

    const movies = fixture.debugElement.query(By.css('.movies-container'));

    expect(movies).toBeFalsy();
  });
});
