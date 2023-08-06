import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { City } from '../model/city';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit{
 // user:User[]=[];
  city!:City[];
 //city:City=new City();
  user!:User[];
  private baseURL="http://localhost:8080";

  constructor(private http:HttpClient,
    private router:Router,
    private userService:UserService){
  }  
    ngOnInit(): void {
      this.getUser();
     this.getCity();
   }
    getUser(){
      this.userService.getUsers().subscribe(data=>{
        this.user=data;
      });
    }

   editUser(id:Number){
    this.router.navigate(['edit-user',id]);
   }

   addUser(){
    this.router.navigate(['add-user'])
   }

   deleteEmployee(id:Number){
    this.userService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
   // this.router.navigate(['get-user'])
   // window.location.reload();
     this.getUser();
   });
}

//    getCity(){
//   this.userService.getAllCity().subscribe(data=>{
//   this.city=data;
//   });
// }

getCity(){
  this.userService.getAllCity().subscribe((data:any)=>{
  this.city=data.city;
  });
}

}

//     deleteEmployee(id:Number){
//   this.userService.deleteEmployee(id).subscribe();

//   this.router.navigate(['get-user'])
//   window.location.reload();
//  // this.getUser();

 // this.userService.deleteEmployee(id).subscribe((data)=>{
    //   console.log(data);
    //   this.ngOnInit();
    // })
   // this.router.navigate(['delete-user',id])
  //  this.userService.deleteEmployee(id).subscribe( (data) => {
  //   console.log(data);
  //   this.ngOnInit();
  // })


//   ngOnInit(): void {
//     this.getUser();
//   // this.getUsers().subscribe((response)=> 
//   // {console.log('response:',response)
//   //  this.users=response;
//   // } );
//  }
    // getUsers(){
    // return this.http.get<User[]>('http://localhost:8080/getAll');
    // }
