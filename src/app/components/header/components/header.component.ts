import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.html',
  styles: [`
    .container 
        width: 100%
        background-color: #e3d9d8
        overflow: hidden
        height: 50px
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
        display: flex
        justify-content: center
        align-items: center
        position: fixed
        top: 0px
        right: 0
        z-index: 1
        

    .container p 
        font-weight: bold
        font-size: 35px
        color: #651FFF
        font-family: 'Sofia'
        text-shadow: 0px 0px 5px rgba(0,0,0,0.75)
  `]
})

export class HeaderComponent {
}
