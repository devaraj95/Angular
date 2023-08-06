import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetUserComponent } from './get-user/get-user.component';


const routes: Routes = [
  {path:'add-user',component:AddUserComponent},
  {path:'edit-user/:id',component:EditUserComponent},
  {path:'delete-user',component:DeleteUserComponent},
  {path:'',redirectTo:'get-user',pathMatch:'full'},
  {path:'get-user',component:GetUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
