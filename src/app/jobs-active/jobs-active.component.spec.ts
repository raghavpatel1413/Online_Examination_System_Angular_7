import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsActiveComponent } from './jobs-active.component';

describe('JobsActiveComponent', () => {
  let component: JobsActiveComponent;
  let fixture: ComponentFixture<JobsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
