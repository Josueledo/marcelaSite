import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saiba',
  standalone: true,
  imports: [],
  templateUrl: './saiba.component.html',
  styleUrl: './saiba.component.scss'
})
export class SaibaComponent {
  route = inject(Router)
  menu(){
    this.route.navigateByUrl("/home")
  }
}
