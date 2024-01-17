import { HeaderComponent } from '../../app/components/header/components/header.component';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
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
    
        const link = fixture.debugElement.query(By.css('p'));
    
        expect(link.nativeElement.getAttribute('ng-reflect-router-link')).toBe('/');
    });
});
