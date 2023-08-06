import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from 'src/app/masterComponents/city/city.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
const masterComponents=[
  FormsModule,ReactiveFormsModule 
]


@NgModule({
  declarations: [ CityComponent],
  imports: [
    CommonModule,
    masterComponents
  ],
  exports:[
    masterComponents
  ]
})
export class MasterModule { }
