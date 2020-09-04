import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsQueueComponent } from './jobs-queue.component';

describe('JobsQueueComponent', () => {
  let component: JobsQueueComponent;
  let fixture: ComponentFixture<JobsQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
