import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  route = inject(Router)
  feedback(){
    this.route.navigateByUrl("/feedback")
  }
  sobre(){
    this.route.navigateByUrl("/sobre")
  }
  saiba(){
    this.route.navigateByUrl("/saiba")
  }
}
