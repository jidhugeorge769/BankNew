import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="happy banking with us"
data2="enter account number"

constructor() {}

ngOnInit(): void {

}

login(a:any ,b:any){

  console.log(a.value);
  console.log(b.value);
  
  alert("login clicked")
}

}
