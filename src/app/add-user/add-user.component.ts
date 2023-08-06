import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import {FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { City } from '../model/city';
import { User } from '../user';

//import { User } from '../user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
//city:City[]= [];
  cities:City[]= [];
  // city:City=new City(
        
  //   );
 user:User= new User();
  constructor(private userservice:UserService,
  private router:Router){
 }
  ngOnInit(): void {
    this.getCity();
 }
 getCity(){
  this.userservice.getAllCity().subscribe(data=>{
    this.cities=data;
    });
}

  addUser(){
      this.userservice.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error=>console.log(error));
  }
  onSubmit(form:NgForm){
    console.log(form);
   
    this.addUser();
  }

   goToUserList(){
     this.router.navigate(['/get-user'])
   }
  //  getCity(){
  //   this.userservice.getAllCity().subscribe(data=>{
  //     this.cities=data;
  //     });
  // }
  // getCity(){
  //   this.userservice.getAllCity().subscribe(data=>{
  //     this.city=data;
  //     });
  // }
  // getCity(){
  //   this.userservice.getAllCity().subscribe((data:any)=>{
  //   this.city=data.city;
  //   });
  // }

 }

//  user:User[]=[];
//  constructor(private http:HttpClient){
// } 
//    ngOnInit(): void {
        
//    }
//     contactForm =new FormGroup({
//     UserName: new FormControl(""),
//     email: new FormControl(""),
//     phoneNumber:new FormControl(""),
//     gender: new FormControl(""),
//     id: new FormControl("")
//    }
//   )

//     // onSubmit(form:NgForm){
//     // this.addUser().subscribe((response)=> {
//     // this.user.push(response)
//     // })}
//     onSubmit(){
//       //console.log(this.userForm.value);
//       this.addUser().subscribe((resonse:any)=> {
//       this.user.push(response);

//       })
//     }

//        addUser(){
//         this.http.post<User>('http://localhost:8080/saves',{
//         userName:this.contactForm.controls.UserName.value,
//         email:this.contactForm.controls.email.value,
//         phoneNumber:this.contactForm.controls.phoneNumber,
//         gender:this.contactForm.controls.gender,
//         id:this.contactForm.controls.id,
//          })
      
//    }
    


  // class User{
  //   id!:Number;
  //   userName!:string;
  //   email!:string;
  //   gender!:string;
  //   phoneNumber!:string;
  //  // marriedStatus!:boolean;
  //  city!:string;
  
  //  }






  // users:User[]=[];
  // user:User = new User(
    
  // );
  //  constructor(private http:HttpClient){
  // }  
    // ngOnInit(): void {
    // this.getUsers().subscribe((response)=> 
    // {console.log('response:',response)
    //  this.users=response;
    // } );
   
    // }
  

  //   getUsers(){
  //   return this.http.get<User[]>('http://localhost:8080/getAll');
  //  }


  //-----------------------------------------
 
    // onSubmit(form:NgForm){
    // this.addUser().subscribe((response)=> {
    // this.users.push(response)
    // })
    // onSubmit(){
    //   this.addUser(user).
    //     //this.addUser(user).subscribe((response)=>{
    //     //this.user.push(response)
    //   })
  

      //addUser(user:User){
     //   this.http.post<any>('http://localhost:8080/saves',user)
     // }

      // addUser(){
      //   this.http.post<User>('http://localhost:8080/saves',{
      //   userName:this.user.userName.
      //   email:this.user.city.,
      //   phoneNumber:this.user.phoneNumber,
      //   gender:this.user.gender,
      //   id:this.user.id,
         

    
    
      
 

  









  //   onSubmit(){
  //       //console.log(this.userForm.value);
  //   this.addUser().subscribe((response)=> {
  //   this.users.push(response)
  //   })
  // }
 
    // addUser(){
    //   return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
    //    // name:this.userForm.controls.name.value,
    //    // email:this.userForm.controls.email.value
    //   }
    //   )





  //  constructor(
  //  public id:Number,
  //  public userName:string,
  //  public  email:string,
  //  public gender:string,
  //  public phoneNumber:string,
  // // public marriedStatus:boolean,
  //  public city:string
  // ){}


  // id!:Number;
  // userName!:string;
  // String!:string;
  // email!:string;
  // gender!:string;
  // phoneNumber!:string;
  // marriedStatus!:boolean;
  // city!:string;

  // address!:{
  //        city:string;
  //      street:string;
  //     pincode:string;
  // }
//    Integer id;
//   String userName;
//  String dob;
//  String email;
//   String gender;
//   String phoneNumber;
//  boolean marriedStatus;
//  city!String;
//   String designation;



//  users:User[]=[];

// //   constructor(http:HttpClient){ 
// // }
// constructor(private http:HttpClient){
// }
// ngOnInit(): void {
//     this.getUsers().subscribe((response)=>
//    // {console.log('response:',response)}
//    {this.users=response;} // response --> Object ,user--> Array 
//     )
// }
//   getUsers(){
//     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
//   }

// }

// class User{
//   name!:string;
// }

