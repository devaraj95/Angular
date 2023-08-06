import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //user:User[]=[];

  id!:Number;
  user:User= new User();
  constructor(
  private router:ActivatedRoute,
  private userService:UserService,
  private routes:Router){

 }  
  //  ngOnInit(): void {
  //     this.userService.getEmployeeById()
  //  } 
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.userService.getEmployeeById(this.id).subscribe(data=>{
    this.user=data;}
    ,error=>console.log(error));
  } 


   updateUser(){
    this.userService.updateUser(this.id,this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error=>console.log(error));
  }
   onSubmit(form:NgForm){
    console.log(form);
    this.updateUser();
  }
     goToUserList(){
     this.routes.navigate(['/get-user'])
   }

}



  //  updateUser(){
  //   this.userService.updateUser(this.user).subscribe(data=>{
  //     console.log(data);
  //     this.goToUserList();
  //   },
  //   error=>console.log(error));
  // }
  //  onSubmit(form:NgForm){
  //   console.log(form);
  //   this.updateUser();
  // }
  //   goToUserList(){
  //    this.router.navigate(['/get-user'])
  //  }




// export class User{
//   id!:Number;
//   userName!:string;
//   email!:string;
//   gender!:string;
//   phoneNumber!:string;
//  // marriedStatus!:boolean;
//   city!:string;
//  }
