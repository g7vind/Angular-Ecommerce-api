import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public api: ApiService) { }
  title = 'Ecart';
  data:any;
  ngOnInit() {  
    this.api.getData().subscribe(response=>{
      this.data = response;
    }); 
  }
}
