import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsOrderComponent } from './jobs-order.component';

describe('JobsOrderComponent', () => {
  let component: JobsOrderComponent;
  let fixture: ComponentFixture<JobsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
