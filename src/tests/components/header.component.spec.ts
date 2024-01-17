import { HeaderComponent } from '../../app/components/header/components/header.component';
import { AppModule } from '../../app/modules/app.module';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.componentInstance;
    expect(header).toBeTruthy();
  });

  it('should have a title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);

    const title = fixture.debugElement.query(By.css('p'));

    expect(title.nativeElement.textContent).toContain('Movie Finder');
  });

  it('should have a link to home', () => {
    const fixture = TestBed.createComponent(HeaderComponent);

    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('p[routerLink="/"]'));

    expect(link).toBeTruthy();
  });
});
