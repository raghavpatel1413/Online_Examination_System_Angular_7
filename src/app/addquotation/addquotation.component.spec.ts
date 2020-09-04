import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquotationComponent } from './addquotation.component';

describe('AddquotationComponent', () => {
  let component: AddquotationComponent;
  let fixture: ComponentFixture<AddquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
