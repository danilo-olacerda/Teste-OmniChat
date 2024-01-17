import { MovieDetailsComponent } from '../../app/components/movieDetails/components/movieDetails.components';
import { SpinnerComponent } from '../../app/components/spinner/components/spinner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { WebService } from '../../app/services/webService.service';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppModule } from '../../app/modules/app.module';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let webService: WebService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      declarations: [MovieDetailsComponent, SpinnerComponent],
      providers: [WebService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: 'fakeId' }),
          snapshot: {
            paramMap: convertToParamMap({ id: 'fakeId' }),
          },
        },
      },],
    }).compileComponents();

    webService = TestBed.inject(WebService);

    spyOn(webService, 'getMovieById').and.returnValue(
      Promise.resolve({
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
      })
    );

    spyOn(webService, 'getGenres').and.returnValue(
      Promise.resolve({ genres: [{ id: 1, name: 'test' }] })
    );
  });

  it('should create the MovieDetailsComponent', () => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a movie', () => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();

    const app = fixture.componentInstance;
    expect(app.movie).toBeTruthy();
  });

  it('should have a spinner', () => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('app-spinner'));

    expect(spinner).toBeTruthy();
  });

  it('should have a movie title', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-title'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie overview', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-overview'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie release date', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-release-date'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie genres', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-genres'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie vote count', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-vote-count'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie score', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      console.log(fixture.nativeElement.innerHTML)

      const movie = fixture.debugElement.query(By.css('.movie-score'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));

  it('should have a movie popularity', fakeAsync(() => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);

    fixture.detectChanges();
    tick();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const movie = fixture.debugElement.query(By.css('.movie-popularity'));

      expect(movie).toBeTruthy();
    });
    tick(1000);
  }));
});
