import { Component, OnInit } from '@angular/core';
import { Appareil } from './models/appareil';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

}

