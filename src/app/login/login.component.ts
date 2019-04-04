import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private serviceAuth:AuthService){}
  login()
  {
      this.serviceAuth.login();
  }
}









// constructor(private service:AuthService)
//    { 
     
//    }
//    login()
//    {
//      this.service.login();

//    }
 
