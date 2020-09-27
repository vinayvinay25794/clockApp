import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;
  constructor(private router:Router) { }

  ngOnInit() {
  }
     
login(loginForm)

{
  this.data=loginForm.form.value;
  var input1=document.getElementById("txt");

  var input2=document.getElementById("pwd");
console.log(this.data);


console.log(input1.innerText+""+input2.innerText);
  if(this.data.username =="Admin" && this.data.password=="admin123")
  {
    this.router.navigate(['clock']);
    //alert("Enter correct password");
  }
  
}

}
