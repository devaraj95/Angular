import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import {HttpClientModule} from '@angular/common/http';
import { GetUserComponent } from './get-user/get-user.component';
import { CityComponent } from './masterComponents/city/city.component';
//import { UpdateCityComponent } from './masterComponents/update-city/update-city.component';
//import { GetCityComponent } from './masterComponents/get-city/get-city.component';
//import { AddCityComponent } from './masterComponents/add-city/add-city.component';
import { CityModule } from './customModules/city/city.module';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    GetUserComponent,
    CityComponent,
    // UpdateCityComponent,
    // GetCityComponent,
    // AddCityComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CityModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
