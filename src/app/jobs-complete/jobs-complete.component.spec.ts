import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCompleteComponent } from './jobs-complete.component';

describe('JobsCompleteComponent', () => {
  let component: JobsCompleteComponent;
  let fixture: ComponentFixture<JobsCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
