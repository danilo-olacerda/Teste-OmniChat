import { QueryFormComponent } from '../../app/components/queryForm/components/queryForm.component';
import { SpinnerComponent } from '../../app/components/spinner/components/spinner.component';
import { HomeComponent } from '../../app/components/home/components/home.component';
import { WebService } from '../../app/services/webService.service';
import { AppModule } from '../../app/modules/app.module';
import { NgSelectComponent } from '@ng-select/ng-select';
import Movie from '../../app/models/movie.model';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let webService: WebService;
  let getMoviesSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        HomeComponent,
        SpinnerComponent,
        QueryFormComponent,
        NgSelectComponent,
      ],
      providers: [WebService],
    }).compileComponents();

    webService = TestBed.inject(WebService);

    getMoviesSpy = spyOn(webService, 'getMovies').and.returnValue(
      Promise.resolve({
        results: [
          {
            id: 1,
            title: 'test',
            overview: 'test',
            poster_path: 'test',
            backdrop_path: '',
            vote_average: 1,
            vote_count: 1,
            release_date: '2024-01-01',
            genre_ids: [1],
            genres: [{ id: 1, name: 'test' }],
            adult: false,
            original_language: 'en',
            original_title: 'test',
            popularity: 10,
            video: false,
          },
        ],
      })
    );
    spyOn(webService, 'getGenres').and.returnValue(
      Promise.resolve({ genres: [{ id: 1, name: 'test' }] })
    );
    spyOn(webService, 'getMovieById').and.returnValue(
      Promise.resolve({} as Movie)
    );
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
    home.loadMoreSpinner = false;
    home.movies = [];

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
    home.spinner = false;

    const spinnerContainer = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(spinnerContainer).toBeFalsy();
  });

  it('should show no movies found if movies is empty', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    getMoviesSpy.and.returnValue(Promise.resolve({ results: [] }));

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const noMoviesFound = fixture.debugElement.query(
        By.css('.no-movies-found')
      );

      expect(noMoviesFound).toBeTruthy();
    });
    tick(1000);
  }));

  it('should hide no movies found if movies is not empty', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.movies = [{} as Movie];
    fixture.detectChanges();

    const noMoviesFound = fixture.debugElement.query(
      By.css('.no-movies-found')
    );

    expect(noMoviesFound).toBeFalsy();
  });

  it('should show movies if movies is not empty', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movies = fixture.debugElement.query(By.css('.movies-container'));

      expect(movies).toBeTruthy();
    });
    tick(1000);
  }));

  it('should hide movies if movies is empty', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    getMoviesSpy.and.returnValue(Promise.resolve({ results: [] }));

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movies = fixture.debugElement.query(By.css('.movies-shown'));

      expect(movies).toBeFalsy();
    });
    tick(1000);
  }));
});
