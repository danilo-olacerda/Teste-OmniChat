import { QueryFormComponent } from '../../app/components/queryForm/components/queryForm.component';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AppModule } from '../../app/modules/app.module';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('queryFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [QueryFormComponent, NgSelectComponent],
    }).compileComponents();
  });

  it('should create the queryForm', () => {
    const fixture = TestBed.createComponent(QueryFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a queryForm', () => {
    const fixture = TestBed.createComponent(QueryFormComponent);
    const app = fixture.componentInstance;
    expect(app.queryForm).toBeTruthy();
  });

  it('should have a genres', () => {
    const fixture = TestBed.createComponent(QueryFormComponent);
    const app = fixture.componentInstance;
    expect(app.genres).toBeTruthy();
  });

  it('should have a select of genres', () => {
    const fixture = TestBed.createComponent(QueryFormComponent);

    const select = fixture.debugElement.query(By.css('ng-select'));

    expect(select).toBeTruthy();
  });

  it('should have a input of release year', () => {
    const fixture = TestBed.createComponent(QueryFormComponent);

    const input = fixture.debugElement.query(By.css('input'));

    expect(input).toBeTruthy();
  });
});
