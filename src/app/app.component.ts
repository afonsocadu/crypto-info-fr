import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
   }
}
