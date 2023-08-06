import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCityComponent } from './get-city.component';

describe('GetCityComponent', () => {
  let component: GetCityComponent;
  let fixture: ComponentFixture<GetCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCityComponent]
    });
    fixture = TestBed.createComponent(GetCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
