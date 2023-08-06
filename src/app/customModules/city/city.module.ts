import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCityComponent } from 'src/app/masterComponents/update-city/update-city.component';
import { GetCityComponent } from 'src/app/masterComponents/get-city/get-city.component';
import { AddCityComponent } from 'src/app/masterComponents/add-city/add-city.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from 'src/app/masterComponents/city/city.component';
const routes: Routes = [
  {path:'add-user',component:AddCityComponent},
  {path:'edit-user/:id',component:UpdateCityComponent},
  {path:'',redirectTo:'get-user',pathMatch:'full'},
  {path:'get-user',component:GetCityComponent}

];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)]
  ], 
  exports: [RouterModule]
})
export class CityModule { }
