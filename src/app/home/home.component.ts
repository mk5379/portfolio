import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isActive : boolean = false

  onChange() : void {
    this.isActive = true
    console.log("It work")
  }
}
