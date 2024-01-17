import { SpinnerComponent } from '../../app/components/spinner/components/spinner.component';
import { AppModule } from '../../app/modules/app.module';
import { TestBed } from '@angular/core/testing';

describe('SpinnerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [SpinnerComponent],
    }).compileComponents();
  });

  it('should create the spinner', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
