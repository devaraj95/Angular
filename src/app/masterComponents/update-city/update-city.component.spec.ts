import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCityComponent } from './update-city.component';

describe('UpdateCityComponent', () => {
  let component: UpdateCityComponent;
  let fixture: ComponentFixture<UpdateCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCityComponent]
    });
    fixture = TestBed.createComponent(UpdateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
