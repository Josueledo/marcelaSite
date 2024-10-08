import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicialize',
  standalone: true,
  imports: [],
  templateUrl: './inicialize.component.html',
  styleUrl: './inicialize.component.scss'
})
export class InicializeComponent {

   route = inject(Router)
  ngOnInit(){
    setTimeout(() =>{
      console.log("foi")
      this.route.navigateByUrl("/home")
    },3000)
  }

}
