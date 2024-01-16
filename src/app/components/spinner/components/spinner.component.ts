import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-container">
      <div class="spinner"></div>
    </div>
  `,
  styles: [`
    .spinner-container 
        display: flex
        justify-content: center
        align-items: center
        height: 100%
    

    .spinner 
        border: 6px solid rgba(0, 0, 0, 0.1)
        border-top: 6px solid #3498db
        border-radius: 50%
        width: 40px
        height: 40px
        animation: spin 1s linear infinite
    

    @keyframes spin 
        0%
            transform: rotate(0deg) 
        100%
            transform: rotate(360deg) 
    
  `]
})
export class SpinnerComponent {
}