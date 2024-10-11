import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  selecteds: any[] = [];
  route = inject(Router);
  home() {
    this.route.navigateByUrl('/home');
  }
  select(e: any) {
    if(this.selecteds.length > 0){
      for (let i = 0; this.selecteds.length > i; i++) {
        this.selecteds[i].style.color = 'rgb(133, 133, 133)';
        this.selecteds[i].style.background = 'transparent';
      }
      this.selecteds = [];
    }
    this.selecteds.push(e);
    console.log(this.selecteds);
    this.selecteds[0].style.color = 'rgb(238, 167, 35)';
    this.selecteds[0].style.background = ' rgb(233, 231, 229)';
  }
}
