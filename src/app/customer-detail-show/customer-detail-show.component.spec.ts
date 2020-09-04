import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailShowComponent } from './customer-detail-show.component';

describe('CustomerDetailShowComponent', () => {
  let component: CustomerDetailShowComponent;
  let fixture: ComponentFixture<CustomerDetailShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
