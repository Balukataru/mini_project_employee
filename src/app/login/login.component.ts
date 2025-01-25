import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
public loginForm:FormGroup= new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
})

login(){
  
}

}
