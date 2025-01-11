import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-info-fr';
}
