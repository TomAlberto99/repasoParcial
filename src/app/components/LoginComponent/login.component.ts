import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public user : User = new User();

  ngOnInit(): void {
    
  }
  constructor(private authService : AuthService, private router:Router){

  }

 public async checkAuth(){
  console.log(this.user);
  
  const check = this.authService.checkLog(this.user.email,this.user.password);
  if(await check){
    this.router.navigate(["/home"]);
  }else{
    alert("No existe el usuario");
  }
 }

 public registrarme(){
  this.router.navigate(["/registro"]);
 }


}
