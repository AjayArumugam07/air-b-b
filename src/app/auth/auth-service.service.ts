import { Injectable } from '@angular/core';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _userIsAuthenticated = false;

  constructor() { }

 get userIsAuthenticated(){
   return this._userIsAuthenticated;
 }

  login(){
    this._userIsAuthenticated = true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }
}


