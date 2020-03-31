import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }

}
